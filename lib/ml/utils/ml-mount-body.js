import Vue from 'vue'
/*eslint-disable*/
let CPTConstructor = {}
let mountNumber = 1000 // 弹窗层级
const fragment = document.createDocumentFragment()
let getAnInstance = () => {
  return new CPTConstructor({
    el: document.createElement('div')
  })
}
let removeAnInstance = instance => {
  if (instance.$el.parentNode) {
    instance.onClose && instance.onClose()
    document.body.removeChild(instance.$el)
  }
}

export default ({ component, options }) => {
  CPTConstructor = Vue.extend(component)
  const duration = options.duration || 3000 // 多久移除
  const automatic = options.automatic || false // 是否需要自动移除 默认false取反来着

  const instance = getAnInstance() // 实例
  Object.assign(instance, { $index: mountNumber }, options) // 合并props
  mountNumber++

  fragment.appendChild(instance.$el)
  document.body.appendChild(fragment)
  Vue.nextTick(function () {
    instance.visible = true
    !automatic && duration && (instance.timer = setTimeout(function () {
      clearTimeout(instance.timer)
      instance.timer = null
      instance.visible = false
      instance.$el.addEventListener('transitionend', removeAnInstance(instance))
    }, duration))
  })
  return instance
}