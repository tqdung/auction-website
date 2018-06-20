var express = require('express');
var productRepo = require('../repos/productRepo'),
    constants = require('../fn/const'),
    multer = require('multer');

var router = express.Router();

//Tải sản phẩm theo loại.
router.get('/', (req, res) => {
    if (req.query.type === 'num') {
        var page = 1;
        if (req.query.page) {
            page = +req.query.page;
        }
        productRepo.loadProOrNum(page).then(rows => {
            var hasMore = rows.length > constants.PRODUCTS_PER_PAGE;
            if (hasMore) {
                rows.pop();
            }
            var data = {
                products: rows,
                hasMore: hasMore
            }
            res.json(data);
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.end('View error log on console.');
        });
    }
    if (req.query.type === 'price') {
        var page2 = 1;
        if (req.query.page) {
            page2 = +req.query.page;
        }
        productRepo.loadProOrPrice(page2).then(rows => {
            var hasMore = rows.length > constants.PRODUCTS_PER_PAGE;
            if (hasMore) {
                rows.pop();
            }
            var data = {
                products: rows,
                hasMore: hasMore
            }
            res.json(data);
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.end('View error log on console.');
        });
    }
    if (req.query.type === 'time') {
        var page3 = 0;
        if (req.query.page) {
            page3 = +req.query.page - 1;
        }

        productRepo.loadProOrTime(page3).then(rows => {
            var hasMore = rows.length > constants.PRODUCTS_PER_PAGE;
            if (hasMore) {
                rows.pop();
            }
            var data = {
                products: rows,
                hasMore: hasMore
            }
            res.json(data);
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.end('View error log on console.');
        });
    }
    if (req.query.type === 'categ') {
        productRepo.loadAllCateg().then(rows => {
            var data = {
                categs: rows,
            }
            res.json(data);
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.end('View error log on console.');
        });
    }

});

router.get('/:id', (req, res) => {
    if (req.params.id) {
        var id = req.params.id;

        if (isNaN(id)) {
            res.statusCode = 400;
            res.end();
            return;
        }
        data = {};
        productRepo.load(id).then(rows => {
            if (rows.length > 0) {
                data.product = rows[0];
                productRepo.loadImage(id).then(rowsDetail => {
                    if (rowsDetail.length > 0) {
                        data.image = rowsDetail;
                        res.json(data);
                    } else {
                        res.statusCode = 204;
                        res.end();
                    }
                }).catch(err => {
                    console.log(err);
                    res.statusCode = 500;
                    res.json('error');
                });
            } else {
                res.statusCode = 204;
                res.end();
            }
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.json('error');
        });
    } else {
        res.statusCode = 400;
        res.json('error');
    }
});


var staticDir = path.resolve(__dirname, '../public/imgs/products')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let category = req.body.category;
        cb(null, staticDir )
    },
    filename: function (req, file, cb) {
        let file_type = file.originalname.substr(file.originalname.indexOf('.'));
        cb(null, file.originalname);
    }
})

var upload = multer({ storage: storage })

router.post('/', (req, res) => {
    console.log(req.body);
    var respone = {
        filename: req.file.originalname,
        text: req.body.text_name
    }
    res.json(respone);
})


router.post('/test', (req, res)=>{
    console.log(req);
    res.json(req.files);
});

module.exports = router;