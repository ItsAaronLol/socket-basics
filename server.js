var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));
//on: listen for events
io.on('connection', function(socket){
	console.log('User connected via socket.io');

	socket.on('message', function(message){
		console.log('Message received: ' + message.text);
		//io.emit: send to every person including sender
		//socket.broadcast.emit: send to everyone except the sender
		socket.broadcast.emit('message', message);
	});

	socket.emit('message', { //emits an event. Event name and the data to send
		text: 'Welcome to the chat application!'
	});
});

http.listen(PORT, function(){
	console.log('Server started!');
})