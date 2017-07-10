//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null
  },

  /* http请求 */
  requestData: function (a, cb) {
      wx.request({
      url: a.url,
      data: {
        a: a,
        c: 'data',
        // 上一页的maxtime作为加载下一页的条件，
        // maxtime: this.data.maxtime,
        type: '10',
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        typeof cb == "function" && cb(res)
      }
    })
  }

})
