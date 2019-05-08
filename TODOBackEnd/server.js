const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const userRouter = require('./routes/user');
const config = require('./config');
const cors = require('cors');

let server = express();
//mongoose.connect('mongodb://localhost:27017/TODO', { useNewUrlParser: true });

// mongoose
// 	.connect('mongodb://localhost:27017/TODO1', { useNewUrlParser: true })
// 	.then(() => {
// 		console.log('connectedd db');
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});
mongoose
	.connect('mongodb+srv://TODO:TODO@todo-tbia4.mongodb.net/test?retryWrites=true', {
		useNewUrlParser: true
	})
	.then(() => {
		console.log('connectedd db');
	})
	.catch((err) => {
		console.log(err);
	});

///Middleware

// function verifyToken(req, res, next) {
// 	if (!req.headers.authorization) {
// 		return res.status(401).json({ message: 'Unauthorized request' });
// 	}
// }
server.use(logger('dev'));
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, 'public/TODOFrontEnd')));

server.use('', userRouter);

// const port = process.env.PORT || 3000;

server.listen(config.PORT, () => {
	// mongoose.connect(config.MONGODB_URL, { useNewUrlParser: true, useFindAndModify: false });
	console.log(`Server Started on port ${config.PORT} ً🔥`);
});
