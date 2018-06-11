var express = require('express');
var bidRepo = require('../repos/bidRepo');

var router = express.Router();
//Đấu giá sản phẩm.
router.post('/:id', (req, res) => {
    if (req.params.id) {
        var id = req.params.id;
        bidRepo.load(id).then(rows => {
        res.json(rows);
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.end('View error log on console.');
        });
    }
});
module.exports = router;