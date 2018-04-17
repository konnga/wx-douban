//index.js
//获取应用实例
const app = getApp()
const api = require('../../utils/doubanApi.js')
Page({
  data: {
    inTheatersData: {},
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    console.log(app);
    api.getMovieByType('in_theaters', {
      page: 1,
      count: 10
    }).then((data) => {
      this.setData({
        inTheatersData: data
      })
      console.log(data.subjects)
    })
  }
})
