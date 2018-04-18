// pages/list/list.js
const api = require('../../utils/doubanApi.js')
const { movies } = require('../../utils/enums.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subjectList: [],
    page: 1,
    count: 12,
    ishasMore: true,
    listLoading: true,
    lowerLoad: false,
    movieType: '',
    loadText: false
  },
  loadMore: function () {
    if (!this.data.ishasMore) {
      this.setData({
        loadText: true
      })
      return;
    }
    this.setData({
      lowerLoad: true
    })
    api.getMovieByType(movies[this.data.movieType].url, {
      page: this.data.page++,
      count: this.data.count
    }).then((data) => {
      if (data.subjects.length) {
        // 防止添加相同内容
        if (this.data.subjectList.length > 0 &&
          data.subjects[0].id === this.data.subjectList[0].id) {
          console.log(data.subjects[0].id);
          this.setData({
            ishasMore: false,
            lowerLoad: false
          })
          return;
        }
        this.setData({
          subjectList: this.data.subjectList.concat(data.subjects),
          lowerLoad: false,
          listLoading: false
        })
      } else {
        this.setData({
          ishasMore: false,
          lowerLoad: false
        })
      }
    }).catch(() => {
      this.setData({
        lowerLoad: false,
        listLoading: false
      })
      wx.showLoading({ title: '获取数据异常' })
      wx.hideLoading()
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: movies[options.type].name,
    })
    this.data.movieType = options.type;
    this.loadMore();
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore();
  },
})