import layout from './layout.vue'
import index from './index.vue'
import error404 from './error-404.vue'
import empty from './empty.vue'
import demo from './demo/routes'
import docs from './docs/routes'

const routes = [
  {
    path: '/',
    component: index,
  },
  {
    path: '/docs',
    component: layout,
    children: docs,
  },
  {
    path: '/demo',
    component: empty,
    children: demo,
  },
  {
    path: '*',
    component: error404,
    meta: {
      title: '出错了！！！'
    }
  },
]

export default routes
