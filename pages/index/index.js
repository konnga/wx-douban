//获取应用实例
const app = getApp()
const api = require('../../utils/doubanApi.js')
const {movies} = require('../../utils/enums.js')
Page({
  data: {
    inTheatersLoading: true,
    inTheatersData: {
      subjects: []
    },
    newMoviesLoading: true,
    newMoviesData: {
      subjects: []
    },
    comingSoonLoading: true,
    comingSoonData: {
      subjects: []
    },
    topLoading: true,
    topData: {
      subjects: []
    },
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    // 获取近期上映电影
    api.getMovieByType(movies.inTheaters.url, {
      page: 1,
      count: 10
    }).then((data) => {
      this.setData({
        inTheatersData: data,
        inTheatersLoading: false
      })
    }).catch(() => {
      this.setData({
        inTheatersLoading: false
      })
    })
    // 获取热门电影
    api.getMovieByType(movies.newMovies.url, {
      page: 1,
      count: 10
    }).then((data) => {
      this.setData({
        newMoviesData: data,
        newMoviesLoading: false
      })
    }).catch(() => {
      this.setData({
        newMoviesLoading: false
      })
    })
    // 获取即将上映电影
    api.getMovieByType(movies.comingSoon.url, {
      page: 1,
      count: 10
    }).then((data) => {
      this.setData({
        comingSoonData: data,
        comingSoonLoading: false
      })
    }).catch(() => {
      this.setData({
        comingSoonLoading: false
      })
    })
    // 获取top250电影
    api.getMovieByType(movies.top250.url, {
      page: 1,
      count: 10
    }).then((data) => {
      this.setData({
        topData: data,
        topLoading: false
      })
    }).catch(() => {
      this.setData({
        topLoading: false
      })
    })
  },
  handleSearch () {
    wx.navigateTo({
      url: '/pages/searchView/searchView',
    })
  }
})
