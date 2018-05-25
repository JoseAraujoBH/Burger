var mysql = require("mysql");

// we placed the connections in this source object
var source = {
  // localhost
  localhost: {
    port: 3306,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
  },

  // jawsDB
  jawsDB: {
    port: 3306,
    host: "zf4nk2bcqjvif4in.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "dnvt8d3j6eulejjd",
    password: "sobveycylclgcfhg",
    database: "cv7gwj6wyr5rsqmc"
  }
};

// we use source.[name of connection] to hook into mysql
var connection = mysql.createConnection(source.jawsDB);

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;