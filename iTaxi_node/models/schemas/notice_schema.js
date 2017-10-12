var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var notice_schema = new Schema({

	index: Number,
	subject: String,
	content: String,
	datetime: {type: Date, default: Date.now}
});

module.exports = mongoose.model('notice', notice_schema);