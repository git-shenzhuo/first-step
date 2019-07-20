

// 引入模块
const express = require('express');

// 调用Router()方法
const Router = express.Router();


// 发起请求--------------------------------
// 注意点：路径不要加点
Router.get('/',(req,res)=>{
    
    res.send('注册成功');
})


// 使用commentJs的方法暴露出去
module.exports = Router;
