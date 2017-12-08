import mlMount from './../../mixins/ml-mount-body'
import toast from './toast.vue'

let $toast = (options = {}) => {
  mlMount({ component: toast, options })
}

export default $toast
