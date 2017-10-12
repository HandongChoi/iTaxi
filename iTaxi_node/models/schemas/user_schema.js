var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var user_schema = new Schema({
	id: String,
	pw: String,
	nick: String,
	stu_id: Number,
	phone: String,
	
	question: String,
	answer: String,
	
	use_cnt: Number,

	device_token: String,

	bank: String,
	account: String,
	holder: String
});

module.exports = mongoose.model('user', user_schema);