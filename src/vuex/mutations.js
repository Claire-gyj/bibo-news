const mutations = {
  TODAY_NEWS (state, payload) {
    state.today_news = payload
  },

  PAST_NEWS (state, payload) {
    state.past_news.push(payload)
  },

  NEWS_CONTENT (state, payload) {
    state.news_content = payload
  },

  NEWS_INFO (state, payload) {
    state.news_info = payload
  },

  LONG_COMMENTS (state, payload) {
    state.long_comments = payload
  },

  SHORT_COMMENTS (state, payload) {
    state.short_comments = payload
  },

  THEME_LIST (state, payload) {
    state.themes = payload
  },

  THEME_CONTENT (state, payload) {
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
  }
}

export default mutations
