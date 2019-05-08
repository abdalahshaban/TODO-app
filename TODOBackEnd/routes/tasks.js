// const express = require('express');
// const Task = require('../models/tasks');
// const config = require('../config');
// const auth = require('../middleware/auth');
// const mongoose = require('mongoose');
// module.exports = (server) => {
// 	//GET all task
// 	server.get('/task', auth, async (req, res, next) => {
// 		try {
// 			const Tasks = await Task.find({ use: req.id });
// 			return res.json(Tasks);
// 		} catch (err) {
// 			return next(err);
// 		}
// 	});

// 	//Add Customer
// 	server.post('/task/1', async (req, res, next) => {
// 		//Chech for JSON
// 		if (!req.is('application/json')) {
// 			return next(err);
// 		} else {
// 			const { title } = req.body;
// 			const task = new Task({
// 				title
// 			});

// 			try {
// 				const newTask = await task.save();
// 				res.send(201);
// 				next();
// 			} catch (err) {
// 				return next(err);
// 			}
// 		}
// 	});

// 	//UPDATE Customer
// 	server.put('/task/:taskID', async (req, res, next) => {
// 		res.send('put task');
// 		//Chech for JSON
// 		// if (!req.is('application/json')) {
// 		// 	return next(new errors.InvalidContentError("Expects 'application/json'"));
// 		// }
// 		// try {
// 		// 	const customer = await Customer.findOneAndUpdate(
// 		// 		{
// 		// 			_id: req.params.id
// 		// 		},
// 		// 		req.body,
// 		// 		{
// 		// 			new: true
// 		// 		}
// 		// 	);
// 		// 	res.send(200);
// 		// 	next();
// 		// } catch (err) {
// 		// 	return next(new errors.ResourceNotFoundError(`There is no Customer with the id of ${req.params.id} `));
// 		// }
// 	});

// 	//DELETE Customer
// 	server.delete('/task/:taskId', async (req, res, next) => {
// 		res.send('delete');
// 		// try {
// 		// 	const customer = await Customer.findOneAndDelete({
// 		// 		_id: req.params.id
// 		// 	});
// 		// 	res.send(204);
// 		// 	next();
// 		// } catch (err) {
// 		// 	return next(new errors.ResourceNotFoundError(`There is no Customer with the id of ${req.params.id} `));
// 		// }
// 	});
// };
