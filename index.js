var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);

// var io = require('socket.io')(app);

var router = require('express').Router();

var config = require('./js/config'),
    data = require('./js/data');

app.use(express.static(__dirname + '/public'));

// router.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

io.on('connection', function(socket){
  console.log('establishing socket.io connection');

  socket.on('logon', function(username){
    console.log('[server] connecting user ...', username);

    data.users[username] = {
        tickersRequested: [],
        setInterval: username + '-SetInterval'
    };

    var s = 'user connected:' + username;

    io.emit('logon', s);
  });

  socket.on('test', function(msg){
      console.log(msg);
      socket.emit('test', msg);
  })

  socket.on('subscription', function(ticker, username){
    data.tickersRequested[ticker] = {
      name: ticker,
      price: 99.99
    };

    data.users[username].tickersRequested.push(ticker);

    console.log('new subscription', ticker, username);

    io.emit('subscription', 'subscription to ' + ticker + ' made for ' + username);
  });

  socket.on('status', function(){
    console.log('requesting status');

    io.emit('status', {
      users: data.users,
      tickers: data.tickers
    })
  });

  socket.on('start', function(username){
    console.log('[server] starting');

    data.users[username].setInterval = setInterval(function(){
      var ticker = '';
      for(ticker in data.users[username].tickersRequested){
        io.emit('ticker', data.tickersRequested[ticker]);
      }
    }, config.INTERVAL);
  });

  socket.on('stop', function(username){
    console.log('[server] stoping');
    clearInterval(data.users[username].setInterval);
  });

});

//register routes
app.use(router);

//start server
app.listen(config.PORT, function(){
  console.log('listening on *:', config.PORT);
});

// http.listen(config.PORT, function(){
//   console.log('listening on *:', config.PORT);
// });
