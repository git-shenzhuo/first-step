
const express = require('express');
const Router = express.Router();
const {formatData,token} = require('../utils')
const {mysql:query} = require('../db')

// 获取所有商品,查询是否存在
// Router.get('/',(req,res)=>{
//     let {username,password} = req.params;
//     let sql = `select * from username where username=${username} and password=${password}`
//     console.log("username",username,password);
    
//     query(sql).then(function(data){
//         let len = JSON.stringify(data).length;
//         if(len > 5){
//             res.send(formatData())
//         }else{
//             res.send(formatData({code:250}))
//         }   
//     })      
// })

Router.get('/',(req,res)=>{
    let {username,password} = req.query;
    let sql = `select * from username where username='${username}' and password='${password}'`
    // console.log("username",username,password);
    query(sql).then(function(data){
        let len = JSON.stringify(data).length;
        // console.log(len,data);
        
        if(len > 5){
            // 生成token，并返回客户端
            let Athorization = token.create(username);
            // res.set('Athorization', Athorization);
            res.send(formatData({data:Athorization}))
        }else{
            res.send(formatData({code:250}))
        }   
    })      
})




module.exports = Router;