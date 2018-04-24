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

api.getMovieDetail = (id) => {
  return fetch(`movie/subject/${id}`).then(res => res.data)
}

module.exports = api