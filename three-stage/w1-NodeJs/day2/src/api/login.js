

// 引入模块
const express = require('express');

// 调用Router()方法
const Router = express.Router();

// 进行请求操作------------------------------------------

// 因为在index.js里面设置里前置路径，所以这边路径从‘./login’ 改为 ‘./’
Router.get('/',(req,res)=>{

    // 输出为登录成功

    res.send('登录成功');


})


// 使用comment.js方法把之暴露出去
module.exports = Router;