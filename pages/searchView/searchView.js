const api = require('../../utils/doubanApi.js')
Page({
  data: {
    movieList: [],
    historySearch: [],
    isSearch: false,
    searchLoading: false,
    searchValue: '',
    noData: ''
  },
  onLoad: function (options) {
    const that = this;
    wx.getStorage({
      key: 'historySearch',
      success: function(res) {
        that.setData({
          historySearch: res.data
        })
      },
    })
  },
  onShow: function () {
    this.setData({
      isSearch: false
    })
  },
  handleClear () {
    wx.clearStorage();
  },
  handleCancel () {
    wx.navigateBack()
  },
  // 当用户清空搜索项时，显示历史记录
  handleInput (e) {
    if (!e.detail) {
      this.setData({
        isSearch: false
      })
    }
  },
  handleSearch (e) {
    const that = this;
    // 根据事件类型判断是历史记录搜索还是用户搜索
    const value = e.type === 'search' ? e.detail : e.currentTarget.dataset.q;
    this.setData({
      movieList: [],
      searchLoading: true,
      searchValue: value,
      isSearch: true
    })
    api.searchMovie(value).then((data) => {
      that.setData({
        movieList: data.subjects,
        searchLoading: false,
        noData: data.subjects.length === 0 ? '暂无相关数据' : ''
      })
    }).catch(() => {
      this.setData({
        noData: '暂无相关数据'
      })
    })
    // 保存用户搜索记录
    wx.getStorage({
      key: 'historySearch',
      success: function(res) {
        const newHistory = res.data;
        if (!newHistory.includes(value) && value) {
          console.log('1')
          newHistory.push(value);
        }
        that.setData({
          historySearch: res.data
        })
        wx.setStorage({
          key: 'historySearch',
          data: newHistory,
        })
      },
      fail: function(res) {
        const arr = [];
        if (value) {
          arr.push(value);
        }
        wx.setStorage({
          key: 'historySearch',
          data: arr,
        })
      }
    })
  }
})