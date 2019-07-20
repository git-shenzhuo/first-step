var nowExpKey = $("#expKey1").val();
if (nowExpKey != "在结果中搜索") {
    $("#expKey1").css("color", "#666")
}
$("#expKey1").focus(function () {
    var thisVal = $(this).val();
    if (thisVal == "在结果中搜索") {
        $(this).css("color", "#000").val("")
    } else {
        $(this).css("color", "#000")
    }
}).blur(function () {
    var thisVal = $(this).val();
    if (thisVal == "") {
        $(this).css("color", "#BBB6B6").val("在结果中搜索")
    } else {
        $(this).css("color", "#666")
    }
});
var searchResult = function () {
    var oldKey = decodeURIComponent(decodeURIComponent(SP_OBJ.encryptKeyword));
    var expKey = $.trim($("#expKey1").val());
    if (oldKey != "" && expKey == "在结果中搜索") {
        expKey = "";
        return
    } else {
        if (expKey == "在结果中搜索") {
            return
        }
    }
    expKey = expKey.replace(/%/g, "%25");
    expKey = encodeURIComponent(encodeURIComponent(expKey));
    searchPageJump(expKey, SP_OBJ.fCateId, SP_OBJ.sCateId, SP_OBJ.tCateId, SP_OBJ.bIds, SP_OBJ.level, SP_OBJ.sortType, SP_OBJ.filterType, SP_OBJ.source, "1", SP_OBJ.suitable, SP_OBJ.priceRange, SP_OBJ.extPropIds, SP_OBJ.whouseIds, "", "", SP_OBJ.actTypes, "#J_FilterPos")
};
var enterSearchResult = function () {
    var event = arguments.callee.caller.arguments[0] || window.event;
    if (event.keyCode == 13) {
        searchResult()
    }
};






//限制价格区间只能输入正整数
$("#pageInput").keydown(function(ve) {
	var e = ve || event;
    if (! (e.keyCode == 46) && !(e.keyCode == 8) && !(e.keyCode == 37) && !(e.keyCode == 39)) {
        if (!((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)
        	|| (e.ctrlKey && (e.keyCode == 67 || e.keyCode == 86)))) {
            return false;
        }
    }
    if(e.keyCode == 13){
    	goPage();
    }
});
// 跳转到指定页码
function goPage(){
	var pageNum = $("#pageInput").val();
	var totalPage= document.getElementById("totalPage").value;
	if(!isNaN(pageNum) && !isNaN(totalPage)){
		pageNum = parseInt(pageNum, 10);
		totalPage = parseInt(totalPage, 10);
		if(pageNum < 1){
			pageNum = 1;
		}else if(pageNum > totalPage){
			pageNum = totalPage;
		}
	}else{
		pageNum = 1;
	}
	window.location.href="http://list.secoo.com/bags/30-0-0-0-0-6-0-0-" + pageNum + "-10-0-0-100-2.shtml#J_Filter";
} 
//键盘左右键翻页
$(document).keydown(function (e) {
	var ev = e||event;
	switch (ev.keyCode) {
		case 37:
			window.location.href = $('.product_page .prev').attr('href');
			break;
		case 39:
			window.location.href = $('.product_page .next').attr('href');
			break;
	};
});

