var express = require('express'),
    axios = require('axios'),
    nodemailer = require('nodemailer'),
    multer = require('multer');

var userRepo = require('../repos/userRepo');
var jwt = require('jsonwebtoken');
const SECRET_KEY = 'doanweb2';

var router = express.Router();

/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport({
    service: "Outlook",
    auth: {
        user: "doanweb2@outlook.com",
        pass: "123456Lep!@#"
    }
});
var rand, mailOptions, host, link;

router.post('/', (req, res, next) => {
    userRepo.add(req.body)
        .then(insertId => {
            res.statusCode = 201;
            res.json(req.body);
        })
        .catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.end();
        });
    next();
}, function (req, res) {
    //rand = Math.floor((Math.random() * 100) + 54);
    var email = req.body.user_email;
    var email_token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 2),
        data: email
    }, SECRET_KEY);
    host = req.get('host');
    link = "http://" + req.get('host') + "/users/verify/" + email_token;
    mailOptions = {
        to: req.body.user_email,
        subject: "Please confirm your Email account. ",
        html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>"
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
            res.end("error");
        } else {
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });
});

router.get('/verify/:token', function (req, res) {
    // còn nhiều thuộc tính để có thời gian sẽ optimate(verify là json)
    verify = jwt.decode(req.params.token);
    email = verify.data
    userRepo.confirm(email).then(()=>{
        res.status = 200;
        res.json(email + " đã được xác nhận");
    }).catch(err=>{
        console.log(err);
        res.json(err);
    })
});

router.post('/login', (req, res) => {
    userRepo.login(req.body).then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 404;
        res.end();
    })
});



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

// Upload avatar
var staticDir = express.static(
    path.resolve(__dirname, '../public')
);
app.use(staticDir);

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './imgs/user_avt')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
});

var upload = multer({
    storage: storage
});
app.post('/upload', upload.array('photos', 1), (req, res) => {
    res.end('upload done.');
    res.json(req)
});


module.exports = router;