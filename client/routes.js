import layout from './layout.vue'
import index from './index.vue'
import error404 from './error-404.vue'
import installation from './docs/installation.md'
import button from './docs/button/button.md'
// import indexMd from './../docs/组件开发规范.md'

const routes = [
  {
    path: '/',
    component: index,
  },
  {
    path: '/component',
    component: layout,
    children: [
      {
        path: 'installation',
        component: installation,
      },
      {
        path: 'button',
        component: button
      }
    ],
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
