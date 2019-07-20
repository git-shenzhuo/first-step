
// 引入mysql
const mysql = require('mysql');

// 创建连接池
var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    port: 3306,
    // 数据库所在目录
    database: 'xiangmu',
    // 是否允许同时多个访问
    multipleStatements: true
});

// 暴露出去，sql为传参
module.exports = (sql)=>{
    // 使用promise 传出去
    return new Promise((resolve,reject)=>{
        pool.query(sql,function(error,data){
            if(error){reject(error)}
            resolve(data);
        });
    })
}