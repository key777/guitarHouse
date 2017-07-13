var app = getApp()

Page({
  data:{
    fishpondTabarList: [
      {id:"0",selection:true,data:"鱼塘"},
      {id:"1",selection:false,data:"音乐达人"},
      {id:"2",selection:false,data:"曲谱"}
    ],
    swiperCurrent: "0",
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    contentItems:['','','',''],
    listItems:['','','','','','',''],
    attentionNum: 0,
    fishpondBbsList: []
  },
  onLoad: function () {
    var that = this;
    var requestArg = {
          url: 'http://localhost:80/json/fishpondBbs.json',
          data: null};

    // 页面初始化时默认显示鱼塘论坛页
    app.requestData(requestArg, function(res){
      that.setData({
        // 拼接数组
        fishpondBbsList: that.data.fishpondBbsList.concat(res.data),
        loadingHidden: true,
        // maxtime: res.data.info.maxtime
      })
    });
  },

// 动态展示也发生变化时改变聚焦标题和切换展示页面
  switchChangeSet: function(pageId){
    var that = this;

    for (var i in that.data.fishpondTabarList){
      if (pageId == i){
        that.data.fishpondTabarList[i].selection = true;
      }else{
        that.data.fishpondTabarList[i].selection = false;
      }
    }

    that.setData({
      swiperCurrent: pageId,
      fishpondTabarList: that.data.fishpondTabarList,
      fishpondBbsList: that.data.fishpondBbsList
    })
  },

// 通过标题动态滚动展示页面
  switchSwiper: function(e){
    this.switchChangeSet(e.currentTarget.id);
  },
// 通过滑动切换展示页面
  swiperChange: function(e){
    this.switchChangeSet(e.detail.current);
  }
})