//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    listData: [
      {
        id: 1,
        name: '经常请吃饭的漂亮姐姐',
        average: 9.0,
        stars: "38",
        starsNum: [0,1],
      },
      {
        id: 2,
        name: '情书',
        average: 9.1,
        stars: "50",
        starsNum: [0,1],
      },
      {
        id: 3,
        name: '夏日大作战',
        average: 9.2,
        stars: "45",
        starsNum: [0],
      },
      {
        id: 3,
        name: '夏日大作战2',
        average: 9.3,
        stars: "35",
        starsNum: [0,1,2],
      }
    ],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    // 获取用户数据
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
