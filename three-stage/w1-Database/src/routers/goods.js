
const express = require('express');
const Router = express.Router();




// 连接对象的方式 ============================================================================
// // 引入自定义中间体
// const {formatData} = require('../utils');
// // 引入MySQL
// const mysql = require('mysql');

// // 创建连接对象并配置参数
// let connection = mysql.createConnection({
//     host : "localhost",
//     uesr : "root",
//     password : "",
//     // database 设置连接的数据库地址；
//     database : ""
// })

// // 获取所有商品
// Router.get('/',(req,res)=>{

//     // 读取数据库并返回数据
//     // 连接数据库
//     connection.connect();
//     // 查询数据库    'select * from goods'   表示查询 goods 数据库的所有数据
//     connection.query('select * from goods',function(error,data,fields){

//         // 如果错误就报错
//         if(error) throw error;
//         // 关闭连接，释放资源
//         connection.end();
//         // 返回数据
//         res.send(formatData(data));

//     })
// })

// // 获取单个商品
// Router.get('/:id',(req,res)=>{

//     // 动态路由：参数id会被express格式化到req.params中
//     let {id} = req.params;

//     // 读取数据库并返回数据
//     // 数据库连接
//     connection.connect();
//     // 查询数据库
//     connection.query(`select * from goods where id=${id}`,function(error,results,fields){

//         // 错误报错
//         if(error) throw error;
//         // 关闭连接，释放资源
//         connection.end();
//         // 返回数据
//         res.send(formatData({data:results[0]}));
//     })

// })

// 连接池的方式 ===============================================================
// 引入自定义中间体
const {formatData} = require('../utils');
const {mysql:query} = require('../db');

// 获取所有商品
Router.get('/',(req,res)=>{
    query('select * from skgoods').then(function(data){
        // data是promise经过reslove返回的数据，用res返回给前端
        res.send(formatData({data}));
        // res.send(data);
    },err=>{
        // 错误消息
        res.send(formatData({data:err,code:250}))
    })

})


// 获取单个商品
Router.get('/:id',(req,res)=>{

    let {id} = req.params;

    query(`select * from skgoods where id=${id}`).then(function(data){
        res.send(formatData({data}));
    }).catch((err)=>{
        res.send(formatData({data:err,code:250}));
    })
})


// 增加商品
Router.post('/',(req,res)=>{

    // id用时间戳生成
    let id = Date.now();
    
    // // 遍历req得到数列表
    // let arr = `{id:${id}`;
    // for(let key in req.body){
    //     arr += `,${key}:'${req.body[key]}'`
        
    // }
    // arr += "}"

    // res.send(arr)
    let names = '',values = '';
    for(let key in req.body){
        names += key +','
        values += '"' + req.body[key] +'",';
    }
    // 去除最后多余的逗号
    names = names.slice(0,-1);
    values = values.slice(0,-1);
    
    // sql 拼接
    let sql = `insert into skgoods(${names}) values(${values})`;
    query(sql).then(data=>{
        res.send(formatData(data));
    }).catch(err=>{
        res.send(formatData({
            data:err,
            code:250
        }))
    })

})




// 修改商品  patch
Router.put('./id',(req,res)=>{
    let {id} = req.params;
    let opt=''; // name="xxx", price="998"
    for(let key in req.body){
        opt += `${key}='${req.body[key]}',`
    }
    // 去除多余逗号
    opt = opt.slice(0,-1)
    let sql = `update skgoods set ${opt} where id=${id}`;
    query(sql).then(data=>{
        res.send(formatData({data}))
    }).catch(err=>{
        res.send(formatData({data:err,code:250}))
    })
})




// 删除单个商品
Router.delete('/:id',(req,res)=>{
    let {id} = req.params;
    let sql = `delete from skgoods where id=${id}`
    query(sql).then(data=>{
        res.send(formatData(data))
    },err=>{
        res.send(formatData({data:err,code:250}))
    })
})


module.exports = Router;