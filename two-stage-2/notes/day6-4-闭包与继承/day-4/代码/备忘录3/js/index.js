$(function () {

  let oText = $("#textID");
  let oTask = $(".task");
  let oFinishTask = $(".finish_task");
  let arrData = JSON.parse(localStorage.getItem("task")) || [];

  /*00-根据本地存储的数据来生成UI*/
  renderUI();
  function renderUI(){
        oTask.empty();
        oFinishTask.empty();
        for (let i = 0; i <arrData.length;i++){
            var item = arrData[i];
            var html = `<li data-index=${i}>
                        <input class="checkbox-class" type="checkbox" ${item.isCheck ? "checked":""}>
                        <span class="iTem_title">${item.title}</span>
                        <span class="detail">详情</span>
                        <span class="del">删除</span>
                        </li>`

          if (!item.isCheck)
          {
            oTask.prepend(html);
          }else {
            oFinishTask.prepend(html);
          }

          }
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
    /*把数据保存到本地存储中*/
    let item = {
      title:text,
      isCheck:false,
      detail:"默认的详情"
    }
    arrData.push(item);
    localStorage.setItem("task",JSON.stringify(arrData));

    /*清理输入框的内容*/
    oText.val("");
    renderUI();
  })


  /*02-实现删除的功能*/
  /*[02-1] 给删除标签绑定点击事件*/
  $(".body").on("click",".del",function () {

    let node = $(this).parent();
    /*[02-2] 当点击的时候删除数据(本地存储的数据)*/
    /*先获取要删除数据的那个索引*/
    /*let index = node[0].getAttribute("data-index");*/
    /*let index = node.attr("data-index");  //js dataset.index*/

    let index = node.data("index");
    arrData.splice(index,1);
    /*同步本地保存数据*/
    localStorage.setItem("task",JSON.stringify(arrData));

    /*[02-3] 当点击的时候删除UI界面的这个li标签*/
    /*node.slideUp(1000,function () { node.remove()})*/
    renderUI();
  })

  /*03-实现待完成和已完成任务列表切换*/
  /*[03-1] 监听两个li标签的点击事件*/
  $(".header li").click(function () {
    /*[03-2] 当点击事件发生，先切换选中状态*/
    $(this).addClass("cur").siblings().removeClass("cur");
    let index = $(this).index();

    /*[03-3] 切换显示对应的列表*/
    $(".body").eq(index).addClass("active").siblings().removeClass("active");
  })


  /*04-任务完成和待完成状态的切换*/
  /*[04-1] 监听复选框点击事件(事件委托)*/
  $(".body").on("click",".checkbox-class",function () {

    /*[04-2] 获取当前复选框的状态*/
    //console.log(this.checked);  js原生的代码
    //console.log($(this).is(":checked"));

    /*先获取对应的数据，然后修改该数据*/
    var node = $(this).parent();
    let index = node.data("index");

    /*更新并同步数据*/
    arrData[index].isCheck = $(this).is(":checked");
    localStorage.setItem("task",JSON.stringify(arrData));
    renderUI();
  })

})