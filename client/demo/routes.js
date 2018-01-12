import Icon from './components/d-icon.vue'
import Layout from './components/d-layout.vue'
import Toast from './components/d-toast.vue'
import Message from './components/d-message.vue'
import Slide from './components/d-slide.vue'
import Popup from './components/d-popup.vue'
import Tab from './components/d-tab.vue'
import Switch from './components/d-switch.vue'
import Radio from './components/d-radio.vue'
import Progress from './components/d-progress.vue'
import Checkbox from './components/d-checkbox.vue'
import Button from './components/d-button.vue'
import Model from './components/d-model.vue'
import Pull from './components/d-pull.vue'
import AutoLoad from './components/d-auto-load.vue'
import Loading from './components/d-loading.vue'
import LeftSlip from './components/d-left-slip.vue'
import DatePater from './components/d-date-pater.vue'
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
  {
    path: 'progress',
    name: 'd-progress',
    component: Progress,
  },
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
  }
]