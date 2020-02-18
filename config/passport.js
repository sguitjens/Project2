const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const db = require('../models')

//serialize sessions
passport.serializeUser(function(user, done){
    done(null, user);
});

//deserialize sessions

passport.deserializeUser(function(user, done){
    db.User.find({where: {id: user.id}}).success(function(user){
        done(null, user);
    }).error(function(err){
        done(err,null)
    });
});

//for authentication purposes 
passport.use(new LocalStrategy(
    function(username,password,done){
        db.User.find({where: {username: username}}).success(function(user){
            passwd = user ? user.password : ''
            isMatch = db.User.validPassword(password, passwd, done, user)

        }); 
    }
));