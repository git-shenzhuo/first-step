/*立即执行函数-自调用函数*/
var moduleA = (function () {
    var name = "萧红";
    var flag = true;
    var showName = function () {
        console.log(name);
    }

    showName();

    /*解决方案*/
    var o       = {};
    o.flag      = flag;
    o.showName  = showName;
    return o;
})()