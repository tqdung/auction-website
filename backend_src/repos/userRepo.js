var md5 = require('md5');
var db = require('../fn/mysql-db');
var mysql = require('mysql')




exports.add = function (poco) {
	// poco = {
	// 	Username: 1,
	// 	Password: 'new name',
	// 	Name: 'name',
	// 	Email: 'email',
	// 	DOB: '2000-09-01',
	// 	Permission: 0
	// }

	var md5_password = md5(poco.password);
	var type_user = 1;
	//var sql = `insert into users(f_Username, f_Password, f_Name, f_Email, f_DOB, f_Permission) values('${poco.Username}', '${md5_password}', '${poco.Name}', '${poco.Email}', '${poco.DOB}', ${poco.Permission})`;
	var sql = mysql.format('insert into users(UsName, LoaiUser, Email, Password) values(?, ?, ?, ?)',
		[poco.user_name, type_user , poco.user_email, md5_password]);
	return db.insert(sql);
}
exports.login = function(info){
	var pass = md5(info.password);
	var sql= mysql.format('select * from users where Email=? and Password=? and active=1',[info.user_email, pass]);
	return db.load(sql);
}

exports.confirm = function(info){
	var sql= mysql.format('update * users set active=1 where Email=?',[info.user_email]);
	return db.load(sql);
}