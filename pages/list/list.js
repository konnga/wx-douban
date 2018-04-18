// pages/list/list.js
const api = require('../../utils/doubanApi.js')
const { movies } = require('../../utils/enums.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: {
      subjects: []
    },
    listLoading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.type);
    wx.setNavigationBarTitle({
      title: movies[options.type].name,
    })
    api.getMovieByType(movies[options.type].url, {
      page: 1,
      count: 30
    }).then((data) => {
      this.setData({
        listData: data,
        listLoading: false
      })
    }).catch(() => {
      this.setData({
        listData: '暂无相关数据',
        listLoading: false
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})