var express = require('express');
var searchRepo = require('../repos/searchRepo');

var router = express.Router();
//Tìm kiếm sản phẩm.
router.post('/', (req, res) => {
    var page = 1;
    if (req.query.page) {
        page = +req.query.page;
    }
    var key = req.body.search_keyword;
    var categ = req.body.search_categ;
    searchRepo.customSearch(key, categ, page).then(rows => {
        var data = {
            products: rows
        }
        res.json(data);
        console.log(data);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});
module.exports = router;