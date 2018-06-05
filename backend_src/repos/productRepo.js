var db = require('../fn/mysql-db'),
    constants = require('../fn/const');

exports.loadAll = function() {
    var sql = 'select * from products';
    return db.load(sql);
}

exports.loadProOrNum = function(page) {
    var offset = (page - 1) * constants.PRODUCTS_PER_PAGE;
    var sql = `SELECT * FROM products ORDER BY SlRaGia limit ${constants.PRODUCTS_PER_PAGE + 1} offset ${offset}`;

    return db.load(sql);
}


exports.loadProOrPrice = function(page) {
    var offset = (page - 1) * constants.PRODUCTS_PER_PAGE;
    var sql = `SELECT * FROM products ORDER BY GiaHienTai limit ${constants.PRODUCTS_PER_PAGE + 1} offset ${offset}`;

    return db.load(sql);
}


exports.loadProOrTime = function(page) {
    var offset = (page - 1) * constants.PRODUCTS_PER_PAGE;
    var sql = `SELECT * FROM products ORDER BY NgayBD limit ${constants.PRODUCTS_PER_PAGE + 1} offset ${offset}`;

    return db.load(sql);
}

exports.load = function(id) {
    var sql = `select * from products where ProID = ${id}`;
    return db.load(sql);
}
exports.loadImage = function(id) {
    var sql = `select * from detail where product_id = ${id}`;
    return db.load(sql);
}