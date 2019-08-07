// pages/player/player.js
Page({
  data: {
    inputShowed: true,
    inputVal: "",
    songlist: [],           //  搜索结果
    timer:null
  },
  onLoad: function (options) {
    // 拿到传过来的值,赋值
    this.setData({
      inputVal: options.keyword
    });
    // 发起请求
    this.getData(options.keyword)
  },
  // 搜索操作
  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: "",
      result:[]
    });
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });

    // 防抖
    clearTimeout(this.data.timer);
    // 如果 600ms 没有输入，则发起请求 
    this.data.timer = setTimeout(()=>{
      // 如果输入框为空，则不发起请求
      if (e.detail.value.trim() == '') return;
      this.getData(e.detail.value)
    },600)
  },


  // 封装方法
  getData(keyword){
    // 发起请求，获取数据
    wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting',
      data: {
        method: 'baidu.ting.search.catalogSug',
        query:keyword || this.data.keyword,
      },
      success: ({data}) => {
        this.setData({
          result: data.song
        })
      }
    })
  },


  // 点击歌曲列表，跳转到播放页面
  goto(e){
    // 获得id
    let { songid } = e.currentTarget.dataset
    // 跳转
    wx.navigateTo({
      url: '/pages/player/player?songid=' + songid,
    })
  }
})