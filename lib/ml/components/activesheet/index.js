import mlMount from '../../utils/ml-mount-body'
import popup from './activeSheet.vue'

const $activeSheet = (options = {}) => {
  mlMount({ component: popup, options: Object.assign(options, { automatic: true }) })
}
export default $activeSheet
