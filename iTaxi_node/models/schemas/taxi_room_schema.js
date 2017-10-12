var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var taxi_room_schema = new Schema({

	taxi_room_id: Number,
	depart: String,
	dest: String,
	datetime: { type: Date, default: Date.now },
	capacity: Number
});

module.exports = mongoose.model('taxi_room', taxi_room_schema);