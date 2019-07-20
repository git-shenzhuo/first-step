$(function () {

    /*语法：$().load()*/
    /*备注1：默认发送的是GET请求，如果提交参数(对象)POST请求*/
    /*备注2：*/
    $("#box").load("http://localhost:8888/week-7/day-3/%E4%BB%A3%E7%A0%81/03-%E9%A1%B5%E9%9D%A2%E7%9A%84%E6%A8%A1%E5%9D%97%E5%8C%96%E5%A4%84%E7%90%86%E6%96%B9%E6%A1%88(%E4%BA%8C)/tpl/header.html .spanB","name=zs",function () {
        console.log("当加载完成");
    })
    $("#foot").load("http://localhost:8888/week-7/day-3/%E4%BB%A3%E7%A0%81/03-%E9%A1%B5%E9%9D%A2%E7%9A%84%E6%A8%A1%E5%9D%97%E5%8C%96%E5%A4%84%E7%90%86%E6%96%B9%E6%A1%88(%E4%BA%8C)/tpl/footer.html");
})