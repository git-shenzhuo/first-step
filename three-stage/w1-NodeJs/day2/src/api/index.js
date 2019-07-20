

// 引入模块
const express = require('express');

// 调用 express.Router()
const Router = express.Router();

// 引入其他接口
const loginRouter = require('./login');
const goodsRouter = require('./goods');
const cartRouter  = require('./cart');
const regRputer   = require('./reg');

// 爬虫接口
const spiderRouter = require('./spider');



// 调用方法，让数据自动完成解析
Router.use(express.urlencoded({extended:false}),express.json());


// CORS跨域-------------------------------------------
// 设置允许跨域的端口号
let allOrigin = ["http://127.0.0.1:1904","http://127.0.0.1:1905"];

// 判断是否设置跨域信息
Router.use((req,res,next)=>{
    // req.headers 保存请求头信息，其中 origin 为完整路径（http://localhost....）
    console.log(req.headers.Origin);
    
    // 设置响应头信息
    let id ;
    let has = allOrigin.some((itme,i)=>{
        // console.log(itme,i);
        
        id = i;
        return itme.includes(req.headers.Origin);
    })
    console.log(has);
    
    // 如果跟随请求头来的路径在数组中存在，就设置
    if(has){
        // 允许跨域访问的响应头，设置 * 有安全隐患
        res.header("Access-Control-Allow-Origin", allOrigin[id]);
        // 响应头需要满足以下的条件
        res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        // 允许的请求方式
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    }

    // 跨域请求CROS的预请求
    // if(req.method = 'OPTIONS'){
    //     res.sendStatus(200);
    // }else{
        next();
    // }

})

// ------------------------------------------------------------



// let allowOrigin = ['http://127.0.0.1:1904','http://baidu.com','http://localhost:8080']

// Router.use((req,res,next)=>{
//     // req.header保存前端发来的请求头信息,包含host,origin
//     console.log(req.headers)
//     // 设置跨域响应头
//     // 判断当前域名是否在allowOrigin当中,如果在,则设置响应头,否则不设置
//     let idx;
//     let has = allowOrigin.some((item,i)=>{
//         console.log(item,i,req.headers.origin)
//         idx = i;
//         return item.includes(req.headers.origin)
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


// Router.use((req,res,next)=>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     next();
// })




// 数据连接   注意路径不要加点（.）
Router.use('/goods',goodsRouter);
Router.use('/cart',cartRouter);
Router.use('/login',loginRouter);
Router.use('/reg',regRputer);
Router.use('/spider',spiderRouter);



// 暴露给静态资源服务器
module.exports = Router;