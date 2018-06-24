import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home.vue'
import content from '../components/content/content.vue'
import comments from '../components/comments/comments.vue'
import themeContent from '../components/themeContent/themeContent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/content/:id',
      name: 'content',
      component: content
    },
    {
      path: '/content/comments/:id',
      name: 'comments',
      component: comments
    },
    {
      path: '/themeContent/:id/:themes/:theme',
      name: 'themeContent',
      component: themeContent
    }
  ],
  linkActiveClass: 'active'
})
