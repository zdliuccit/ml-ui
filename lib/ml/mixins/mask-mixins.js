import { addClass, checkClass } from '../utils/ml-utils'

const maskMixin =
  {
    data() {
      return {
        currentIndex: 1003,
      }
    },
    watch: {
      /**
       * 监听值
       * @param val
       */
      value(val) {
        if (val) {
          const layers = document.getElementsByClassName('dg-mask-layer')
          let mountNumber = 1002
          Array.from(layers).forEach(vv => {
            if (Number(vv.style.zIndex) >= mountNumber) mountNumber = Number(vv.style.zIndex) + 1
          })
          this.currentIndex = mountNumber
        }
      },
    },
    mounted() {
      if (!checkClass('dg-mask-layer')) {
        addClass(this.$el, 'dg-mask-layer')
      }
    },
  }
export default maskMixin