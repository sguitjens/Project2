//dependencies
// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
const methodOverride = require ("method-override");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

// const passport = require ('passport');
const util = require ('util');
const GitHubStrategy = require ('passport-github2').Strategy;
const partials = require('express-partials');

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Requiring passport as we've configured it
const passport = require("./config/passport");

const GITHUB_CLIENT_ID = "1abe7445a2c8ca972e71";
const GITHUB_CLIENT_SECRET = "1e5bc4269f11fa66aef07b9c0a95c211933d13cb";


//passport sesh setup
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: ""
},
function(accessToken, refreshToken, profile, done) {

  process.nextTick(function () {
    
    return done(null, profile);
  });
}
));
// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(partials());
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(methodOverride("_method"));


//using bodyparser for post and put data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Initialize Passport!  
app.use(passport.initialize());
app.use(passport.session());


// Links the static content (i.e. css and images)
app.use(express.static(__dirname + '/assets'));
// 

// Set the engine up for handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//importing routes
var labRoutes = require("./routes/lab_routes.js")(app);

var loginRoutes = require("./routes/login_routes.js")(app);

var pageRoutes = require("./routes/pages_routes.js")(app);

//syncing database and listening 
db.sequelize.sync().then(function() {
    app.listen(PORT, function () {
console.log("App listening this awesome PORT: " + PORT);
    });
});
