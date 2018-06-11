var db = require('../fn/mysql-db');

exports.customSearch = function(key) {
        var sql = `select * from products where name like ${key}`;
        return db.load(sql);
    }