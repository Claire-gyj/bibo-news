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
            <newsList :newsList="this.getTodayStories"></newsList>
          </div>
          <div class="before" v-if="this.past_news.length > 0">
            <ul v-for="(item, index) in this.past_news"
                :key="index"
                class="list">
              <div class="news_date">{{ getNewsDate }}</div>
              <router-link :to="{name: 'content', params: {id: item.id}}"
                          tag="li"
                          class="news_item"
                          v-for="item in item.stories"
                          :key="item.id">
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
      <sideBar :themes="themes"></sideBar>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import sideBar from '../sideBar/sideBar'
import newsList from '../newsList/newsList'
import { mapState, mapActions } from 'vuex'
import './home.styl'

export default {
  data () {
    return {
      showSide: false
    }
  },

  mounted () {
    this.TODAY_NEWS()
    this.THEME_LIST()
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
    ...mapActions([
      'TODAY_NEWS',
      'PAST_NEWS',
      'THEME_LIST'
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
    },

    _initScroll () {
      this.contentScroll = new BScroll(this.$refs.contentWrapper, {
        click: true
      })
    }
  },

  components: {
    sideBar,
    newsList
  }
}
</script>
