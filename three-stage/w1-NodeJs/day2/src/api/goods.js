

// 引入模块
const express = require('express');

// 调用 express.Router()
const Router = express.Router();

// 发起请求
Router.get('/',(req,res)=>{
    
    // 返回消息
    res.send('查询成功');
})
Router.post('/',(req,res)=>{
    res.send('添加请求成功');
})
Router.patch('/:id',(req,res)=>{
    let {id} = req.params;
    res.send(`修改商品${id}成功`);
})
Router.delete('/:id',(req,res)=>{
    let {id} = req.params;
    res.send(`删除商品${id}成功`);
})


// commentJS暴露
module.exports = Router;