var db = require('../fn/mysql-db'),
    constants = require('../fn/const'),
    mysql = require('mysql');

exports.loadAll = function() {
    var sql = 'select * from products';
    return db.load(sql);
}
exports.loadAllCateg = function() {
	var sql = 'select * from loaisp';
    return db.load(sql);
    console.log(sql);
}
exports.loadProOrNum = function(page) {
    var offset = (page - 1) * constants.PRODUCTS_PER_PAGE;
    var sql = `SELECT
    ProID as ProID,
    ProName as ProName,
    HinhAnh as HinhAnh,
    SlRaGia as SlRaGia,
    GiaHienTai as GiaHienTai,
    GiaMuaNgay as GiaMuaNgay,
    DATE_FORMAT(NgayBD, '%d/%m/%Y %H:%i:%m') as NgayBD,
    DATE_FORMAT(NgayKT, '%d/%m/%Y %H:%i:%m') as NgayKT,
    CatID as CatID,
    SPMoi as SPMoi,
    NguoiGiuGiaID as NguoiGiuGiaID,
    MoTa as MoTa,
    NguoiBanID as NguoiBanID
    FROM products
    ORDER BY SlRaGia DESC limit ${constants.PRODUCTS_PER_PAGE + 1} offset ${offset}`;

    return db.load(sql);
}


exports.loadProOrPrice = function(page) {
    var offset = (page - 1) * constants.PRODUCTS_PER_PAGE;
    var sql = `SELECT
    ProID as ProID,
    ProName as ProName,
    HinhAnh as HinhAnh,
    SlRaGia as SlRaGia,
    GiaHienTai as GiaHienTai,
    GiaMuaNgay as GiaMuaNgay,
    DATE_FORMAT(NgayBD, '%d/%m/%Y %H:%i:%m') as NgayBD,
    DATE_FORMAT(NgayKT, '%d/%m/%Y %H:%i:%m') as NgayKT,
    CatID as CatID,
    SPMoi as SPMoi,
    NguoiGiuGiaID as NguoiGiuGiaID,
    MoTa as MoTa,
    NguoiBanID as NguoiBanID
    FROM products ORDER BY GiaHienTai DESC limit ${constants.PRODUCTS_PER_PAGE + 1} offset ${offset}`;

    return db.load(sql);
}


exports.loadProOrTime = function(page) {
    var offset = (page - 1) * constants.PRODUCTS_PER_PAGE;
    var sql = `SELECT 
    ProID as ProID,
    ProName as ProName,
    HinhAnh as HinhAnh,
    SlRaGia as SlRaGia,
    GiaHienTai as GiaHienTai,
    GiaMuaNgay as GiaMuaNgay,
    DATE_FORMAT(NgayBD, '%d/%m/%Y %H:%i:%m') as NgayBD,
    DATE_FORMAT(NgayKT, '%d/%m/%Y %H:%i:%m') as NgayKT,
    CatID as CatID,
    SPMoi as SPMoi,
    NguoiGiuGiaID as NguoiGiuGiaID,
    MoTa as MoTa,
    NguoiBanID as NguoiBanID
    FROM products ORDER BY NgayKT DESC limit ${constants.PRODUCTS_PER_PAGE + 1} offset ${offset}`;

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
exports.add = function(data){
    var today = new Date();
    var dd = today.toLocaleDateString();
    var sql = mysql.format('insert into products(ProName, GiaHienTai, GiaMuaNgay, NgayBD, NgayKT, MoTa, NguoiBanID) values(?, ?, ?, ?, ?, ?, ?)', [data.name, data.starting_price, data.price_buy_now, dd, dd, data.description,data.seller]);
    return db.insert(sql);
}