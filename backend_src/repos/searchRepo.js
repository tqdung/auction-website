var db = require('../fn/mysql-db');

exports.customSearch = function(key) {
        // var sql = `select * from products where ProName like '%" + ${key} + "%' `;
        var sql = "select * from products where ProName  like '%" + key + "%'"
        console.log(sql);
        return db.load(sql);
    }