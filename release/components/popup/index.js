import mlMount from './../../mixins/ml-mount-body'
import popup from './popup.vue'

let $popup = (options = {}) => {
  mlMount({ component: popup, options: Object.assign(options, { automatic: true }) })
}
$popup.alert = (options = {}) => {
  mlMount({ component: popup, options: Object.assign(options, { automatic: true }) })
}
$popup.confirm = (options = {}) => {
  mlMount({ component: popup, options: Object.assign(options, { type: 'confirm', automatic: true }) })
}
export default $popup
