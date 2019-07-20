
// WebSocket服务端，推送和转发

// 引入模块
const express = require('express');
const http = require('http');
const ws = require('ws');

// 创建静态资源服务器
const app = express();
app.use(express.static('./'));

// 利用 http 把 express 静态资源服务器和 websocket 服务器合二为一
const server = http.Server(app);

// 开启一个websocket 服务器
let socketServer = ws.Server;
let wss = new socketServer({server});

// 监听端口
server.listen(1904,()=>{
    console.log('seccuss');  
});

wss.on('connection',function connection(client){
    // client   连接每一个客户端，每当有客户端连接时触发该事件，并把每一个客户端以数组保存到wss.clients中
    client.on('message',(msg)=>{
        // 遍历 wss.clients，把消息广播给每一个客户
        wss.clients.forEach(client=>{
            client.send(msg);
        })
    })

    // 当客户端退出时执行 close 函数
    client.on('close',e=>{});
})