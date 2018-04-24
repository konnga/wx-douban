const api = require('../../utils/doubanApi.js')
const { movies } = require('../../utils/enums.js')
const util = require('../../utils/util.js')
Page({
  data: {
    detailData: {},
    detailLoading: true,
    stars: '00'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.title,
    })
    console.log(this.data.stars);
    wx.showNavigationBarLoading();
    api.getMovieDetail(options.id).then(data => {
      this.setData({
        detailData: data,
        detailLoading: false
      })
      wx.hideNavigationBarLoading();
    }).catch(() => {
      this.setData({
        detailLoading: false
      })
      wx.hideNavigationBarLoading();
      util.showModel('数据获取出错', '请稍后重试')
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