var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var car_room_schema = new Schema({

	car_room_id: Number,
	depart: String,
	dest: String,
	datetime: { type: Date, default: Date.now },
	capacity: Number,
	price: Number,
	car_name: String
});

module.exports = mongoose.model('carpool_room', car_room_schema);