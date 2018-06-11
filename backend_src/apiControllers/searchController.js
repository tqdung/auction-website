var express = require('express');
var searchRepo = require('../repos/searchRepo');

var router = express.Router();
//Tìm kiếm sản phẩm.
router.post('/', (req, res) => {
    console.log(req.body.serch_keyword);
    var key = req.body.serch_keyword;
    searchRepo.customSearch(key).then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});
module.exports = router;