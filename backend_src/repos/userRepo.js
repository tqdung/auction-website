var md5 = require('md5');
var db = require('../fn/mysql-db');
var mysql = require('mysql');

	
exports.add = function (poco) {
	var pass_crypted = md5(poco.password);
	var sql = mysql.format('insert into users (user_name, email, password) values(?, ?, ?)',
	[poco.name, poco.email, pass_crypted]);
	return db.insert(sql);
}
exports.login = function (poco) {
	var pass = md5(poco.password);
	var sql = mysql.format('select * from users where email=? and password=? and active=1', [poco.email, pass]);
	return db.load(sql);
}
exports.edit = function (info) {
	var sql = mysql.format('update users set user_name=?, password=? where email=?', [info.user_name, md5(info.new_pass),info.email]);
	return db.load(sql);
}
exports.checkPassword = function(info){
	var sql = mysql.format('select * from users where email=? and password=?', [info.email, md5(info.old_password)]);
	return db.load(sql);
}
exports.confirm = function (email) {
	var sql = mysql.format('update users set active=1 where email=?', [email]);
	return db.load(sql);
}

exports.love = function(CatName, mota, id_use, id_pro){
	
    var sql = `INSERT INTO dsyeuthich VALUES (default, ${CatName}, 'https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg',${mota} ,${id_use}, ${id_pro})`;
    console.log(sql);
    return db.load(sql);
}