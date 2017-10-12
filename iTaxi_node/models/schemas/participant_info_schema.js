var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var participant_info_schema = new Schema({

	room_id: Number,
	is_taxi: Boolean,
	dest: String,
	datetime: {type: Date, default: Date.now},
	capacity: Number
});

module.exports = mongoose.model('participant_info', participant_info_schema);