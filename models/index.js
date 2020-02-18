exports.index = function(req, res) {
  res.render("login.ejs");
}

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const lodash = require('lodash')
const sequelize = new Sequelize('goatjs', 'root', null)
const db = {}

fs
.readdirSync(__dirname)
.filter(function(file) {
  return (file.indexof('.') !== 0) && (file!=='index.js')

})
.forEach(function(file){
var model = sequelize.import(path.join(__dirname, file))
db[model.name] = model 
})

module.exports = lodash.extend({
  sequelize: sequelize, 
  Sequelize: Sequelize 
}, db)