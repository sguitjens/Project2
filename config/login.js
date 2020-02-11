var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 8080,
	user: 'root',
	password: '',
	database: 'nodelogin'
});

var connection = mysql.createConnection(source.localhost);

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  module.exports = connection;