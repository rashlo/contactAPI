let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();
let apiRoutes = require('./routes/routes.js');
let port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

mongoose.connect(process.env.DB || 'mongodb://localhost/resthub', { useNewUrlParser: true});

let db = mongoose.connection;
	if(!db)
		console.log('Error connecting db')
	else
		console.log('Db connected successfully')

app.get('/', (req, res) => res.send('resthub APi'));
app.use('/api', apiRoutes);
app.listen(port, function () {
	console.log('Running RestHub on port ' + port);
});

