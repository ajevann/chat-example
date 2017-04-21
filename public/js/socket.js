var socket = io(),
    username = 'alexvann',

    commands = {
      subscribe: function(ticker){
        socket.emit('subscription', ticker, username);
      },
      status: function(){
        socket.emit('status');
      },
      logon: function(username){
        console.log('[client] connecting user ...', username);
        socket.emit('logon', username);
      },
      start: function(){
        socket.emit('start', username);
      },
      stop: function(){
        socket.emit('start', username);
      }
    }

var test = function(){
  commands.subscribe('ibm.n');
  commands.subscribe('appl');
  commands.start();
}

socket.on('subscription',
  function(msg){
    console.log(msg);
});

socket.on('status',
  function(msg){
    console.log(msg);
});

socket.on('connect',
  function(msg){
    console.log('[client] connected to server');
});

socket.on('ticker',
  function(ticker){
    console.log('[client] TICKER', ticker);
});

socket.on('logon',
  function(msg){
    console.log('[client] user logged on ...', msg);
});

socket.on('test',
  function(msg){
    console.log(msg);
});

setTimeout(function(){
  commands.logon(username);
}, 2000);
