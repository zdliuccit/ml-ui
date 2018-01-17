// 引入基础组件
import Icon from './components/icon/icon.vue'
// import Layout from './components/layout/layout.vue'
import Slide from './components/slide/slide.vue'
import SlideItem from './components/slide/child/slide-item.vue'
import Button from './components/button/button.vue'
import Checkbox from './components/checkbox/checkbox.vue'
import CheckboxItem from './components/checkbox/child/checkbox-item.vue'
// import Progress from './components/progress/progress.vue'
import Switch from './components/switch/switch.vue'
import Radio from './components/radio/radio.vue'
import RadioItem from './components/radio/child/radio-item.vue'
import Tab from './components/tab/tab.vue'
import TabItem from './components/tab/child/tab-item.vue'
import Model from './components/model/model.vue'
import Pull from './components/pull/pull.vue'
import AutoLoad from './components/auto-load/auto-load.vue'
import Loading from './components/loading/loading.vue'
import LeftSlip from './components/left-slip/left-slip.vue'
import DatePater from './components/date-pater/date-pater.vue'
import PaterItem from './components/date-pater/child/pater-item.vue'
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
  // Layout,
  Switch,
  Checkbox,
  CheckboxItem,
  // Progress,
  Slide,
  SlideItem,
  Model,
  Pull,
  AutoLoad,
  Loading,
  LeftSlip,
  DatePater,
  PaterItem,
}
// JS组件
const jsComponents = {
  $toast,
  $message,
  $popup
}

/**
 * ios设置1px像素比(ios8+),安卓不做处理
 */
const setIosOnePx = () => {
  const u = navigator.userAgent
  /*eslint-disable*/
  if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    const cssStyle = document.createElement('style')
    const cssString = `
    @media screen and (-webkit-min-device-pixel-ratio: 2) {
      .ml-border { border-width: 0.5px !important; }
    }
    @media screen and (-webkit-min-device-pixel-ratio: 3) {
      .ml-border { border-width: 0.333333px !important;}
    }`
    cssStyle.setAttribute('type', 'text/css')
    cssStyle.appendChild(document.createTextNode(cssString))
    document.getElementsByTagName('head')[0].appendChild(cssStyle)
  }
  /*eslint-disbaled*/
}

const install = function (Vue) {
  setIosOnePx()
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
  version: '1.2.0',
  install,
}, components, jsComponents)