/*eslint prefer-const: "error"*/
/*eslint-env es6*/
const bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
  },
  user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [2]
      }
  },
  password: {
     type: DataTypes.STRING,
     allowNull:false,
     validate:{
       len: [2]
     }
  },
  picture_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [2]
      }
  },
  email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [2]
      }
  },
  createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  },
  updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  }
}, {
  classMethods: {
      associate: function (models) {
          User.belongsToMany(models.Post, {
              through: models.UserPost
          });
      }
  }
}, {

  timestamps: true

});

  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};
