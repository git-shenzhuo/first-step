$(function () {

    let arrData = [];

    // 页面加载完成后，把本地存储的数据渲染到页面中
    for (let i = 0; i < arrData.length; i++) {
        $("ul").append(`<li>
                        <input type="checkbox">
                        <p>${arrData[i]}</p>
                        <span class="del">删除</span>
                        <span class="det">详情</span>
                    </li>`);
    }
    // 点击添加，添加内容
    $("button").click(function () {
        let value = $.trim($(".boxtext").val());
        if (value.length == 0) {
            alert("请输入内容");
            return;
        }
        let html = `<li>
                        <input type="checkbox">
                        <p>${value}</p>
                        <span class="del">删除</span>
                        <span class="det">详情</span>
                    </li>`
        $("ul").append(html);
        $(".boxtext").val("");
        // 把数据保存到本地存储
        arrData.push(value);
        localStorage.setItem("task", JSON.stringify(arrData));
    });
    //    事件委托
    // $("ul").click(function (e) {
    //     // 删除事件
    //     if (e.target.className == "del") {
    //         $(e.target).parent().remove();
    //     }
    //     if (e.target.className == "det") {
    //         $("html").css("background", "#ccc");

    //     }

    // })
    $("ul").on("click", ".del", function () {
        $(this).parent().remove();
    });
    $("ul").on("click", ".det", function () {
        // $("html").css("background", "#ccc");
        // $(".txt").css("display", "block");
        $(".mask").show();
        $(".title").text($(this).parent().children("p").text());
    });
    $(".down").click(function () {
        // $(".txt").css("display", "none");
        // $("html").css("background", "#fff");
        
    })
})