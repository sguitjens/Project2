const routes = require('./routes')
const express = require('express')
const app = express()
const user = require('./routes/user')
const db = require('./models')
const http = require('http')
const passport = require('passport')
const passportConfig = require('./config/passport')
const home = require('./routes/home')
const application = require('./routes/application')

SALT_WORK_FACTOR = 12; 

app.use('/public', express.static(__dirname+'/public'));
app.set('views', __dirname + '/views')
app.set('port', process.env.PORT || 8080)

app.use(express.urlencoded())
app.use(express.bodyParser())
app.use(express.cookieParser())
app.use(express.session({ secret: 'goatjkformakeberttersecurity'}))
app.use(passport.initialize())
app.use(passport.session())
app.use(app.router)

if ('development' === app.get('env')) {
    app.use(express.errorHandler())
}

app.get('/, routes.index')
app.get('/home', application.IsAuthenticated, home.homepage)
app.post('/authenticate',
passport.authenticate('local', {
    successRedirect: '/home', 
    failureRedirect: '/'
})
)
app.get('/logout', application.destroySession)
app.get('/signup', user.signUp)
app.post('/register', user.register)

db.sequelize.sync().then(function() {
    app.listen(PORT, function () {
console.log("App listening this awesome PORT: " + PORT);
    });
});

