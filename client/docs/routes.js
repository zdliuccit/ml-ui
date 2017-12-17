import installation from './installation.md'
// baseComponents MD
import Icon from './components/icon.md'
import Layout from './components/layout.md'
import Slide from './components/slide.md'
// jsComponents MD
import Toast from './components/toast.md'
import Message from './components/message.md'
import Popup from './components/popup.md'

export default [
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
    path: 'slide',
    component: Slide,
    meta: {
      demoLink: '/slide'
    }
  },
  {
    path: 'toast',
    component: Toast,
    meta: {
      demoLink: '/toast'
    }
  },
  {
    path: 'message',
    component: Message,
    meta: {
      demoLink: '/message'
    }
  },
  {
    path: 'popup',
    component: Popup,
    meta: {
      demoLink: '/popup'
    }
  }
]