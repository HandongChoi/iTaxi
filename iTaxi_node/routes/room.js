var express = require('express');
var router = express.Router();

const Carpool_room = require('../models/schemas/carpool_room_schema');
const Taxi_room = require('../models/schemas/taxi_room_schema');

const DB_GET_ROOM_FAILURE = {error : 'Failed to load room'};
const DB_CREATE_ROOM_FAILURE = {error : 'Failed to create room'};


/* GET users listing. */
router.get('/carpool_list', function(req, res, next) {

	//specify possible car room list

	Carpool_room.find(function(err, car_room){

		if(err)
			return res.status(500).send(DB_GET_ROOM_FAILURE);
		else
			res.json(car_room);
	});
});

router.get('/taxi_list', function(req, res, next){

	Taxi_room.find(function(err, taxi_room){

		if(err)
			return res.status(500).send(DB_GET_ROOM_FAILURE);
		else 
			res.json(taxi_room);
	});
});

router.post('/carpool_create', function(req, res, next){
	
	// create taxi or carpool room
	var carpool_room = new Carpool_room();

	carpool_room.car_room_id = req.body.car_room_id;
	carpool_room.depart = req.body.depart;
	carpool_room.datetime = new Date(req.body.datetime); //= req.body.datetime;
	carpool_room.capacity = req.body.capacity;
	carpool_room.price = req.body.price;
	carpool_room.car_name = req.body.car_name;

	console.log(carpool_room);

	carpool_room.save(function(err){
		if(err){
			console.error(err);
			res.json({result : 0});
		}
		else
			res.json({result : 1});
	});
	// 1: success, 0: fail
});

router.post('/taxi_create', function(req, res, next){

	var taxi_room = new Taxi_room();

	taxi_room.taxi_room_id = req.body.taxi_room_id;
	taxi_room.depart = req.body.depart;
	taxi_room.dest = req.body.dest;
	taxi_room.datetime = req.body.datetime;
	taxi_room.capacity = req.body.capacity;

	taxi_room.save(function(err){
		if(err){
			console.error(err);
			res.json({result : 0});
		}
		else
			res.json({result : 1});
	});
});

router.put('/out', function(req, res, next){

	// leave from chat room

	res.send();
});

router.get('/participate', function(req, res, next){

	// return list of room that participates now

	res.send();
});

router.get('/imminent', function(req, res, next){

	// 출발이 임박한 방을 return

	res.send();
});

router.get('/record', function(req, res, next){

	// 탑승 기록을 return

	res.send();
});

module.exports = router;
