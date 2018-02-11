/* loading */
import VueRouter from 'vue-router'
import routes from './routes'

const ProgressBar = require('progressbar.js')

const router = new VueRouter({
  // mode: 'history',
  routes
})

const doc = global.document

// 响应式 SVG 进度条
let line = null

router.beforeEach((to, from, next) => {
  // 进度条开始
  if (line) line.destroy()
  line = new ProgressBar.Line('body', {
    color: '#009ce5',
    strokeWidth: 0.2,
    svgStyle: {
      position: 'fixed',
      zIndex: '10001',
      top: 0,
      left: 0,
      right: 0,
      maxHeight: '2px'
    }
  })
  line.animate(0.8, {
    duration: 500
  })
  if (/Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent) &&
    to.path !== '/' && to.path.indexOf('demo') < 0) {
    router.replace('/demo/index')
  } else {
    next()
  }
})

router.afterEach((route) => {
  // 设置标题
  doc.title = route.meta.title || 'ml-ui,一套为开发者、设计师和产品经理准备的基于 Vue 2 的移动端组件库'
  // 进度条结束
  if (line) {
    line.animate(1, {
      duration: 1000
    }, () => {
      line.destroy()
      line = null
    })
  }
})

export default router
