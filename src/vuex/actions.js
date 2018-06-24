import axios from 'axios'

const API = {
  todayNews: 'api/4/news/latest',
  newsContent: 'api/4/news/',
  pastNews: 'api/4/news/before/',
  extraInfo: 'api/4/story-extra/',
  comments: 'api/4/story/',
  themeList: 'api/4/themes',
  themeContent: 'api/4/theme/'
}

const actions = {
  TODAY_NEWS ({ commit }) {
    axios.get(API.todayNews)
      .then(res => {
        commit('TODAY_NEWS', res.data)
      })
      .catch(e => {
        console.log('获取今日热闻失败' + e)
      })
  },

  PAST_NEWS ({ commit }, payload) {
    axios.get(API.pastNews + payload)
      .then(res => {
        commit('PAST_NEWS', res.data)
      })
      .catch(e => {
        console.log('获取过往消息失败')
      })
  },

  NEWS_CONTENT ({ commit }, payload) {
    axios.get(API.newsContent + payload)
      .then(res => {
        commit('NEWS_CONTENT', res.data)
      })
      .catch(e => {
        console.log('获取新闻内容失败' + e)
      })
  },

  NEWS_INFO ({ commit }, payload) {
    axios.get(API.extraInfo + payload)
      .then(res => {
        commit('NEWS_INFO', res.data)
      })
      .catch(e => {
        console.log('获取额外信息失败' + e)
      })
  },

  LONG_COMMENTS ({ commit }, payload) {
    axios.get(API.comments + payload + '/long-comments')
      .then(res => {
        commit('LONG_COMMENTS', res.data)
      })
      .catch(e => {
        console.log('获取长评失败' + e)
      })
  },

  SHORT_COMMENTS ({ commit }, payload) {
    axios.get(API.comments + payload + '/short-comments')
      .then(res => {
        commit('SHORT_COMMENTS', res.data)
      })
      .catch(e => {
        console.log('获取短评失败' + e)
      })
  },

  THEME_LIST ({ commit }) {
    axios.get(API.themeList)
      .then(res => {
        commit('THEME_LIST', res.data)
      })
      .catch(e => {
        console.log('获取主题列表失败' + e)
      })
  },

  THEME_CONTENT ({ commit }, payload) {
    axios.get(API.themeContent + payload)
      .then(res => {
        commit('THEME_CONTENT', res.data)
      })
      .catch(e => {
        console.log('获取主题内容失败' + e)
      })
  }
}

export default actions
