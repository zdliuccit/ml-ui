import mlMount from '../../utils/ml-mount-body'
import toast from './toast.vue'

let $toast = (options = {}) => {
  mlMount({ component: toast, options })
}

export default $toast
