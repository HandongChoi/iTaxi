var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var chat_content_schema = new Schema({

	room_id: Number,
	is_taxi: Boolean,
	user_id: String,
	datetime: {type: Date, default: Date.now},
	comment: String
});

module.exports = mongoose.model('participant_info', participant_info_schema);