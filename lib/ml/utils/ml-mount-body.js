import Vue from 'vue'
/*eslint-disable*/
let CPTConstructor = {}
const fragment = document.createDocumentFragment()
const getAnInstance = () => {
  return new CPTConstructor({
    el: document.createElement('div')
  })
}
export default ({ component, options }) => {
  CPTConstructor = Vue.extend(component)
  const duration = options.duration || 3000 // 多久移除
  const automatic = options.automatic || false // 是否需要自动移除 默认false取反来着

  const instance = getAnInstance() // 实例
  const layers = document.getElementsByClassName('dg-mask-layer')
  let mountNumber = 1002
  Array.from(layers).forEach(vv => {
    if (Number(vv.style.zIndex) >= mountNumber) mountNumber = Number(vv.style.zIndex) + 1
  })
  Object.assign(instance, { $index: mountNumber }, options) // 合并props

  fragment.appendChild(instance.$el)
  document.body.appendChild(fragment)
  Vue.nextTick(function () {
    instance.visible = true
    instance.value = true
    !automatic && duration && (instance.timer = setTimeout(function () {
      clearTimeout(instance.timer)
      instance.timer = null
      instance.visible = false
      instance.value = false
      instance.$el.addEventListener('transitionend', () => {
        if (instance.$el.parentNode) {
          instance.onClose && instance.onClose()
          document.body.removeChild(instance.$el)
        }
      })
    }, duration))
  })
  return instance
}