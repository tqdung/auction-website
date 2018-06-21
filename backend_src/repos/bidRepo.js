var db = require('../fn/mysql-db');

exports.load = function(id) {
    var sql = `select DATE_FORMAT(NgayBD, '%d/%m/%Y %H:%i:%m') as NgayBD,
     DATE_FORMAT(NgayKT, '%d/%m/%Y %H:%i:%m') as NgayKT,
     FORMAT(GiaHienTai,2) as GiaHienTai,
     FORMAT(GiaMuaNgay,2) as GiaMuaNgay,
     SlRaGia as SlRaGia,
     HinhAnh as HinhAnh,
     ProID as ProID,
     ProName as ProName,
     MoTa as MoTa,
     user_name as UsName,
     email as Email
     
      from products p
                left join users u on u.user_id = p.NguoiBanID
                where p.ProID = ${id}`;
    return db.load(sql);
}

exports.offer = function(id_pro, id_use, dates, moneys, pronames){
    var sql = `INSERT INTO daugia VALUES (default, ${id_use}, ${id_pro}, ${dates}, ${moneys}, ${pronames})`;
    console.log(sql);
    return db.load(sql);
}
exports.update = function(id_pro, id_use, dates, moneys, pronames,numprices){
    var sql = `UPDATE products SET SlRaGia = ${numprices}, GiaHienTai =${moneys}, NguoiGiuGiaID = ${id_use} WHERE ProID=${id_pro} `;
    console.log(sql);
    return db.load(sql);
}

exports.historyadd = function(id_pro, id_use, dates, moneys, pronames){
    var sql = `INSERT INTO lichsudaugia VALUES (default, ${id_use}, ${id_pro}, ${dates}, ${moneys}, ${pronames})`;
    console.log(sql);
    return db.load(sql);
}

exports.historyload = function(id_pro){
    var sql = `SELECT DATE_FORMAT(ngaydg, '%d/%m/%Y %H:%i:%m') as ngaydg,
    user_name as user_name,
    FORMAT(sotien, 2) as sotien
    FROM lichsudaugia ls left join users us ON us.user_id = ls.nguoidg_id WHERE sanpham_id=${id_pro}`;
    console.log(sql);
    return db.load(sql);
}
