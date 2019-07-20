(function () {

  "use strict";

  var jQuery = function (selector) {
    return new jQuery.fn.init(selector);
  }

  jQuery.fn = jQuery.prototype = {
    constructor:jQuery,
    init:function (selector) {
      console.log("初始化函数");
      return this;
    },
    get:function (index) {
      console.log("index");
    },
    eq:function () {
      console.log("eq");
    },
    each:function () {
      console.log("each");
    }
  }

  jQuery.fn.init.prototype = jQuery.fn;

  /*操作样式*/
  jQuery.fn.extend  = jQuery.extend= function(obj){
    for (var key in obj)
    {
      this[key] = obj[key];
    }
  }

  jQuery.fn.extend({
    css:function () {
      console.log("css");
    },
    addClass:function () {
      console.log("addClass");
    },
    removeClass:function () {

    }
  });

  jQuery.extend({
    trim:function () {
      console.log("trim");
    }
  })


  /*操作内容*/
  /*运动*/
  window.jQuery = window.$ = jQuery;
})();