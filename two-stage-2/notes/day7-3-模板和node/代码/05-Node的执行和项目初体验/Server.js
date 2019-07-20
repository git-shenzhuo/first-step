// /*01-导入node默认的模块(http)*/
// const http = require("http");
//
// /*02-创建服务*/
// const httpServer = http.createServer((request,response)=>{
//     /*04-监听到客户端发起的网络请求则执行该函数*/
//     console.log("接收到客户端的请求...");
//     //response.end("---success---");
//
//     /*返回JSON数据给客户端*/
//     let o = {name:"wendingding",age:18,className:"41",address:"广州市"};
//     response.end(JSON.stringify(o));
// })
//
// /*03-开启服务监听*/
// /*参数：端口号 URL路径 回调函数*/
// httpServer.listen(3000,"127.0.0.1",()=>{
//     console.log("启动服务，监听端口为3000...");
// })

/*01-导入node默认的模块(http)*/
require("http").createServer((request,response)=>{

    /*返回JSON数据给客户端*/
    let o = {name:"wendingding",age:18,className:"41",address:"广州市"};
    response.end(JSON.stringify(o));

}).listen(3000,"127.0.0.1",()=>{
    console.log("启动服务，监听端口为3000...");
})


