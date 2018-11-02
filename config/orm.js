var connection = require('./connection.js');

function objectToSql(object) {
    var arr = [];
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
    return arr.toString();
}

var orm = {
    selectAll: function(tableName, cb) {
        var queryString = 'SELECT * FROM ??';
        connection.query(queryString, [tableName], function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableName, colName, colValue, cb) {
        var queryString = 'INSERT INTO ?? (?) VALUES (?)';
        connection.query(queryString, [tableName, colName, colValue], function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(tableName, colValsObj, id, cb) {
        var queryString = 'UPDATE ' + tableName;
        query += 'SET ' + objectToSql(colValsObj);
        query += 'WHERE id = ' + id;
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;