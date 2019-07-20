

const express = require('express');
const Router = express.Router();

const {formatData} = require('../utils')
const {mysql:query} = require('../db')


// 验证用户名是否存在
Router.get('/:username',(req,res)=>{
    let {username} = req.params;
    let sql = `select * from username where username='${username}'`
    query(sql).then(function(data){
        // data是promise经过reslove返回的数据，用res返回给前端 
        let len = JSON.stringify(data).length;      
        if(len > 3){
            return res.send(formatData(data));
        }else{
            res.send(formatData({code:250}));
        }    
    })
})

// 增加用户
Router.post('/',(req,res)=>{
    let names = '',values = '';
    for(let key in req.body){
        names += key +','
        values += '"' + req.body[key] +'",';
    }
    // 去除最后多余的逗号
    names = names.slice(0,-1);
    values = values.slice(0,-1);
    // sql 拼接
    let sql = `insert into username(${names}) values(${values})`;
    query(sql).then(data=>{
        res.send(formatData());
    })

})


module.exports = Router;