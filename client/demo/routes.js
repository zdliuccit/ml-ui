const Icon = () => import('./components/d-icon.vue')
const Toast = () => import('./components/d-toast.vue')
const Message = () => import('./components/d-message.vue')
const ActiveSheet = () => import('./components/d-active-sheet.vue')
const Slide = () => import('./components/d-slide.vue')
const Popup = () => import('./components/d-popup.vue')
const Tab = () => import('./components/d-tab.vue')
const Switch = () => import('./components/d-switch.vue')
const Radio = () => import('./components/d-radio.vue')
const Range = () => import('./components/d-range.vue')
const IView = () => import('./components/d-i-view.vue')
const Checkbox = () => import('./components/d-checkbox.vue')
const Button = () => import('./components/d-button.vue')
const Model = () => import('./components/d-model.vue')
const Pull = () => import('./components/d-pull.vue')
const AutoLoad = () => import('./components/d-auto-load.vue')
const Loading = () => import('./components/d-loading.vue')
const LeftSlip = () => import('./components/d-left-slip.vue')
const DatePater = () => import('./components/d-date-pater.vue')
const Header = () => import('./components/d-header.vue')
const Field = () => import('./components/d-field.vue')
const index = () => import('./demo.vue')

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
  {
    path: 'button',
    name: 'd-button',
    component: Button,
  },
  {
    path: 'checkbox',
    name: 'd-checkbox',
    component: Checkbox,
  },
  // {
  //   path: 'progress',
  //   name: 'd-progress',
  //   component: Progress,
  // },
  {
    path: 'radio',
    name: 'd-radio',
    component: Radio,
  },
  {
    path: 'switch',
    name: 'd-switch',
    component: Switch,
  },
  {
    path: 'tab',
    name: 'd-tab',
    component: Tab,
  },
  {
    path: 'model',
    name: 'd-model',
    component: Model,
  },
  {
    path: 'pull',
    name: 'd-pull',
    component: Pull,
  },
  {
    path: 'auto-load',
    name: 'd-auto-load',
    component: AutoLoad,
  },
  {
    path: 'loading',
    name: 'd-loading',
    component: Loading,
  },
  {
    path: 'left-slip',
    name: 'd-left-slip',
    component: LeftSlip,
  },
  {
    path: 'date-pater',
    name: 'd-date-pater',
    component: DatePater,
  },
  {
    path: 'header',
    name: 'd-header',
    component: Header,
  },
  {
    path: 'field',
    name: 'd-field',
    component: Field,
  },
  {
    path: 'active-sheet',
    name: 'd-active-sheet',
    component: ActiveSheet,
  },
  {
    path: 'range',
    name: 'd-range',
    component: Range,
  },
  {
    path: 'i-view',
    name: 'd-i-view',
    component: IView,
  },
]