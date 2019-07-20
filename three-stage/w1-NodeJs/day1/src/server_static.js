
// // 比较复杂的一种方法



// // 引入模块
// // http    url    path    fs


// // 实现服务器
// const http = require('http');


// // 用于url地址格式化
// const url = require('url');


// const path = require('path');


// // 文件处理
// const fs = require('fs');


// // 引入mime文件
// const mime = require('mime');


// // 请求require简写为req或自定义，响应response简写为res或自定义；
// http.createServer((req, res) => {


//     // 格式化url模块，并格式化url下面的searth参数
//     // 解构文件路径
//     let {pathname} = url.parse(req.url,true);

//     // 利用fs模块读取pathname的内容
//     // 根据后缀名确认文件类型，并选中mime类型
    
//     // 得到扩展名          substring去点
//     let extname = path.extname(pathname).substring(1);

//     // 获取真实路径
//     let realpath = path.join(__dirname,pathname);

//     // 异步读取文件
//     fs.readFile(realpath,(err,data)=>{

//         // err读取错误时的信息，默认为null
//         if(err){
//             // 如果路径错误，就抛出404
//             res.writeHead(404,{'Content-Type':'text/html;charset=utf8'});
//             res.end(`您请求的路径${pathname}不存在`);
//             return;
//         };

//         // 正确读取文件
//         res.writeHead(200,{'Content-Type':mime[extname] +';charset=utf8'});
//         res.end(data);
//     })



//     // 最原始的静态服务器
//     // res.writeHead(200, {
//     //     "Content-Type": "text/html;charset=utf8"
//     // })

//     // res.end('<h1>静态资源服务器</h1>')
// }).listen(1904, () => {
//     console.log("服务器启动...");

// });







// 第二次-----------------------------------------------------------------------------
// 引入模块
const http = require('http');
const path = require('path');
const fs   = require('fs');
const url  = require('url');
const mime = require('./js/mime');

// 设置静态服务器
http.createServer((req,res)=>{

    // 解构文件路径
    let {pathname} = url.parse(req.url,true);

    // 拿到扩展名
    let extname = path.extname(pathname).substring(1);

    // 拿到真实路径
    let realpath = path.join(__dirname,pathname);

    // 异步请求
    fs.readFile(realpath,(err,data)=>{
        if(err){
            // 发送错误信息
            res.writeHead(404,{"Content-Type":"text/html;charset=utf8"});
            res.end(`您请求的路径${realpath}不存在`);
            return;
        };

        // 成功信息
        res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
        res.end(data);
    });
}).listen(1003,()=>{
    console.log("启动中，嘀嘀嘀");
    
})