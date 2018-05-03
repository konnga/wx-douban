const fetch = require('./fetch.js')
const enums = require('./enums.js')
const api = {};
/**
 * 获取不同类型的电影数据
 * @param {String} type - 电影类型
 * @param {object} param - 查询参数
 */
api.getMovieByType = (type, param) => {
  return fetch(`movie/${type}`, param).then(res => res.data)
}

/**
 * 获取电影详情数据
 * @param {String} id - 电影id
 */
api.getMovieDetail = (id) => {
  return fetch(`movie/subject/${id}`).then(res => res.data)
}

/**
 * 获取电影评论
 * @param {String} id - 电影id
 * @param {String} type - 评论类型
 */
api.getMovieComments = (id, type) => {
  return fetch(`movie/subject/${id}/${type}`).then(res => res.data)
}

/**
 * 搜索数据
 * @param {String} text - 搜索条件
 */
api.searchMovie = (text) => {
  return fetch(`movie/search?q=${text}`).then(res => res.data)
}

module.exports = api