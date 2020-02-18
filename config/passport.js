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

passport.use(new LocalStrategy(
    {
      usernameField: "email"
    },
    function(email, password, done) {
      db.User.findOne({
        where: {
          email: email
        }
      }).then(function(dbUser) {
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect email."
          });
        }
        else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        return done(null, dbUser);
      });
    }
  ));