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
   * 增加 hljs 的 classname
   */
  wrapClass: function (render) {
    return function (...args) {
      return render(...args)
        .replace('<code class="', '<code class="hljs ')
        .replace('<code>', '<code class="hljs">')
    }
  },
  /**
   * Format HTML string
   */
  convert: function (str) {
    str = str.replace(/(&#x)(\w{4})/gi, function ($0) {
      return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16))
    })
    return str
  },
  /**
   * strip-tags <https://github.com/jonschlinkert/strip-tags>
   * @param str
   * @param tags
   * @return {*}
   */
  strip: function (str, tags) {
    let $ = require('cheerio').load(str, {
      decodeEntities: false
    })

    if (!tags || tags.length === 0) {
      return str
    }

    tags = !Array.isArray(tags) ? [tags] : tags
    let len = tags.length

    while (len--) {
      $(tags[len]).remove()
    }

    return $.html()
  },
}