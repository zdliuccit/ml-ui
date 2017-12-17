import mlMount from './../../mixins/ml-mount-body'
import message from './message.vue'

let $message = (options = {}) => {
  mlMount({ component: message, options })
}
$message.prototype.error = (options = {}) => {
  message(Object.assign(options, { type: 'error' }))
}
$message.prototype.success = (options = {}) => {
  message(Object.assign(options, { type: 'success' }))
}
$message.prototype.warning = (options = {}) => {
  message(Object.assign(options, { type: 'warning' }))
}
export default $message
