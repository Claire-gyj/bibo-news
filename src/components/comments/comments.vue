<template>
  <div class="comments_wrapper">
    <div class="long_comments" v-if="this.news_info && this.long_comments">
      <div v-if="this.long_comments > 0">
        <div class="count">{{ getLongCommentsCount }} 条长评</div>
        <ul>
          <li class="content_wrapper"
              v-for="item in getLongComments"
              :key="item.id">
            <div class="avatar_wrapper">
              <img :src="item.avatar" alt="avatar" class="avatar">
            </div>
            <div class="info">
              <span class="author">{{ item.author }}</span>
              <div class="content">{{ item.content }}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="no_comment_wrapper" v-else>
        <div class="no_comment">
          <span class="icon-no-comment"></span>
          <span class="desc">深度长评虚位以待</span>
        </div>
      </div>
    </div>
    <div class="short_comments" v-if="this.news_info && this.short_comments">
      <div class="count short">
        <span>{{ getShortCommentsCount }} 条短评</span>
        <span class="icon-show" @click="toggleShortComments()"></span>
      </div>
      <ul v-show="showShortComments">
        <li class="content_wrapper"
            v-for="item in getShortComments"
            :key="item.id">
          <div class="avatar_wrapper">
            <img :src="item.avatar" alt="avatar" class="avatar">
          </div>
          <div class="info">
            <span class="author">{{ item.author }}</span>
            <div class="content">{{ item.content }}</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="comments_all_count" v-if="this.news_info">{{ getAllCount }} 条点评</div>
    <div class="write_comment">
      <div class="left_wrapper">
        <span class="icon-cheveron-left" @click="goBack()"></span>
      </div>
      <div class="right_wrapper">
        <div class="write">
          <span class="icon-write-comment"></span>
          <span class="text">写点评</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './comments.styl'
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      showShortComments: false
    }
  },

  mounted () {
    this.GET_NEWS_INFO(this.$route.params.id)
    this.GET_LONG_COMMENTS(this.$route.params.id)
    this.GET_SHORT_COMMENTS(this.$route.params.id)
  },

  computed: {
    ...mapState([
      'news_info',
      'long_comments',
      'short_comments'
    ]),

    getAllCount () {
      return this.news_info.comments
    },

    getLongCommentsCount () {
      return this.news_info.long_comments
    },

    getShortCommentsCount () {
      return this.news_info.short_comments
    },

    getLongComments () {
      return this.long_comments.comments
    },

    getShortComments () {
      return this.short_comments.comments
    }
  },

  methods: {
    ...mapActions([
      'GET_NEWS_INFO',
      'GET_LONG_COMMENTS',
      'GET_SHORT_COMMENTS'
    ]),

    goBack () {
      window.history.back()
    },

    toggleShortComments () {
      this.showShortComments = !this.showShortComments
    }
  }
}
</script>
