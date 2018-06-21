var express = require('express'),
    axios = require('axios'),
    nodemailer = require('nodemailer'),
    multer = require('multer'),
    path = require('path');

var userRepo = require('../repos/userRepo');
var jwt = require('jsonwebtoken');
const SECRET_KEY = 'doanweb2';

var router = express.Router();
// Create a transportter to send mail verify
var smtpTransport = nodemailer.createTransport({
    service: "Outlook",
    auth: {
        user: "doanweb2@outlook.com",
        pass: "123456Lep!@#"
    }
});
var mailOptions, link;
// Router to register
router.post('/', (req, res, next) => {
    userRepo.add(req.body)
        .then(insertId => {
            res.statusCode = 201;
            res.json(insertId);
        })
        .catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.end();
        });
    next();
}, function (req, res) {
    //rand = Math.floor((Math.random() * 100) + 54);
    var email = req.body.email;
    var email_token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 2),
        data: email
    }, SECRET_KEY);
    link = "http://" + req.get('host') + "/users/verify/" + email_token;
    mailOptions = {
        to: email,
        subject: "Please confirm your Email account. ",
        html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>"
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
            res.end("error");
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});
// Router to login
router.post('/login', (req, res) => {
    userRepo.login(req.body).then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 404;
        res.end();
    })
});

router.post('', (req, res) => {
    var CatName = req.query.CatName;
    var mota = req.query.mota;
    var id_use = req.query.id_use;
    var id_pro = req.query.id_pro;
    userRepo.love(CatName, mota, id_use, id_pro).then(rows => {
        res.end();
        console.log('hahahahahha');
    }).catch(err => {
        console.log(err);
        res.statusCode = 404;
        res.end();
    })
});
// Check captcha when user register
router.post('/captcha', (req, res) => {
    var secret = '6LeS5FMUAAAAAIbog9aGScVx58yvfXMZto2HjTR6';
    var captcha_response = req.body.captcha_response;

    var url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${captcha_response}`;
    axios.post(url, {
        // secret: _secret,
        // response: captcha_response
    }, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
            }
        })
        .then(function (response) {
            // console.log(response.data);
            // res.end('ok');
            res.json(response.data);

        })
        .catch(function (error) {
            res.end('fail');
        });
});
// Verify account
router.get('/verify/:token', function (req, res) {
    // còn nhiều thuộc tính để có thời gian sẽ optimate(verify là json)
    verify = jwt.decode(req.params.token);
    email = verify.data
    userRepo.confirm(email).then(() => {
        res.status = 200;
        res.json(email + " đã được xác nhận");
    }).catch(err => {
        console.log(err);
        res.json(err);
    })
});

// Edit profile 
router.post('/edit-profile', (req, res) => {
    userRepo.checkPassword(req.body).then(rows => {
        if (rows.length === 0) {
            var mes = {
                message: 'Không tìm thấy thông tin phù hợp'
            }
            res.status = 404;
            res.json(mes);
        }
        else {
            var mess = {
                message: "Đã cập nhật thông tin thành công"
            }
            res.statusCode = 200;
            res.json(mess);
        }
    }).catch(error => {
        console.log(error);
        res.statusCode = 500;
        res.end();
    });
}, (req, res) => {
    userRepo.edit(req.body).then(rows => {
        res.statusCode = 200;
        // res.json(rows.changedRows)
        mess = {
            message: "Đã cập nhật thành công"
        }
        console.log(mess.message);
        res.json(mess);
        next();
    }).catch(error => {
        res.statusCode = 500;
        res.json(error);
    })
});

// Upload avatar

var staticDir = path.resolve(__dirname, '../public/imgs/user_avt')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, staticDir)
    },
    filename: function (req, file, cb) {
        let file_type = file.originalname.substr(file.originalname.indexOf('.'));
        cb(null, 'avatar' + file_type)
    }
})

var upload = multer({ storage: storage })

router.post('/avatar', upload.single('avatar'), (req, res) => {
    res.json(req.file.originalname);
})

module.exports = router;