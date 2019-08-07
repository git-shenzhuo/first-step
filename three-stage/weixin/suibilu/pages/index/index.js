//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls:[],                  // 滑块图片
    keyword:'',                  // 热门歌名
    tabs: app.globalData.types,  // tab 列表
    tabWidth:0,                  // 初始化宽度
    sliderOffset:0,              // 底部颜色条移动距离
    activeIndex:0,               // tab当前索引值,
    tabData:{                    // 切换列表
      // 1:[]
    },
    hotlist:[]                   // 热门歌曲列表
  },
  /* 生命周期函数--监听页面加载 */
  onLoad: async function (options) {
    // 通过 APP 封装的函数发起请求
    let data = await app.getData()
    // console.log(data.song_list);
    // 排序，热度
    // 把数据赋值
    let hot = [...data.song_list]
    hot.sort((a,b)=>b.hot-a.hot)
    this.setData({
      imgUrls:data.song_list,
      keyword:hot[0].title
    })

    // 通过方法获取屏幕宽度，计算每个tab  所占宽度
    wx.getSystemInfo({
      success: (res)=> {
        this.setData({
          // res.windowWidth 为当前设备的可用宽度 ，tabs.length 为tab 的数量
          tabWidth:res.windowWidth / tabs.length
        })
      },
    });

    // 获取tab标签切换的数据（进入只获取当前Tab数据，其他tab待点击时才发起请求）
    let currentType = tabs[activeIndex].type;//1,21
    let currentTabData = await this.getData({ type: currentType,size:3});

    // 不能直接在元数据上更改，先赋值给一变量在加值
    // let tabData = this.data.tabData;
    // tabData[currentType] = currentTabData.song_list;
    // 上下两种方法改变数据的结果相等
    let tabData = {
      // 把原数据扩展，添加新数据
      ...this.data.tabData,
      // [可在对象key放变量]
      [currentType]: currentTabData.song_list
    }

    // 热门歌曲数据，取8首热门歌曲
    let hotlist = await this.getData({type:2,size:8})
    hotlist = hotlist.song_list;

    this.setData({
      tabData,
      hotlist
    })
  },

  // 点击tab 触发函数
  async handlerTabChange(e){
    let {index,type} = e.currentTarget.dataset;
    // 计算颜色条应移动的距离
    let sliderOffset = this.data.tabWidth*index;
    this.setData({
      sliderOffset,
      activeIndex:index
    });

    // 切换tab请求数据，第一次请求后进行判断
    let tabData = this.data.tabData;
    // 如果已经请求过数据就不再请求
    if (tabData[type]) return;
    // 如果没有则发起请求，只拿3首
    let currentTabData = await this.getData({type,size:3});
    tabData[type] = currentTabData.song_list;
    this.setData({
      tabData
    })
  },


  // 跳转到列表页，并根据 type 渲染数据
  gotoList(e){
    let {type} = e.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/list/list?type='+type,
    })
  },

  // 根据不同参数跳转不同页面
  goto(e){
    let { target, songid } = e.currentTarget.dataset
    let url = `/pages/${target}/${target}`
    let query = songid ? `?songid=${songid}` : `?keyword=${this.data.keyword}`
    wx.navigateTo({
      url:url + query
    })
  }
})
