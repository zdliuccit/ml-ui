// 引入基础组件
import Icon from './components/icon/icon.vue'
import Layout from './components/layout/layout.vue'
import slide from './components/slide/slide.vue'
import slideItem from './components/slide/child/slide-item.vue'
// 引入JS组件
import $toast from './components/toast'
import $message from './components/message'
import $popup from './components/popup'
// 响应式JS
import responsiveDesign from './utils/responsiveDesign'

// 普通组件
const components = {
  Icon,
  Layout,
  slide,
  slideItem,
}
// JS组件
const jsComponents = {
  $toast,
  $message,
  $popup
}
const install = function (Vue) {
  // 全局注册普通组件
  Object.keys(components).map(key => Vue.component(`${components[key].name}`, components[key]))
  // 全局注册JS组件
  Object.assign(Vue.prototype, jsComponents)
}

/**
 *
 * @param version 版本号
 * @param install 注册方法
 * @param responsiveDesign Function 响应式JS回调
 * @param components 基础组件
 * @param jsComponents JS组件
 */
module.exports = Object.assign({
  version: '1.1.2',
  install,
  responsiveDesign,
}, components, jsComponents)