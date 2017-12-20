/**
 * class TouchMixin
 */
class TouchMixin {
  constructor(options) {
    this.options = {
      direType: 1, // 1 判断上下， 2 判断左右
      callback: () => {
      },
    }
    Object.assign(this.options, options)
    this.control = false
    this.sPos = {}
    this.mPos = {}
    this.dire = 0 // 0未移动 1向上 2向下 3向左 4向右
  }

  touchStart(e) {
    const point = e.touches ? e.touches[0] : e
    this.sPos.x = point.screenX
    this.sPos.y = point.screenY
  }

  touchMove(e) {
    const point = e.touches ? e.touches[0] : e
    this.control = true
    this.mPos.x = point.screenX
    this.mPos.y = point.screenY
  }

  touchEnd(e) {
    const diffY = this.mPos.y - this.sPos.y
    const diffX = this.mPos.x - this.sPos.x
    /*eslint-disable*/
    if (this.options.direType === 1 && this.control) {
      diffY > 5 ? this.dire = 2 : (diffY < -5 ? this.dire = 1 : '')
    }
    if (this.options.direType === 2 && this.control) {
      diffX > 5 ? this.dire = 4 : (diffX < -5 ? this.dire = 3 : '')
    }
    this.control = false
    if (this.dire !== 0) {
      this.options.callback(this.dire)
      this.dire = 0
    }
  }
}

/**
 * 移动端touch滑动事件处理
 */
module.exports = ($el, options = {}) => {
  const $touch = new TouchMixin(options)
  $el.addEventListener('touchstart', function (e) {
    e.preventDefault()
    return $touch.touchStart(e)
  }, false)
  $el.addEventListener('touchmove', function (e) {
    return $touch.touchMove(e)
  }, false)
  $el.addEventListener('touchend', function (e) {
    return $touch.touchEnd(e)
  }, false)
  $el.addEventListener('mousedown', function (e) {
    return $touch.start(e)
  }, false)
  $el.addEventListener('mousemove', function (e) {
    return $touch.move(e)
  }, false)
  $el.addEventListener('mouseup', function (e) {
    return $touch.end(e)
  }, false)
  // 禁止微信touchmove冲突
  document.addEventListener('touchmove', function (e) {
    e.preventDefault()
  }, false)
}