import 'babel-polyfill'

import demo from './md-components/demo-block.vue'
// 第三方库
import Vue from 'vue'
import Vuex from 'vuex'
//  引入组件库样式
import '@ml/ml-styles/index.styl'

// 引入markdown样式
import './assets/markdown.css'
// vue config配置文件
import './config'
// 引入router
import router from './router'
import App from './app.vue'
import SidebarStore from './sidebar-store'

Vue.component('demo-block', demo)

const store = new Vuex.Store({
  getters: {},
  state: {
    sidebar: SidebarStore.sidebar,
  },
})
/**
 * @param {Object} Vue Vue
 * @param {router} [router=undefined] VueRouter 实例化对象
 * @param [] 路由白名单
 * @param (storage) => {} 回调函数
 */
/*eslint-disable*/
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
