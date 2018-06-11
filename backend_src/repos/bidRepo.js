var db = require('../fn/mysql-db');

exports.load = function(id) {
    var sql = `select * from products where ProID = ${id}`;
    return db.load(sql);
}
