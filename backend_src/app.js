var express = require('express'),
	bodyParser = require('body-parser')
	morgan = require('morgan')
	cors = require('cors'),
	path = require('path');
var categoryCtrl = require('./apiControllers/categoryController'),
	productCtrl = require('./apiControllers/productController'),
	userCtrl = require('./apiControllers/userController'),
	searchCtrl = require('./apiControllers/searchController'),
	bidCtrl = require('./apiControllers/bidController');
var app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
	// res.end('hello from nodejs');
	var ret = {
		msg: 'hello from nodejs api'
	};
	res.json(ret);
});


app.post('/', (req, res)=>{
	res.json(req.body);
})

var staticDir = express.static(
	path.resolve(__dirname, 'public')
);

app.use(staticDir);
app.set('staticDir', staticDir);

app.use('/categories', categoryCtrl);
app.use('/users', userCtrl);
app.use('/products', productCtrl);
app.use('/search', searchCtrl);
app.use('/bid', bidCtrl);

app.listen(3000, () => {
	console.log('API running on port 3000');
});