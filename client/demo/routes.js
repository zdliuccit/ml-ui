import Icon from './components/d-icon.vue'
import Layout from './components/d-layout.vue'
import Toast from './components/d-toast.vue'
import index from './demo.vue'

export default [
  {
    path: 'index',
    name: 'demoIndex',
    component: index,
  },
  {
    path: 'icon',
    name: 'd-icon',
    component: Icon,
  },
  {
    path: 'toast',
    name: 'd-toast',
    component: Toast,
  },
  {
    path: 'layout',
    name: 'd-layout',
    component: Layout,
  },
]