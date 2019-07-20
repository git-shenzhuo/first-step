var a = "a";
var showA = ()=>console.log(a);

/*定义模块*/
define(function () {
    return {a,showA}
})