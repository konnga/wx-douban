Page({
  data: {
    detail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    wx.getStorage({
      key: 'longReviewDetail',
      success: function(res) {
        const newDetail = res.data;
        newDetail.content = newDetail.content.replace('↵', '\r\n')
        that.setData({
          detail: newDetail
        })
      },
    })
  },
  onHide: function () {
    wx.setStorage({
      key: 'longReviewDetail',
      data: '',
    })
  }
})