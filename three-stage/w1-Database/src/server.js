

// 引入模块
const express = require('express');

// 引入路径模块，解构写法
const {PORT} = require('./config.json');

// 创建静态资源服务器
const app = express();

// 引入路由
// const allRouter = require('./routers/index.js');
// app.use(allRouter);
app.use(require('./routers'));


// 静态资源服务器
app.use(express.static('./'));

// 监听
app.listen(PORT,()=>{
    console.log('success');
    
});