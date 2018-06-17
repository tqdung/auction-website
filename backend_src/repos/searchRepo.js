var db = require('../fn/mysql-db'),
constants = require('../fn/const');

exports.customSearch = function(key, categ, page) {
    var offset = (page - 1) * constants.PRODUCTS_PER_PAGE;
        // var sql = `select * from products where ProName like '%" + ${key} + "%' `;
        var sql = `select * from products p
                    left join loaisp l on l.CatID = p.CatID
                    where ProName  like '%${key}%' and l.CatName like '%${categ}%'`;
        console.log(sql);
        return db.load(sql);
    }

exports.customSearhNoCateg = function(key, page) {
    var offset = (page - 1) * constants.PRODUCTS_PER_PAGE;
        // var sql = `select * from products where ProName like '%" + ${key} + "%' `;
        var sql = `select * from products
                    where ProName  like "%${key}%"`;
                    // `select * from products where ProName  like '%" + key + "%'`
                    console.log(sql);
        return db.load(sql);
    }