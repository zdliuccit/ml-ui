import install from './install'
// 引入基础组件
import Icon from './components/icon/icon.vue'
import Header from './components/header/header.vue'
import Field from './components/field/field.vue'
import Slide from './components/slide/slide.vue'
import SlideItem from './components/slide/child/slide-item.vue'
import Button from './components/button/button.vue'
import Checkbox from './components/checkbox/checkbox.vue'
import CheckboxItem from './components/checkbox/child/checkbox-item.vue'
import Switch from './components/switch/switch.vue'
import Range from './components/range/range.vue'
import Radio from './components/radio/radio.vue'
import RadioItem from './components/radio/child/radio-item.vue'
import Tab from './components/tab/tab.vue'
import TabItem from './components/tab/child/tab-item.vue'
import Model from './components/model/model.vue'
import Pull from './components/pull/pull.vue'
import AutoLoad from './components/auto-load/auto-load.vue'
import Loading from './components/loading/loading.vue'
import LeftSlip from './components/left-slip/left-slip.vue'
import DatePater from './components/date-pater/date-pater.vue'
import PaterItem from './components/date-pater/child/pater-item.vue'
import IView from './components/i-view/i-view.vue'
// 引入JS组件
import $toast from './components/toast'
import $message from './components/message'
import $popup from './components/popup'
import $activeSheet from './components/activesheet'

// Version
const version = '1.3.7'

// 普通组件
const components = {
  Tab,
  TabItem,
  Icon,
  Radio,
  RadioItem,
  Range,
  IView,
  Button,
  Header,
  Field,
  Switch,
  Checkbox,
  CheckboxItem,
  Slide,
  SlideItem,
  Model,
  Pull,
  AutoLoad,
  Loading,
  LeftSlip,
  DatePater,
  PaterItem,
}
// JS组件
const services = {
  $toast,
  $message,
  $popup,
  $activeSheet,
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(components, services)(window.Vue)
}

/**
 * Export default Object
 *
 * Vue plugin structure, contain `version` and `install` function.
 */
export default {
  version,
  install: install(components, services)
}
