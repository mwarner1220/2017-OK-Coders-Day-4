var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/enron');
var db = mongoose.connection;
var Schema = mongoose.Schema;
var restify = require('restify');
var server = restify.createServer();


var fs = require('fs');

//HTTP Client
server.get('/', function(req, res, next){
	fs.readFile('index.html', function(err,data){
		if(err){
			console.log("Cannot read file index.html");
			res.send(404);
		} else {
			var body = data.toString();
			res.send(data.toString());
			res.writeHead9200, {
				'Content-Length': Buffer.bytheLength(body);,
				'Content-Type'	: 'text/html'
			});
			res.write(body);
			res.end();
		}
	return next();
});
});

// var Schema = mongoose.Schema
var schema = new Schema({
	_id: Schema.Types.ObjectId,
	sender: String,
	recipients: [],
	cc: [],
	text: String,
	mid: String,
	fpath: String,
	bcc: [],
	to: [],
	replyto: Schema.Types.Mixed,
	ctype: String,
	fname: String,
	date: Date,
	subject: String 
});
var Emails = mongoose.model('emails', schema);

db.on('error', function(msg){
	console.log('Mongoose connection error %s', msg);
});

db.once('open', function(){
	console.log('Mongoose connection established');
});

server,listen('8088', function(){
	console.log("Success...connected and running");
});

function getEmails(req,res, next){
	Emails.find().limit(10)exec(function(err,data){
		if(err){res.send('Error');}
		else {
			res.json(data);

		}
	});
	return next();
}

server.get('/emails', getEmails);