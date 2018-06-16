var express = require('express');
var bidRepo = require('../repos/bidRepo');

var router = express.Router();
//Đấu giá sản phẩm.
router.post('/:id', (req, res) => {
    if (req.params.id) {
        var id = req.params.id;
        var sell_id = req.params.id;
        bidRepo.load(id, sell_id).then(rows => {
        res.json(rows);
        console.log(rows);
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.end('View error log on console.');
        });
    }
});
module.exports = router;