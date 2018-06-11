var express = require('express');
var searchRepo = require('../repos/searchRepo');

var router = express.Router();
//Tìm kiếm sản phẩm.
router.get('/:keywork', (req, res) => {
    searchRepo.customSearch( ).then(rows => {
        var hasMore = rows.length > constants.PRODUCTS_PER_PAGE;
        if (hasMore) {
            rows.pop();
        }
        console.log(rows);
        var data = {
            products: rows,
            hasMore: hasMore
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