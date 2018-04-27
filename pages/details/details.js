const api = require('../../utils/doubanApi.js')
const util = require('../../utils/util.js')
Page({
  data: {
    detailData: {},
    detailLoading: true,
    longCommentsLoad: true,
    shortCommentsLoad: true,
    shortComments: {},
    longComments: {},
    collectionActive: 'iconfont icon-star gray-color'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    wx.setNavigationBarTitle({
      title: options.title,
    })
    wx.showNavigationBarLoading();
    // 获取电影详情
    api.getMovieDetail(options.id).then(data => {
      // 初始化用户收藏功能
      wx.getStorage({
        key: 'collectionList',
        success: function(res) {
          res.data.forEach((item) => {
            if (item.id === data.id) {
              that.setData({
                collectionActive: 'iconfont icon-star light-color'
              })
            }
          })
        },
      })
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
   * 用户点击收藏
   */
  handleCollection (event) {
    const collecData = event.currentTarget.dataset.detail;
    const that = this;
    /**
     * 使用缓存来处理用户收藏；
     * 缓存存在则取消收藏，删除缓存中内容;
     * 缓存不存在，则在缓存中添加对应内容;
     */
    wx.getStorage({
      key: 'collectionList',
      success: function (res) {
        let newCollec = res.data;
        // 再一次点击取消收藏
        const len = newCollec.length
        for(let i = 0; i <= len; i++) {
          if (newCollec[i] && newCollec[i].id === collecData.id) {
            newCollec.splice(i, 1);
            wx.setStorageSync('collectionList', newCollec)
            that.setData({
              collectionActive: 'iconfont icon-star gray-color'
            })
            util.showSuccess('取消收藏成功')
            return
          } else {
            const newCollecData = {
              id: collecData.id,
              title: collecData.title,
              score: collecData.rating.average || 0,
              imgUrl: collecData.images.small
            }
            newCollec.push(newCollecData)
            wx.setStorageSync('collectionList', newCollec)
            that.setData({
              collectionActive: 'iconfont icon-star light-color'
            })
            util.showSuccess('收藏成功')
            return
          }
        }
      },
      fail: function (res) {
        util.showModels({
          title: '收藏失败',
          content: '请先登录',
          confirmText: '前往登录',
          success: function (res) {
            if(res.confirm) {
              wx.switchTab({
                url: '/pages/account/account',
              })
            }
          }
        })
      }
    })
  },
  /**
   * 查看影评
   */
  handleLongReview (e) {
    console.log(e)
    this.data.longComments.forEach((item) => {
      if (item.id === e.currentTarget.dataset.id) {
        wx.setStorage({
          key: 'longReviewDetail',
          data: item,
        })
      }
    })
    wx.navigateTo({
      url: '/pages/reviewDetail/reviewDetail',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  }
})