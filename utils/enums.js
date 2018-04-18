const movies = {
  // 电影条目详情
  subject: {
    url: 'subject/',
    name: '详情'
  },
  // 搜索
  search: {
    url: 'search',
    name: '搜索'
  },
  // top 250
  top250: {
    url: 'top250',
    name: 'TOP250'
  },
  // 北美票房榜
  usBox: {
    url: 'us_box',
    name: '北美票房榜'
  },
  // 口碑榜
  weekly: {
    url: 'weekly',
    name: '口碑榜'
  },
  // 新片榜/热门电影
  newMovies: {
    url: 'new_movies',
    name: '热门电影'
  },
  // 正在上映
  inTheaters: {
    url: 'in_theaters',
    name: '近期上映'
  },
  // 即将上映
  comingSoon: {
    url: 'coming_soon',
    name: '即将上映'
  }
};
const user = {
  // 获取用户信息，/user/:(id||uid)
  userInfo: '/user/'
}
module.exports = { movies,user}