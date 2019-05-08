const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	isDone: {
		type: Boolean,
		default: false
	},
	user: { type: Schema.Types.ObjectId, ref: 'User', autopopulate: true }
});

taskSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Tasks', taskSchema);
