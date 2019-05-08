const express = require('express');
const server = express.Router();
const jwt = require('jsonwebtoken');
const Task = require('../models/tasks');
const mongoose = require('mongoose');
const User = require('../models/users.js');
const config = require('../config');
const auth = require('../middleware/auth');
//GET all task

//login and create token
server.post('/login', (req, res, next) => {
	if (!req.is('application/json')) {
		res.status(301).json({
			message: 'invaild data'
		});
	} else {
		User.findOne({ email: req.body.email })
			.then((user) => {
				if (!user) {
					// res.json({
					// 	message: 'invlid content'
					// });
					return res.status(400).json({ message: 'invlid content' });
				} else {
					if (user.password === req.body.password) {
						let token = jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: '14h' });
						//console.log(token);
						//delete password
						Task.find({ user: user._id })
							.then((task) => {
								res.json({ token, user, task });
								// res.json({ task });
							})
							.catch((err) => {
								return res.status(400).json({ message: 'error', err });
							});
					} else {
						// res.json({
						// 	message: 'invlid content'
						// });
						return res.status(400).json({ message: 'invlid content' });
					}
				}
			})
			.catch((err) => {
				res.json(err);
			});
	}
});

/// registration
server.post('/reg', (req, res, next) => {
	console.log(req.body);

	if (!req.is('application/json')) {
		return res.status(400).json({ message: 'invlid content' });
	} else {
		objLength = Object.keys(req.body).length;
		//console.log(objLength);

		if (objLength < 2) {
			return res.status(400).json({ message: 'invlid content' });
		}
		if (objLength === 2) {
			if (!req.body.email) {
				return res.status(400).json({ message: 'invlid content' });
			} else {
				const user = new User(req.body); //email , Password
				// bcrypt.genSalt(10, (err, salt) => {
				// 	bcrypt.hash(user.password, salt, async (err, hash) => {
				// 		//Hash Password
				// 		user.password = hash;
				// 		//Save User
				// 		try {
				// 			const newUser = await user.save();
				// 			return res.status(201).json({ message: 'created' });
				// 			next();
				// 		} catch (err) {
				// 			return res.status(400).json({ message: 'error insave user' });
				// 		}
				// 	});
				// });

				user
					.save()
					.then(() => {
						return res.status(201).json({ message: 'added', user });
					})
					.catch((err) => {
						next(err);
					});
			}
		} else {
			return res.status(400).json({ message: 'invlid content' });
		}
	}
});

//add task
server.post('/add', auth, (req, res, next) => {
	// console.log(req.params.title);
	if (!req.is('application/json')) {
		res.status(301).json({
			message: 'invaild data'
		});
	} else {
		console.log(req.body);
		const newTask = new Task({
			title: req.body.title,
			isDone: false,
			user: req.id
		});
		newTask.save().then((task) => {
			console.log(task);

			return res.status(201).json({ message: 'Added Done' });
		});
	}
	// console.log(req.body);
});

//get uncomplete task for user
server.get('/task', auth, (req, res, next) => {
	Task.find({ user: req.id, isDone: false }, (err, task) => {
		if (!task) {
			return res.status(400).json({ message: 'unauth' });
		} else {
			console.log(task);
			res.status(200).json({ message: 'task for this user', task });
		}
	});
});
//get complete task for user
server.get('/task/done', auth, (req, res, next) => {
	Task.find({ user: req.id, isDone: true }, (err, task) => {
		console.log(task);
		res.status(200).json({ message: 'task for this user', task });
	});
});

//get all tasks for all users
server.get('/taskAll', auth, (req, res, next) => {
	Task.find({}, (err, task) => {
		res.status(200).json({ message: 'task for all user', task });
	});
});

//update task for user
server.put('/update/:done/:taskId', auth, (req, res, next) => {
	// console.log(req.body);
	if (req.params.done == 0) {
		Task.findOneAndUpdate(
			{ _id: req.params.taskId, user: req.id },
			{
				$set: {
					title: req.body.title
				}
			},
			{ new: true }
		)
			.then((task) => {
				res.status(200).json({ message: 'update change', task });
			})
			.catch((err) => {
				return res.status(400).json({ message: 'error' });
			});
	} else {
		Task.findByIdAndUpdate(
			{ _id: req.params.taskId, user: req.id },
			{
				$set: {
					isDone: true
				}
			},
			{ new: true }
		)
			.then((task) => {
				res.status(200).json({ message: 'status change', task });
			})
			.catch((err) => {
				return res.status(400).json({ message: 'error' });
			});
	}
});

// delete task for user
server.delete('/:taskId', auth, (req, res, next) => {
	Task.findByIdAndRemove({ _id: req.params.taskId, user: req.id })
		.then((task) => {
			return res.status(200).json({ message: 'delete', task });
		})
		.catch((err) => {
			return res.status(400).json({ message: 'err', err });
		});
});

module.exports = server;
