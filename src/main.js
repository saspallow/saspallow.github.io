// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VModal from 'vue-js-modal'
import VueProgressBar from 'vue-progressbar'
import VueImg from 'v-img'

const options = {
  thickness: '3px',
  color: 'rgb(115, 220, 255)',
  failedColor: 'red',
  height: '2px'
}

Vue.use(VModal)
Vue.use(VueProgressBar, options)
Vue.use(VueImg)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
