var app = getApp()
Page({
  data: {
    reqPageCfg: {
      modelNam: 'dailyList',
      url: 'http://localhost:80/json/mainPage.json',
      data: null
    },
    searchInfoHidden:false,
    dailyList: [],
    dailyTitle: null,
    dailyConfig: null
  },
  onLoad: function () {
    var detail = '../fishpond/fishpond';
    wx.navigateTo({
      url: detail,
      success: function (res) {
        console.log(res)
      },
      fail: function (err) {
        console.log(err)
      },
    });
    return;
    var that = this;
    var reqPageCfg = that.data.reqPageCfg;
    // 页面初始化 options为页面跳转所带来的参数
    app.requestData(reqPageCfg, function(res){
      that.setData({
        // 拼接数组
        dailyList: that.data.dailyList.concat(res.data.dailyList),
        loadingHidden: true,
        // maxtime: res.data.info.maxtime
      })
    });
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
