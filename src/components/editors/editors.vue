<template>
  <div class="editors_wrapper">
    <div class="editor_head_wrapper">
      <span class="icon-cheveron-left" @click="goBack()"></span>
      <span class="title">主编</span>
    </div>
    <ul class="editors_list">
      <li class="editor" v-for="editor in editors" :key="editor.id">
        <img :src="editor.avatar" class="avatar">
        <div class="info">
          <span class="name">{{ editor.name }}</span>
          <span class="bio">{{ editor.bio }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import './editors.styl'

export default {
  props: ['editors'],

  methods: {
    goBack () {
      console.log(1)
      this.$emit('hideEditors')
    }
  }
}
</script>
