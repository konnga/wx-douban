const api = require('../../utils/doubanApi.js')
const { movies } = require('../../utils/enums.js')
const util = require('../../utils/util.js')
const appData = getApp().globalData;
Page({
  data: {
    detailData: {
      rating: {
        score: 0
      }
    },
    detailLoading: true,
    longCommentsLoad: true,
    shortCommentsLoad: true,
    stars: '00',
    shortComments: {},
    longComments: {}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.title,
    })
    wx.showNavigationBarLoading();
    // 获取电影详情
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
    // 获取电影短评
    api.getMovieComments(options.id, 'comments').then((data) => {
      this.setData({
        shortComments: data.comments.slice(0, 5),
        shortCommentsLoad: false
      })
    })
    // 获取电影长评
    api.getMovieComments(options.id, 'reviews').then((data) => {
      this.setData({
        longComments: data.reviews.slice(0, 5),
        longCommentsLoad: false
      })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})