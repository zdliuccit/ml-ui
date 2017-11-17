/**
 * 解决table等元素在iPad上无法垂直滚动的问题
 * 用法：在需要滚动的元素上(一般是table)添加 v-fix-vertical-touch-scrolling="'.center'"
 * '.center'是需要设置scrollTop的容器选择器
 */
import browser from '@sdk/utils/browser'

const MATH = global.Math

module.exports = {
  /**
   * 获取需要修复滚动的节点
   * @param {*} el 指令绑定的元素，可以直接操作dom
   * @param {*} binding 一个对象，可以获取指令的多个属性
   */
  inserted(el, binding) {
    // 如果不是iOS则直接结束
    if (!browser.is('ios')) {
      return
    }
    const scrollContainer = document.querySelector(binding.value)
    if (!scrollContainer) {
      throw Error(`[v-fix-vertical-touch-scrolling]: Can not find the scroll container with the selector '${binding.value}'`)
    }
    el._scrollingTouchStartHandler = (e) => {
      el._lastX = e.targetTouches[0].clientX
      el._lastY = e.targetTouches[0].clientY
    }
    el._scrollingTouchMoveHandler = (e) => {
      const curX = e.targetTouches[0].clientX
      const curY = e.targetTouches[0].clientY
      const diffX = el._lastX - curX
      const diffY = el._lastY - curY
      el._lastY = curY
      scrollContainer.scrollTop += diffY
      // 取绝对值，如果Y轴移动比X轴移动大，则认为是垂直滚动，阻止默认事件
      // 花了个把小时才想到这个方案~~~
      const abDiffX = MATH.abs(diffX)
      const abDiffY = MATH.abs(diffY)
      if (abDiffY - abDiffX > 0) {
        e.preventDefault()
      }
    }
    el.addEventListener('touchstart', el._scrollingTouchStartHandler)
    el.addEventListener('touchmove', el._scrollingTouchMoveHandler)
  },
  unbind(el) {
    el.removeEventListener('touchstart', el._scrollingTouchStartHandler)
    el.removeEventListener('touchstart', el._scrollingTouchMoveHandler)
  },
}
