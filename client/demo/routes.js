import Icon from './components/d-icon.vue'
import Layout from './components/d-layout.vue'
import Toast from './components/d-toast.vue'
import Message from './components/d-message.vue'
import Slide from './components/d-slide.vue'
import Popup from './components/d-popup.vue'
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
  {
    path: 'message',
    name: 'd-message',
    component: Message,
  },
  {
    path: 'slide',
    name: 'd-slide',
    component: Slide,
  },
  {
    path: 'popup',
    name: 'd-popup',
    component: Popup,
  },
]