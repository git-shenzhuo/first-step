$(function () {

       let oText = $("#textID");
       let arrData = JSON.parse(localStorage.getItem("task")) || [];
       for (let i = 0; i <arrData.length;i++){
           var tpl =  '<li data-index='+i+'>'+
               '<input type="checkbox">'+
               '<span class="iTem_title">'+arrData[i]+'</span>'+
               '<span class="detail">详情</span>'+
               '<span class="del">删除</span>'+
               '</li>';
           $(".task").prepend(tpl);
       }


      /*01-实现添加的功能*/
      /*[01-1]-获取添加按钮绑定点击事件*/
        $("input[type='submit']").click(function (e) {
            /*禁止使用默认行为*/
            e.preventDefault();
            /*[01-2]-获取输入框的内容，检查*/
            let text = $.trim(oText.val());
            if (text.length == 0)
            {
                alert("请输入内容");
                return;
            }
            /*[01-3]-根据得到的内容来生成标签*/
            var tpl =  '<li data-index='+arrData.length+'>'+
                '<input type="checkbox">'+
                '<span class="iTem_title">'+text+'</span>'+
                '<span class="detail">详情</span>'+
                '<span class="del">删除</span>'+
                '</li>';
            /*[01-4]-把标签显示在界面中*/
            $(".task").prepend(tpl);

            /*考虑把数据保存到本地存储中*/
            arrData.push(text);
            localStorage.setItem("task",JSON.stringify(arrData));

            /*清理输入框的内容*/
            oText.val("");
            //console.log(JSON.parse(sessionStorage.getItem("task")));
        })


    /*02-实现删除的功能*/
    /*[02-1] 给删除标签绑定点击事件*/
    $(".body").on("click",".del",function () {

        let node = $(this).parent();

        /*[02-2] 当点击的时候删除数据(本地存储的数据)*/
        /*先获取要删除数据的那个索引*/
        // let index = node[0].getAttribute("data-index");
        // let index = node.attr("data-index");  //js dataset.index
        let index = node.data("index");
        arrData.splice(index,1);
        /*同步本地保存数据*/
        localStorage.setItem("task",JSON.stringify(arrData));

        /*[02-3] 当点击的时候删除UI界面的这个li标签*/
        node.slideUp(1000,function () {
            node.remove();
        })
    })





})