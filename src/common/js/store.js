// const CONTENT = {
//   today_news: null,
//   tempDate: '',
//   past_news: [],
//   news_content: null,
//   news_info: null,
//   long_comments: null,
//   short_comment: null,
//   themes: []
// }

export default {
  fetch () {
    return JSON.parse(window.localStorage.getItem('STATE') || '{}')
  },

  save (content) {
    window.localStorage.setItem('STATE', JSON.stringify(content))
  }
}
