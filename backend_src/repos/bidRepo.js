var db = require('../fn/mysql-db');

exports.load = function(id) {
    var sql = `select * from products p
                left join users u on u.user_id = p.NguoiBanID
                where p.ProID = ${id}`;
    return db.load(sql);
}
