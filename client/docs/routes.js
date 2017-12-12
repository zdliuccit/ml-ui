import installation from './installation.md'

// baseComponents MD
import Icon from './components/icon.md'
import Layout from './components/layout.md'
// jsComponents MD
import Toast from './components/toast.md'

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
    path: 'toast',
    component: Toast,
    meta: {
      demoLink: '/toast'
    }
  }
]