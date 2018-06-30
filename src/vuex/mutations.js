const mutations = {
  SET_TODAY_NEWS (state, payload) {
    state.today_news = payload
  },

  SET_PAST_NEWS (state, payload) {
    state.past_news.push(payload)
  },

  SET_NEWS_CONTENT (state, payload) {
    state.news_content = payload
  },

  SET_NEWS_INFO (state, payload) {
    state.news_info = payload
  },

  SET_LONG_COMMENTS (state, payload) {
    state.long_comments = payload
  },

  SET_SHORT_COMMENTS (state, payload) {
    state.short_comments = payload
  },

  SET_THEME_LIST (state, payload) {
    state.themes = payload
  },

  SET_THEME_CONTENT (state, payload) {
    state.theme_content = payload
  },

  beSubscribed (state, payload) {
    let subscribed = state.themes.subscribed
    let index = subscribed.indexOf(payload)
    if (index === -1) {
      subscribed.push(payload)
    } else {
      subscribed.splice(index, 1)
    }
    console.log(state.themes.subscribed)
  },

  CLEAR_CONTENT_INFO (state) {
    state.news_content = null
  }
}

export default mutations
