<template>
  <ul class="list" v-if="newsList">
    <router-link v-for="item in newsList"
                 :to="{name: 'content', params: {id: item.id}}"
                 tag="li"
                 class="news_item"
                 :key="item.id">
      <p class="title">{{ item.title }}</p>
      <div class="pic" v-if="item.images">
        <img :src="item.images">
      </div>
    </router-link>
  </ul>
</template>

<script>
import './newsList.styl'

export default {
  props: ['newsList']
}
</script>
