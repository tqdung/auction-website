var db = require('../fn/mysql-db');

exports.customSearch = function() {
        var sql = 'select * from products';
        return db.load(sql);
    }