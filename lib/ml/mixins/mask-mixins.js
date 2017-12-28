import { addClass, checkClass, removeClass } from './../utils/ml-utils'

let dgMask = document.getElementById('dgMask')
const maskMixin =
  {
    props: {
      outerClose: {
        type: Boolean,
        default: true
      },
    },
    watch: {
      value(val) {
        this.$nextTick(() => {
          const layers = document.getElementsByClassName('dg-mask-layer')
          if (val) {
            const layersNo = document.getElementsByClassName('dg-no-layer')
            let mountNumber = 1002
            Array.from(layersNo).forEach(vv => {
              if (Number(vv.style.zIndex) >= mountNumber) mountNumber = Number(vv.style.zIndex) + 1
            })
            Array.from(layers).forEach(vv => {
              if (Number(vv.style.zIndex) >= mountNumber) mountNumber = Number(vv.style.zIndex) + 1
            })
            this.zIndex = mountNumber
            addClass(dgMask, 'show-mask')
            addClass(this.$el, 'show-mask')
          } else {
            let result = true
            Array.from(layers).forEach(vv => {
              console.log(vv.style.display)
              if (vv.style.display !== 'none') result = false
            })
            if (result) removeClass(dgMask, 'show-mask')
          }
        })
      },
    },
    methods: {
      closeDgMask() {
        if (this.outerClose) this.$emit('input', false)
      }
    },
    created() {
      if (!dgMask) {
        const fragment = document.createDocumentFragment()
        const mask = document.createElement('div')
        mask.className = 'dg-mask'
        mask.id = 'dgMask'
        fragment.appendChild(mask)
        document.body.appendChild(fragment)
        dgMask = mask
        mask.addEventListener('click', () => {
          this.closeDgMask()
        })
      }
    },
    mounted() {
      if (!checkClass('dg-mask-layer')) {
        addClass(this.$el, 'dg-mask-layer')
      }
    }
  }
export default maskMixin