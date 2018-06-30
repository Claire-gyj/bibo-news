<template>
  <div class="home">
    <div class="all_news" v-if="this.$store.state.today_news">
      <div class="bar">
        <span class="icon-menu" @click="toggleMenu()"></span>
        <span class="hot">今日热闻</span>
      </div>
        <div class="head_wrapper">
          <div class="carousel">
          </div>
        </div>
        <div class="content_wrapper">
          <div class="today">
            <newsList :newsList="getTodayStories"></newsList>
          </div>
          <div class="before" v-if="past_news.length > 0">
            <ul v-for="(news, index) in past_news"
                :key="index"
                class="list">
              <div class="news_date">{{ getNewsDate }}</div>
              <router-link :to="{name: 'content', params: {id: news.id}}"
                          tag="li"
                          class="news_item"
                          v-for="item in news.stories"
                          :key="item.id"
                          @click="clearContentInfo()">
                <p class="title">{{ item.title }}</p>
                <div class="pic">
                  <img :src="item.images">
                </div>
              </router-link>
            </ul>
          </div>
        </div>
      <div class="load" @click="load()">点击加载</div>
    </div>
    <div v-if="showSide">
      <div class="mask" @click="toggleMenu()"></div>
      <keep-alive>
        <sideBar :themes="themes"></sideBar>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import sideBar from '../sideBar/sideBar'
import newsList from '../newsList/newsList'
import { mapState, mapActions, mapMutations } from 'vuex'
import './home.styl'

export default {
  data () {
    return {
      showSide: false
    }
  },

  mounted () {
    this.GET_TODAY_NEWS()
    this.GET_THEME_LIST()
  },

  computed: {
    ...mapState([
      'today_news',
      'past_news',
      'themes'
    ]),

    getNewsDate () {
      let length = this.past_news.length
      let month = `${this.past_news[length - 1].date[4]}${this.past_news[length - 1].date[5]}月`
      let day = `${this.past_news[length - 1].date[6]}${this.past_news[length - 1].date[7]}日`
      return month + day
    },

    getTodayStories () {
      return this.today_news.stories
    }
  },

  methods: {
    ...mapMutations([
      'CLEAR_CONTENT_INFO'
    ]),
    ...mapActions([
      'GET_TODAY_NEWS',
      'GET_PAST_NEWS',
      'GET_THEME_LIST'
    ]),

    toggleMenu () {
      this.showSide = !this.showSide
    },

    load () {
      let length = this.past_news.length
      if (length <= 0) {
        this.PAST_NEWS(this.today_news.date)
      } else {
        this.PAST_NEWS(this.past_news[length - 1].date)
      }
    }
  },

  components: {
    sideBar,
    newsList
  }
}
</script>
