const state = {
  today_news: null,
  past_news: [],
  news_content: null,
  news_info: null,
  long_comments: null,
  short_comment: null,
  themes: [],
  theme_content: null
}

const getters = {
  themesLength (state) {
    return state.themes.length
  }
}

export {state, getters}
