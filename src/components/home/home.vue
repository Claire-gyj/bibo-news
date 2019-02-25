<template>
  <div class="home">
    <div class="all_news" v-if="this.$store.state.today_news">
      <div class="bar">
        <span class="icon-menu" @click="toggleMenu()"></span>
        <span class="hot">今日热闻</span>
      </div>
      <el-carousel height="220px" class="stories">
        <el-carousel-item v-for="(story, index) in today_news.top_stories"
                          :key="index"
                          class="story">
          <img :src="story.image" class="image">
          <span class="title">{{ story.title}}</span>
        </el-carousel-item>
      </el-carousel>
      <div class="content_wrapper">
        <div class="today">
          <newsList :newsList="getTodayStories"></newsList>
        </div>
        <div class="before" v-for="(news, index) in past_news" :key="index">
          <ul v-if="news.stories"
              class="list">
            <div class="news_date">{{ getNewsDate }}</div>
            <router-link v-for="item in news.stories"
                        :to="{name: 'content', params: {id: item.id}}"
                        tag="li"
                        class="news_item"
                        :key="item.id"
                        >
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
      console.log(this.themes.others)
    },

    load () {
      let length = this.past_news.length
      if (length <= 0) {
        this.GET_PAST_NEWS(this.today_news.date)
      } else {
        this.GET_PAST_NEWS(this.past_news[length - 1].date)
      }
    }
  },

  components: {
    sideBar,
    newsList
  }
}
</script>
