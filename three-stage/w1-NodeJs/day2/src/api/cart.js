

// 引入模块
const express = require('express');

// 调用方法
const Router = express.Router();


// 发起请求
Router.get('/',(req,res)=>{

    // 返回的数据
    res.send('post请求');
})






// 暴露
module.exports = Router;