// 引入基础组件
import Icon from './components/icon/icon.vue'
import Layout from './components/layout/layout.vue'
import Slide from './components/slide/slide.vue'
import SlideItem from './components/slide/child/slide-item.vue'
import Button from './components/button/button.vue'
import Checkbox from './components/checkbox/checkbox.vue'
import CheckboxItem from './components/checkbox/child/checkbox-item.vue'
import Progress from './components/progress/progress.vue'
import Switch from './components/switch/switch.vue'
import Radio from './components/radio/radio.vue'
import RadioItem from './components/radio/child/radio-item.vue'
import Tab from './components/tab/tab.vue'
import TabItem from './components/tab/child/tab-item.vue'
import Model from './components/model/model.vue'
import Pull from './components/pull/pull.vue'
import AutoLoad from './components/auto-load/auto-load.vue'
import Loading from './components/loading/loading.vue'
// 引入JS组件
import $toast from './components/toast'
import $message from './components/message'
import $popup from './components/popup'

// 普通组件
const components = {
  Tab,
  TabItem,
  Icon,
  Radio,
  RadioItem,
  Button,
  Layout,
  Switch,
  Checkbox,
  CheckboxItem,
  Progress,
  Slide,
  SlideItem,
  Model,
  Pull,
  AutoLoad,
  Loading,
}
// JS组件
const jsComponents = {
  $toast,
  $message,
  $popup
}
const install = function (Vue) {
  // 全局注册普通组件
  Object.keys(components).map(key => Vue.component(`ml-${components[key].name}`, components[key]))
  // 全局注册JS组件
  Object.assign(Vue.prototype, jsComponents)
}

/**
 *
 * @param version 版本号
 * @param install 注册方法
 * @param components 基础组件
 * @param jsComponents JS组件
 */
module.exports = Object.assign({
  version: '1.1.2',
  install,
}, components, jsComponents)