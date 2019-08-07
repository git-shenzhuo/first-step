// pages/list/list.js
Page({
  data: {

  },
  onLoad:function(options){
    console.log(options)
    // 发起请求
    wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting',
      data:{
        method:"baidu.ting.song.play",
        songid: options.songid
      },
      success: ({ data }) => {
        console.log(data);
      }
    })
  }
})