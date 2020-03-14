var app = require('express')();  // 引入express模块
var http = require('http').Server(app);

app.use('/', express.static(__dirname + '/www'));

app.get('/', function(req, res){  // 路由为localhost:3000时向客户端响应“hello world”
  res.send('<h1>Hello world</h1>');  // 发送数据
});

http.listen(3000, function(){  // 监听3000端口
  console.log('listening on *:3000'); 
}); 
