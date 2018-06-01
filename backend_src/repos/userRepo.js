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