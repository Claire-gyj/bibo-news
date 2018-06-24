<template>
  <div class="side_bar">
    <div class="head_wrapper">
      <div class="user">
        <span class="user_avatar"></span>
        <span class="user_name">Lucifer</span>
      </div>
      <div class="user_info">
        <div class="info">
          <span class="icon icon-star"></span>
          <span class="desc">收藏</span>
        </div>
        <div class="info">
          <span class="icon icon-messages"></span>
          <span class="desc">消息</span>
        </div>
        <div class="info">
          <span class="icon icon-settings"></span>
          <span class="desc">设置</span>
        </div>
      </div>
    </div>
    <div class="menu_wrapper">
      <div class="home_page">
        <span class="icon-home"></span>
        <span class="desc">首页</span>
        <span class="status icon-cheveron-right"></span>
      </div>
      <div ref="themeWrapper">
        <div class="theme_wrapper" >
          <ul v-if="themes.others.length > 0">
            <router-link tag="li"
                        class="theme"
                        v-for="theme in themes.others"
                        :to="{name: 'themeContent', params: {id: theme.id, themes: themes, theme: theme}}"
                        :key="theme.id"
                        >
              <span class="desc">{{ theme.name }}</span>
              <span class="status"
                    :class="{'icon-add': themes.subscribed.indexOf(theme) === -1,
                            'icon-cheveron-right': themes.subscribed.indexOf(theme) !== -1}"
                    @click.stop="beSubscribed(theme)"></span>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
    <div class="foot_wrapper">
      <div class=""></div>
      <div class=""></div>
    </div>
  </div>
</template>

<script>
import './sideBar.styl'
import BScroll from 'better-scroll'
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  props: ['themes'],
  created () {
    this.$nextTick(() => {
      this._initScroll()
    })
  },

  computed: {
    ...mapGetters([
      'themesLength'
    ])
  },

  methods: {
    ...mapActions([
      'THEME_LIST'
    ]),

    ...mapMutations([
      'beSubscribed'
    ]),

    _initScroll () {
      this.themeScroll = new BScroll(this.$refs.themeWrapper, {
        click: true
      })
    }
  }
}
</script>
