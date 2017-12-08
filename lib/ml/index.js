// 引入基础组件
// import Button from './components/button/button.vue'
// 引入JS组件
import toast from './components/toast'
// 响应式JS
import responsiveDesign from './utils/responsiveDesign'

// 普通组件
const components = [
  // Button
]
// JS组件
const jsComponents = [
  toast
]
const install = function (Vue) {
  // 全局注册普通组件
  components.map(cpt => Vue.component(`ml-${cpt.name}`, cpt))
  // 全局注册JS组件
  jsComponents.map(jsCpt => {
    Vue.prototype[jsCpt.name] = jsCpt
  })
}

/**
 *
 * @type {{version: string, install: install, responsiveDesign: Function}}
 */
module.exports = {
  version: '1.0.1',
  install,
  responsiveDesign,
}