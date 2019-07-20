

// 利用express制作静态资源服务器


// 引入模块
const express = require('express');

// 利用express模块创建服务器
const app = express();

// 静态资源服务器
// 内置中间件
let middleware = express.static('./');
app.use(middleware);



// 自定义
app.get('/user',(req,res,next)=>{

    // 访问路径 /user ，执行里面的代码
    res.send({
        username:'laoxie',
        age:34
    });

    // next();
});

app.use('/gedata',(req,res)=>{

    // 访问路径 /gedata ,执行里面的代码
    res.send('何方故人入山门');

});

app.use('/www',(req,res)=>{

    // 访问路径 /www ，执行里面的代码
    res.send('<h>心中菩提始得静</h>');

});

app.get('/gedata',(req,res)=>{

    res.send([{
        id:123,
        name:'xxx',
        price:998
    },{
        id:124,
        name:'sss',
        price:9.8
    }]);
})



// 监听端口
app.listen(1904,()=>{
    console.log('服务器开始启动...嘀嘀嘀');
});