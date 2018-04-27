Page({
  data: {
    detail: {},
    score: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const cache = wx.getStorageSync('longReviewDetail')
    this.setData({
      score: cache.rating.value * 2,
      detail: cache
    })
  },
  onReady: function () {
    const cache = wx.getStorageSync('longReviewDetail')
    this.setData({
      score: cache.rating.value * 2,
      detail: cache
    })
  },
  onHide: function () {
    wx.setStorage({
      key: 'longReviewDetail',
      data: '',
    })
  }
})