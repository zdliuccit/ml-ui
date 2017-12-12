// 引入基础组件
import Icon from './components/icon/icon.vue'
import Layout from './components/layout/layout.vue'
// 引入JS组件
import toast from './components/toast'
// 响应式JS
import responsiveDesign from './utils/responsiveDesign'
// 普通组件
const components = [
  Icon,
  Layout,
]
// JS组件
const jsComponents = [
  toast
]

/**
 *
 * @type {{version: string, install: install, responsiveDesign: Function}}
 */
module.exports = {
  install(Vue) {
    // 全局注册普通组件
    components.map(cpt => Vue.component(`${cpt.name}`, cpt))
    // 全局注册JS组件
    jsComponents.map(jsCpt => {
      Vue.prototype[jsCpt.name] = jsCpt
    })
  },
  version: '1.0.1',
  responsiveDesign,
}