var express = require('express');
var bidRepo = require('../repos/bidRepo');

var router = express.Router();
//Ra giá.
router.post('/:id', (req, res) => {
    console.log(req);
    var pro_id = req.params.pro_id;
    var use_id = req.params.use_id;
    console.log(pro_id, use_id);
    bidRepo.offer(pro_id, use_id).then(rows => {
    res.json(rows);
    console.log(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});
module.exports = router;