/*导入模块*/
/*没有后缀*/
// require(["./lib/jquery-3.4.1"],function () {
//     console.log($);
//
// })

// require(["./src/lib/jquery-3.4.1.js","./src/lib/jquery-ui.js"],function () {
//     console.log($);
//     console.log($.cleanData);
// })

/*配置*/
/*注意点：在写路径的时候自动加上js后缀，自己不要写后缀*/
/*备注： 设置baseUrl那么它相对的路径是html页面所在的路径*/

// require(["config"],function () {
// //
// //     require(["jq","jq-ui"],function () {
// //         console.log($);
// //         console.log($.cleanData);
// //     })
// // })


/*相当于把A.js文件拷贝到回调函数中*/
require(["A","B"],function (moduleA,moduleB) {
    console.log(moduleA);
    moduleA.showA();
    console.log(moduleA.a);

    console.log(moduleB.age,"--");
    console.log(moduleB.name,"---");

})
