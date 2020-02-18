const bcrypt = require('bcrypt-node.js')
module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('User', {
        username: {type: DataTypes.STRING, unique: true, validate: {notNull: true, notEmpty: true}}
        password: {type: DataTypes.STRING, validate: {notNull: true, notEmpty: true}}
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
        }
    },
    {
        dialect: 'mysql'
    }
);
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