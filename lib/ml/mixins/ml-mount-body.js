import Vue from 'vue'

let CPTConstructor = {}
let popupObjects = {}
let getAnInstance = name => {
  if (!popupObjects[name]) {
    popupObjects[name] = []
  }
  if (popupObjects[name].length > 0) {
    let instance = popupObjects[name][0]
    popupObjects[name].splice(0, 1)
    return instance
  }
  /*eslint-disable*/
  return new CPTConstructor({
    el: document.createElement('div')
  })
}
let returnAnInstance = (instance, name) => {
  if (instance) {
    popupObjects[name].push(instance)
  }
}

let removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target)
  }
}

export default function ({ component, options }) {
  CPTConstructor = Vue.extend(component)
  CPTConstructor.prototype.close = function () {
    this.visible = false
    this.$el.addEventListener('transitionend', removeDom)
    this.closed = true
    returnAnInstance(this, component.name)
  }
  let duration = options.duration || 3000

  let instance = getAnInstance(component.name)
  instance.props = Object.assign({}, instance.props, options)
  instance.position = options.position || 'middle'

  instance.closed = false
  clearTimeout(instance.timer)

  document.body.appendChild(instance.$el)
  Vue.nextTick(function () {
    instance.visible = true
    instance.$el.removeEventListener('transitionend', removeDom)
    duration && (instance.timer = setTimeout(function () {
      if (instance.closed) return
      instance.close()
    }, duration))
  })
  return instance
}