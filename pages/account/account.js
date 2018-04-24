// pages/account/account.js
const app = getApp();
const util = require('../../utils/util.js')
Page({
  data: {
    refresh: false,
    logged: false,
    avatarUrl: '../../assets/img/user-unlogin.png',
    title: '正在登陆...'
  },
  onLoad: function (options) {
    this.isLogin();
  },
  onPullDownRefresh: function () {
    if (this.isLogin()) {
      this.setData({
        refresh: true,
        title: '刷新中...'
      })
      this.handleClickLogin()
    }
    wx.stopPullDownRefresh()
  },
  onUnload: function () {
    wx.clearStorage();
  },
  handleClickLogin: function () {
    util.showBusy(this.data.title)
    wx.getUserInfo({
      success: res => {
        app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo: res.userInfo,
          logged: true,
          refresh: false,
          avatarUrl: res.userInfo.avatarUrl
        })
        wx.setStorage({
          key: 'userInfo',
          data: res.userInfo,
        })
        wx.setStorage({
          key: 'logged',
          data: true,
        })
        wx.stopPullDownRefresh()
        wx.hideToast()
      },
      fail: () => {
        wx.setStorage({
          key: 'logged',
          data: false,
        })
        this.setData({
          logged: false,
          title: '登陆失败，请稍后重试'
        })
        wx.stopPullDownRefresh()
        wx.hideToast()
        util.showModel('登陆失败', '请稍后重试')
      }
    })
  },
  loginout: function () {
    this.setData({
      userInfo: {},
      avatarUrl: '../../assets/img/user-unlogin.png',
      logged: false
    })
    wx.clearStorage();
  },
  isLogin: function () {
    this.setData({
      logged: wx.getStorageSync('logged') || false,
    })
    if (this.data.logged) {
      // 同步操作导致页面出现停顿，后续处理
      const userStorage = wx.getStorageSync('userInfo');
      console.log(wx.getStorageSync('userInfo'))
      this.setData({
        userInfo: userStorage,
        avatarUrl: userStorage.avatarUrl,
        refresh: false
      })
      return true;
    } else {
      return false;
    }
  },
})