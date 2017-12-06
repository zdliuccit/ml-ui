import layout from './layout.vue'
import index from './index.vue'
import error404 from './error-404.vue'
import installation from './docs/installation.md'
import button from './docs/components/button.md'
import empty from './empty.vue'
import demo from './demo/routes'

const routes = [
  {
    path: '/',
    component: index,
  },
  {
    path: '/docs',
    component: layout,
    children: [
      {
        path: 'installation',
        component: installation,
        meta: {
          demoLink: '/index'
        }
      },
      {
        path: 'button',
        component: button,
        meta: {
          demoLink: '/test'
        }
      }
    ],
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
