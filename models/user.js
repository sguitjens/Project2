const bcrypt = require('bcrypt-node.js')
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // The email cannot be null, and must be a proper email before creation
      username: {
          type: DataTypes.STRING, 
          unique: true,
          validate: {
              notNull: true, 
              notEmpty: true
          }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
    
      password: {
        type: DataTypes.STRING,
        unique: true, 
        validate: {
            notNull: true, 
            notEmpty: true
        }
      },

    {
        classMethods: {
            validPassword: function(password, passwd, done, user){
                bycrpt.compare(password, passwd, function(err, isMatch){
                    if (err) console.log(err)
                    if(isMatch) {
                        return done(null, user)
                    } else {
                        return done(null, false)
                    }
                });
            }
        },
    },
    {
        dialect: 'mysql'
    }
});
user.hook('beforeCreate', function(user, fn){
    var salt = bycrpt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        return salt
    });
    bycrpt.hash(user.password, salt, null, function(err, hash){
        if(err) return next(err);
        user.password = hash;
        return fn(null,user)
    });
})
return User
}