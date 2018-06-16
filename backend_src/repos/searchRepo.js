var db = require('../fn/mysql-db'),
constants = require('../fn/const');

exports.customSearch = function(key, categ, page) {
    var offset = (page - 1) * constants.PRODUCTS_PER_PAGE;
        // var sql = `select * from products where ProName like '%" + ${key} + "%' `;
        var sql = `select * from products p
                    left join loaisp l on l.CatID = p.CatID
                    where l.CatName = '` + categ + `' and p.ProName  like '` + key + '%' + `' limit ${constants.PRODUCTS_PER_PAGE + 1} offset ${offset}`;
        console.log(sql);
        return db.load(sql);
    }