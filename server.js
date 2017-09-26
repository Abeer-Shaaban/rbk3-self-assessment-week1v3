var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema ;

//creat schema:
var CitySchema = new Schema({
	yourCity: {
			type: String
	},
	image: {
			type: String
	},
	info: {
		type: String
	}
});

// create model:
var City = mongoose.model(city , CitySchema);








var app = express();
app.use(bodyParser.json())


app.post('/', function (req,res) {
// save req.body to db , after finishing saving fire callback function to send response 
// City: name of model    ,   onecity: req.body 
	City.create(req.body).then(function(onecity){
		res.send(onecity);
	});
	//console.log(req.body);
	// res.send({
	// 	type: "POST",
	// 	yourCity: req.body.yourCity ,
	// 	image: req.body.image ,
	// 	info: req.body.info
	// });
});


/*app.get('/' , function(req,res){
	City.find({}).then(function(city){
		res.send(city);
	});
});*/









var port = 3000;

app.listen(process.env.port || port, function() {
  console.log('Cities server is listening on 3000');
});