
// 引入模块
const express = require('express');

// 调用方法
const Router = express.Router();

// 引入路由
const goodsRouter = require('./goods');
const regRouter = require('./reg');
const loginRouter = require('./login');
const spiderRouter = require('./spider');
const uploadRouter = require('./upload');


// 引入token校验
const {formatData,token:{verify}} = require('../utils')

// 调用方法，自动解析
Router.use(express.urlencoded({extended:false}),express.json());


// let allowOrigin = ['http://127.0.0.1:1904','http://baidu.com','http://localhost:8080']
// Router.use((req,res,next)=>{
//     // req.header保存前端发来的请求头信息,包含host,origin
//     // console.log(req.headers)
//     // 设置跨域响应头
//     // 判断当前域名是否在allowOrigin当中,如果在,则设置响应头,否则不设置
//     let idx;
//     let has = allowOrigin.some((item,i)=>{
//         // console.log(item,i,req.headers.host)
//         idx = i;
//         return item.includes(req.headers.host)
//     });
//     if(has){
//         res.header("Access-Control-Allow-Origin", allowOrigin[idx]);
//         res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//         res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     }

//     // 跨域请求CORS中的预请求
//     // OPTIONS:预请求(当跨域请求为复杂请求时,浏览器自动发起,目的是询问服务器是否支持这样的跨域请求)
//     if(req.method=="OPTIONS") {
//         res.sendStatus(200);/*让options请求快速返回*/
//     } else{
//         next();
//     }
// })

Router.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    if(req.method=="OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else{
        next();
    }
})


// 数据接口
Router.use('/goods',goodsRouter);
Router.use('/reg',regRouter);
Router.use('/login',loginRouter);
Router.use('/spider',spiderRouter);
Router.use('/upload',uploadRouter);


// 校验token
Router.use('/verify',(req,res)=>{
    let token = req.headers.authorization;  
    if(!verify(token)){
        // 校验不通过，返回401
        res.send(formatData({code:401,msg:'unauthorized'}))
    }else{
        // 校验通过，放行
        res.send(formatData())
    }
})


// commentJS暴露
module.exports = Router;