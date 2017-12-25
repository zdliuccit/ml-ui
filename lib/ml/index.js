// 引入基础组件
import Icon from './components/icon/icon.vue'
import Layout from './components/layout/layout.vue'
import Slide from './components/slide/slide.vue'
import SlideItem from './components/slide/child/slide-item.vue'
import Button from './components/button/button.vue'
import Checkbox from './components/checkbox/checkbox.vue'
import Progress from './components/progress/progress.vue'
import Switch from './components/switch/switch.vue'
import Radio from './components/radio/radio.vue'
import Tab from './components/tab/tab.vue'
// 引入JS组件
import $toast from './components/toast'
import $message from './components/message'
import $popup from './components/popup'
// 响应式JS
import responsiveDesign from './utils/responsiveDesign'

// 普通组件
const components = {
  Tab,
  Icon,
  Slide,
  Radio,
  Button,
  Layout,
  Switch,
  Checkbox,
  Progress,
  SlideItem,
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