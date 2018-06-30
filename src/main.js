// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import { Carousel, CarouselItem } from 'element-ui'

import '../static/css/reset.css'
import './common/stylus/index.styl'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
