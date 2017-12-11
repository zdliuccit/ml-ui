import layout from './layout.vue'
import index from './index.vue'
import error404 from './error-404.vue'
import installation from './docs/installation.md'
import empty from './empty.vue'
import demo from './demo/routes'
// baseComponents MD
import Icon from './docs/components/icon.md'
import Layout from './docs/components/layout.md'
// jsComponents MD
import Toast from './docs/components/toast.md'

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
        path: 'icon',
        component: Icon,
        meta: {
          demoLink: '/icon'
        }
      },
      {
        path: 'layout',
        component: Layout,
        meta: {
          demoLink: '/layout'
        }
      },
      {
        path: 'toast',
        component: Toast,
        meta: {
          demoLink: '/toast'
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
