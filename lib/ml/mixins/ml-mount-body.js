import Vue from 'vue'

let CPTConstructor = {}
let mountNumber = 1000 // 弹窗层级
const fragment = document.createDocumentFragment()
let getAnInstance = () => {
  /*eslint-disable*/
  return new CPTConstructor({
    el: document.createElement('div')
  })
}
let removeAnInstance = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target)
  }
}

export default ({ component, options }) => {
  CPTConstructor = Vue.extend(component)
  const duration = options.duration || 3000 // 多久移除
  const automatic = options.automatic || true // 是否需要自动移除 默认true

  const instance = getAnInstance() // 实例
  Object.assign(instance, { $index: mountNumber }, options) // 合并props
  mountNumber++

  fragment.appendChild(instance.$el)
  document.body.appendChild(fragment)

  Vue.nextTick(function () {
    instance.visible = true
    automatic && duration && (instance.timer = setTimeout(function () {
      clearTimeout(instance.timer)
      instance.timer = null
      instance.visible = false
      instance.$el.addEventListener('transitionend', removeAnInstance)
    }, duration))
  })
  return instance
}