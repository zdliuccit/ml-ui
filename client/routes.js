import indexMd from './../docs/组件开发规范.md'
import empty from './empty.vue'

const routes = [
  {
    path: '/',
    component: indexMd,
  },
  {
    path: '/component',
    component: empty,
    children: [
      {
        path: 'installation',
        component: indexMd,
      },
    ],
  }
]

export default routes
