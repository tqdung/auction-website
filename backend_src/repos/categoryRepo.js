var db = require('../fn/mysql-db');

exports.loadAll = function() {
	var sql = 'select * from loaisp';
	return db.load(sql);
}

exports.load = function(id) {
	var sql = `select * from loaisp where CatID = ${id}`;
	return db.load(sql);
}

exports.add = function(poco) {
	// poco = {
	// 	CatID: 1,
	// 	CatName: 'new name'
	// }
	
	var sql = `insert into loaisp(CatName) values('${poco.CatName}')`;
	return db.insert(sql);
}

exports.delete = function(id) {
	var sql = `delete from categories where CatID = ${id}`;
	return db.delete(sql);
}