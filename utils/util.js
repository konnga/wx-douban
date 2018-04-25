const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 显示繁忙提示
var showBusy = text => wx.showToast({
  title: text,
  icon: 'loading',
  duration: 10000,
  mask: true
})

// 显示成功提示
var showSuccess = text => wx.showToast({
  title: text,
  icon: 'success',
  mask: true
})

// 显示失败提示
var showModel = (title = '', content = '') => {
  wx.hideToast();
  wx.showModal({
    title: title,
    content: content,
    showCancel: false
  })
}

var showModels = (params) => {
  wx.hideToast();
  wx.showModal(params)
}

module.exports = {
  formatTime, showBusy, showSuccess, showModel, showModels
}
