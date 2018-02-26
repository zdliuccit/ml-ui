const installation = () => import('./installation.md')
// baseComponents MD
const Icon = () => import('./components/icon.md')
const Header = () => import('./components/header.md')
const Field = () => import('./components/field.md')
const Slide = () => import('./components/slide.md')
const Button = () => import('./components/button.md')
const Tab = () => import('./components/tab.md')
const Switch = () => import('./components/switch.md')
const Radio = () => import('./components/radio.md')
const Checkbox = () => import('./components/checkbox.md')
const Range = () => import('./components/range.md')
const Model = () => import('./components/model.md')
const Pull = () => import('./components/pull.md')
const AutoLoad = () => import('./components/auto-load.md')
const Loading = () => import('./components/loading.md')
const LeftSlip = () => import('./components/left-slip.md')
const DatePater = () => import('./components/date-pater.md')
const IView = () => import('./components/i-view.md')
// jsComponents MD
const Toast = () => import('./components/toast.md')
const Message = () => import('./components/message.md')
const Popup = () => import('./components/popup.md')
const ActiveSheet = () => import('./components/active-sheet.md')

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
  },
  {
    path: 'button',
    component: Button,
    meta: {
      demoLink: '/button'
    }
  },
  {
    path: 'tab',
    component: Tab,
    meta: {
      demoLink: '/tab'
    }
  },
  {
    path: 'switch',
    component: Switch,
    meta: {
      demoLink: '/switch'
    }
  },
  {
    path: 'radio',
    component: Radio,
    meta: {
      demoLink: '/radio'
    }
  },
  {
    path: 'checkbox',
    component: Checkbox,
    meta: {
      demoLink: '/checkbox'
    }
  },
  // {
  //   path: 'progress',
  //   component: Progress,
  //   meta: {
  //     demoLink: '/progress'
  //   }
  // },
  {
    path: 'model',
    component: Model,
    meta: {
      demoLink: '/model'
    }
  },
  {
    path: 'pull',
    component: Pull,
    meta: {
      demoLink: '/pull'
    }
  },
  {
    path: 'auto-load',
    component: AutoLoad,
    meta: {
      demoLink: '/auto-load'
    }
  },
  {
    path: 'loading',
    component: Loading,
    meta: {
      demoLink: '/loading'
    }
  },
  {
    path: 'left-slip',
    component: LeftSlip,
    meta: {
      demoLink: '/left-slip'
    }
  },
  {
    path: 'date-pater',
    component: DatePater,
    meta: {
      demoLink: '/date-pater'
    }
  },
  {
    path: 'header',
    component: Header,
    meta: {
      demoLink: '/header'
    }
  },
  {
    path: 'field',
    component: Field,
    meta: {
      demoLink: '/field'
    }
  },
  {
    path: 'active-sheet',
    component: ActiveSheet,
    meta: {
      demoLink: '/active-sheet'
    }
  },
  {
    path: 'd-range',
    component: Range,
    meta: {
      demoLink: '/d-range'
    }
  },
  {
    path: 'i-view',
    component: IView,
    meta: {
      demoLink: '/i-view'
    }
  },
]