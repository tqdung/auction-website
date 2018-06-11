var express = require('express');
var bidRepo = require('../repos/bidRepo');

var router = express.Router();
//Đấu giá sản phẩm.
router.get('/:id', (req, res) => {
    if (req.params.id) {
        var id = req.params.id;
        bidRepo.load(id).then(rows => {
            var data = {
                products: rows,
            }
            res.json(data);
            }).catch(err => {
                console.log(err);
                res.statusCode = 500;
                res.end('View error log on console.');
        });
    }
});
module.exports = router;