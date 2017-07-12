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
    fishpondForumList: []
  },
  onLoad: function () {
    var that = this;
    var requestArg = {
          url: 'http://localhost:80/json/fishpondForum.json',
          data: null};

    // 页面初始化时默认显示鱼塘论坛页
    app.requestData(requestArg, function(res){
      that.setData({
        // 拼接数组

        fishpondForumList: that.data.fishpondForumList.concat(res.data),
        loadingHidden: true,
        // maxtime: res.data.info.maxtime
      })
    });
  },
// 动态滚动展示页面
  switchSwiper: function(e){
    var that = this;
    var id = e.currentTarget.id;

    console.log(e.currentTarget.id);
    for (var i in that.data.fishpondTabarList){
      if (id == i){
        that.data.fishpondTabarList[i].selection = true;
      }else{
        that.data.fishpondTabarList[i].selection = false;
      }
    }

    console.log(that.data.fishpondTabarList[id].style);
    that.setData({
      swiperCurrent: e.currentTarget.id,
      fishpondTabarList: that.data.fishpondTabarList,
      fishpondForumList: that.data.fishpondForumList
    })
  },
})