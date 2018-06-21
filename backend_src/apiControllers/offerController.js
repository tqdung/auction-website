var express = require('express');
var bidRepo = require('../repos/bidRepo');

var router = express.Router();
//Ra giá.
router.post('', (req, res) => {
    // console.log(req.params);
    var pro_id = req.query.id;
    var use_id = req.query.idus;
    var dates = req.query.date;
    var moneys = req.query.money;
    var pronames = req.query.proname;
    var numprices = req.query.numprice;
    
    // console.log(pro_id, use_id);
    bidRepo.offer(pro_id, use_id, dates, moneys, pronames).then(rows => {
        res.end();
        // console.log(rows);
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.end('View error log on console.');
    });
    bidRepo.update(pro_id, use_id, dates, moneys, pronames, numprices).then(rows => {
        res.end();
        // console.log(rows);
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.end('View error log on console.');
    });
    bidRepo.historyadd(pro_id, use_id, dates, moneys, pronames).then(rows => {
        res.end();
        // console.log(rows);
        }).catch(err => {
            console.log(err);
            res.statusCode = 200;
            res.end('View error log on console.');
        });
});

router.post('/:id', (req, res) => {
    var pro_id = req.params.id;
    bidRepo.historyload(pro_id).then(rows => {
        var data = {
            historys: rows
        }
        res.json(data);
        // console.log(rows);
        }).catch(err => {
            // console.log(err);
            res.statusCode = 200;
            res.end('View error log on console.');
        });
});






module.exports = router;