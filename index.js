var restify = require('restify');
var server = restify.createServer();
var port = 8088;

// /blogs/posts/comments/
//
// CRUD | mongoDB 	| REST
// ---------------------
// create| insert|			POST
//	read |	find |			GET
//	update |	update |	PUT
//	delete |	remove |	DELETE

// server.verb('path' function(req, res, next){})
// http://jsonstudio.com/wp-content/uploads/2014/02/enron.zip
function send(req, res, next){
	res.send("Testing" + req.params.name);
	return next;
}

server.get('/', send);
server.get('/hello/:name', send);
server.put('/hello/:name', send);
server.del('/hello/:name', function(req, res, next){
	res.send(201, req.params.name + "'s random String is:" +
		);
	return next();

});
server.get('/hello/:name', function(req, res, next){
	res.send('Hello' + req.params.name);
	next();
});

server.listen(port, function(){
	console.log('%s listening at %s', server.name, port);
});
