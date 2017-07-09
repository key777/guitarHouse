//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    pageCfg: {
      url: 'http://localhost/json/mainPage.json',
      data: null
    },
    searchInfoHidden:false,
    dailyList: [],
    dailyTitle: null,
    dailyConfig: null
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  
    // 页面初始化 options为页面跳转所带来的参数
    this.requestData('dailyList');
  },

  requestData: function (a) {
    var that = this;
      wx.request({
      url: 'http://localhost:80/json/mainPage.json',
      data: {
        a: a,
        c: 'data',
        // 上一页的maxtime作为加载下一页的条件，
        maxtime: this.data.maxtime,
        type: '10',
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data.dailyList)
        console.log('上一页', that.data.dailyList)
        that.setData({
          // 拼接数组
          dailyList: that.data.dailyList.concat(res.data.dailyList),
          loadingHidden: true,
          // maxtime: res.data.info.maxtime
        })

      }
    })
  },

  /* 搜索框聚焦 */
  searchBoxFocus: function(e){
    this.setData({
      searchInfoHidden: true
    })
  },

  /* 搜索框失去焦点 */
  searchBoxUrl: function(e){
    this.setData({
      searchInfoHidden: false
    })
  }
})
