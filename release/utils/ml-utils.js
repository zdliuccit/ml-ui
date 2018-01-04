/**
 * Created by liuzhengdong on 2017/9/22.
 * 存放公共方法
 */
module.exports = {
  /**
   * 函数节流
   * @param fn  函数
   * @param delay 多久执行一次
   * @param mustRunDelay 执行时间间隔
   * @return {Function}
   */
  throttle: function (fn, delay, mustRunDelay) {
    /*eslint-disable*/
    let timer = null
    let t_start
    return function () {
      let context = this, args = arguments, t_curr = +new Date()
      clearTimeout(timer)
      if (!t_start) {
        t_start = t_curr
      }
      if (t_curr - t_start >= mustRunDelay) {
        fn.apply(context, args)
        t_start = t_curr
      }
      else {
        timer = setTimeout(function () {
          fn.apply(context, args)
        }, delay)
      }
    }
  },
  /**
   * 添加class名称
   * @param $el
   * @param className
   */
  addClass: function ($el, className) {
    if (Object.prototype.toString.apply(className) === '[object String]') {
      let classes = $el.className.split(' ')
      className.split(' ').forEach(cl => {
        if (classes.findIndex(al => al === cl) === -1) {
          classes.push(cl)
        }
      })
      $el.className = classes.join(' ')
    }
  },
  /**
   * 移除class名称
   * @param $el
   * @param className
   */
  removeClass: function ($el, className) {
    if (Object.prototype.toString.apply(className) === '[object String]') {
      let classes = $el.className.split(' ')
      className.split(' ').forEach(cl => {
        const $index = classes.findIndex(al => al === cl)
        if ($index > -1) {
          classes.splice($index, 1)
        }
      })
      $el.className = classes.join(' ')
    }
  },
  /**
   * 判断class名称是否存在
   * @param $el
   * @param className
   * @return {boolean}
   */
  checkClass($el, className) {
    let result = false
    if (Object.prototype.toString.apply(className) === '[object String]') {
      let classes = $el.className.split(' ')
      className.split(' ').forEach(cl => {
        result = classes.findIndex(al => al === cl) > -1
      })
    }
    return result
  },
  /**
   *  兼容requestAnimationFrame
   *  @param  {Function } callback
   */
  animationFrame: function (callback) {
    requestAnimationFrame(callback) ||
    webkitRequestAnimationFrame(callback) ||
    mozRequestAnimationFrame(callback) ||
    setTimeout(callback, 60)
  }
}