var mongoose = require('mongoose');

exports.connect = function(){
	
	const db_name = 'itaxi';
	const db_host = 'mongodb://localhost/';
	const db_id = '';
	const db_pw = ''; 
	const SUCCESS = "Connected to mongod server";

	var db = mongoose.connection; 

	db.on('error', console.error);

	db.once('open', function(){
		console.log(SUCCESS);
	});

	mongoose.connect(db_host + db_name);
};