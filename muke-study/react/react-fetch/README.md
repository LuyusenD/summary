### 跨域处理

1. 
   请求的api： "http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.getRecommandSongList&song_id=877578&num=5"
   package.json 配置 "proxy":"http://tingapi.ting.baidu.com"
   fetch('/v1/restserver/ting?method=baidu.ting.song.getRecommandSongList&song_id=877578&num=5')
   即可处理跨域

2.
   利用中间件处理跨域: http-proxy-middleware
   需要在src下生成 setupProxy.js 文件
   文件配置: 
    const { createProxyMiddleware } = require('http-proxy-middleware');

    module.exports = function(app) {
      app.use(
        '/api',
        createProxyMiddleware({
          target: 'http://localhost:5000',
          changeOrigin: true,
        })
      );
    };