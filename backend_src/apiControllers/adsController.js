var express = require('express');
var bidRepo = require('../repos/loveRepo');

var router = express.Router();
//Thêm sản phẩm vào danh sách yêu thích.
router.post('/:id', (req, res) => {
    if (req.params.id) {
        var id = req.params.id;
        bidRepo.addProduct(id).then(rows => {
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