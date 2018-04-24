const URL1 = 'http://api.douban.com/v2';
const URL2 = 'https://douban.uieee.com/v2';
const URL3 = 'http://t.yushu.im/v2';
/**
 * 请求api
 * @param {String} api - 请求的api地址
 * @param {object} params - 请求参数
 * return {Promise}
 */
module.exports = function (api, params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${URL2}/${api}`,
      data: params ? Object.assign({}, { start: (params.page - 1) * params.count, count: params.count}) : '',
      header: {'Content-Type': 'json'},
      success: resolve,
      fsail: reject
    })
  })
}