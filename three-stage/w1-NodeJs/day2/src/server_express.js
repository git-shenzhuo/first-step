
// 所需模块 ------------ express  http-proxy-middleware
// 利用express创建静态资源服务器---------------------------------------

// function express(){
    // 引入模块
    const express = require('express');


    // 引入爬虫，模块   http-proxy-middleware
    const proxy = require('http-proxy-middleware');
    

    // 利用express模块创建服务器
    const app = express();

    // 引入路由   index 和 .js 都可以省略
    const allRouter = require('./api/index');

    // 静态匹配服务器目录下面的所有文件
    // 如果不成立，进入下一步
    // const middleware = express.static('./');
    // app.use(middleware);
    app.use(express.static('./'));

    app.use(allRouter);


    // 监听端口
    app.listen(1904,()=>{
        console.log('success');
        
    })
// }

// express();




// 跨域请求-------------------------------------------------

// // 引入express模块
// const express = require('express');

// // 引入 http-proxy-middleware 模块
// const porxy = require('http-proxy-middleware');


