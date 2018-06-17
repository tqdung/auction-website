var db = require('../fn/mysql-db');

exports.addProduct = function(id) {
    var sql = 'select * from products';
    return db.load(sql);
}