<template>
  <div class="theme_wrapper" v-if="theme_content && this.$route.params.themes">
    <div class="head_wrapper">
      <div class="bg_image"
           :style="{'background-image': 'url('+theme_content.background+')'}"></div>
      <div class="title_wrapper">
        <span class="icon-cheveron-left" @click="goBack()"></span>
        <span class="name">{{ theme_content.name }}</span>
        <span :class="{'icon-followed': this.$route.params.themes.subscribed,
                       'icon-unfollow': this.$route.params.themes.subscribed}"
              @click="beSubscribed()"></span>
      </div>
    </div>
    <div class="content_wrapper">
      <div class="editors_avatar">
        <span class="editor">主编</span>
        <img class="avatar"
             :src="editor.avatar"
             v-for="(editor, index) in theme_content.editors"
             :key="index">
        <span class="icon-cheveron-right" @click="toggleEditors()"></span>
      </div>
      <newsList :newsList="this.getStories"></newsList>
    </div>
    <editors v-show="showEditorPage"
             :editors="this.getEditors"
             @hideEditors="toggleEditors()"></editors>
  </div>
</template>

<script>
import editors from '../editors/editors'
import newsList from '../newsList/newsList'
import './themeContent.styl'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  data () {
    return {
      showEditorPage: false
    }
  },

  mounted () {
    this.GET_THEME_CONTENT(this.$route.params.id)
  },

  computed: {
    ...mapState([
      'theme_content'
    ]),

    getStories () {
      return this.theme_content.stories
    },

    getEditors () {
      return this.theme_content.editors
    }
  },

  methods: {
    ...mapActions([
      'GET_THEME_CONTENT'
    ]),

    ...mapMutations([
      'beSubscribed'
    ]),

    goBack () {
      this.$router.push({ path: '/home' })
    },

    toggleEditors () {
      this.showEditorPage = !this.showEditorPage
      console.log(this.showEditorPage)
    }
  },

  components: {
    editors,
    newsList
  }
}
</script>
