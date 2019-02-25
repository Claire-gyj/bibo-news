<template>
  <div class="content_wrapper"
        v-if="this.news_content && this.news_info">
    <div class="head_wrapper" v-if="this.news_content.image">
      <div class="head">
        <img :src="this.news_content.image" class="bg" v-if="this.news_content.image">
        <p class="title" style="margin: 0">{{ getTitle }}</p>
        <p class="author" style="margin: 0" v-if="this.news_content.image">图片：{{ getAuthor }}</p>
      </div>
    </div>
    <div class="content" v-html="this.news_content.body"></div>
    <div class="bottom_nav">
      <div class="wrapper" @click="goBack()">
        <span class="icon icon-cheveron-left"></span>
      </div>
      <div class="wrapper">
        <span class="icon icon-cheveron-down"></span>
      </div>
      <div class="wrapper popularity">
        <span class="icon icon-like"></span>
        <span class="popularity_count"
              :class="{add: togglePopular}"
              @click="add()">
              {{ getPopularity }}
        </span>
      </div>
      <div class="wrapper">
        <span class="icon icon-share"></span>
      </div>
      <router-link
        v-if="this.$route.params.id"
        :to="{name: 'comments', params:{id: this.$route.params.id}}"
        class="wrapper comment"
        tag="div">
          <span class="icon icon-comments"></span>
          <span class="comment_count">{{ getComment }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import './content.styl'
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      togglePopular: false
    }
  },

  mounted () {
    this.GET_NEWS_CONTENT(this.$route.params.id)
    this.GET_NEWS_INFO(this.$route.params.id)
  },

  computed: {
    ...mapState([
      'news_content',
      'news_info'
    ]),

    getTitle () {
      return this.news_content.title
    },

    getAuthor () {
      return this.news_content.image_source
    },

    getPopularity () {
      return this.news_info.popularity
    },

    getComment () {
      return this.news_info.comments
    }
  },

  methods: {
    ...mapActions([
      'GET_NEWS_CONTENT',
      'GET_NEWS_INFO'
    ]),

    goBack () {
      window.history.back()
      this.$store.commit('CLEAR_CONTENT_INFO')
    },

    add () {
      if (!this.togglePopular) {
        this.news_info.popularity += 1
        this.togglePopular = !this.togglePopular
      } else {
        this.news_info.popularity -= 1
        this.togglePopular = !this.togglePopular
      }
    }
  }
}
</script>

<style scoped>
  /* @import url("http://news-at.zhihu.com/css/news_qa.auto.css?v=4b3e3"); */
  p {
    margin: 0 !important;
  }

  img {
    margin: 0 !important;
    display: inline-block;
  }
</style>
