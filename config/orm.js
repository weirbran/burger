var connection = require("./connection.js");

var orm = {
  selectAll: function(table_name, cb) {
    var queryString = "SELECT * FROM " + table_name + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      //cb used to pass result into next file, which is burger.js (where it is require)
      cb(result);
    });
  },
  insertOne: function(table_name, val, cb) {
    connection.query(
      "INSERT INTO " + table_name + " (burger_name) VALUES ('" + val + "');",
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  },
  updateOne: function(table_name, id, cb) {
    connection.query(
      "UPDATE " + table_name + " SET devoured=1 WHERE id=" + id + ";",
      function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  }
};

module.exports = orm;
