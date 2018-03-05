<template>
  <div class="ml-left-slip">
    <div class="left-slip-warp" ref="warpSlip">
      <div class="left-slip-left">
        <slot></slot>
      </div>
      <div class="left-slip-right" ref="rightSlip">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  import { animationFrame, checkTargetNode } from './../../utils/ml-utils'

  export default {
    name: 'ml-left-slip',
    props: {
      selfClosing: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        dragObject: {},
        slipLeft: 0,
        animating: false,
      }
    },
    methods: {
      /**
       * 动画
       */
      setTranslate($el, offset, speed) {
        if (speed) {
          this.animating = true
          $el.style.webkitTransition = '-webkit-transform ' + speed + 'ms ease-in-out'
          setTimeout(() => {
            $el.style.webkitTransform = `translate3d(${offset}px,0,0)`
          }, 60)
          const transitionEndCallback = () => {
            this.animating = false
            $el.style.webkitTransition = ''
            $el.style.webkitTransform = ''
          }
          setTimeout(transitionEndCallback, speed + 30)
        } else {
          $el.style.webkitTransition = ''
          $el.style.webkitTransform = `translate3d(${offset}px,0,0)`
        }
      },
      /**
       * 滑动距离后继续执行
       * 采用requestAnimationFrame
       */
      continueTranslate($el, currentLeft, offset, callback) {
        let ALPHA = 0.88
        this.animating = true
        const animationLoop = () => {
          if (Math.abs(currentLeft - offset) < 2) {
            this.animating = false
            currentLeft = offset
            $el.style.webkitTransform = `translate3d(${currentLeft}px,0,0)`
            callback && callback()
          } else {
            ALPHA = ALPHA * 0.98
            if (offset === 0) {
              currentLeft = ALPHA * currentLeft - (1 - ALPHA) * currentLeft
            } else {
              currentLeft = ALPHA * currentLeft + (1 - ALPHA) * (offset)
            }
            $el.style.webkitTransform = `translate3d(${Math.round(currentLeft)}px,0,0)`
            animationFrame(animationLoop)
          }
        }
        animationLoop()
      },
      /**
       * 触发开发
       */
      touchStart(e) {
        const maxWidth = this.$refs.rightSlip.offsetWidth
        if (maxWidth < 1 || this.animating) return
        const touch = e.touches ? e.touches[0] : e
        this.dragObject.startLeft = touch.pageX
        this.dragObject.startTop = touch.pageY
        this.dragObject.maxWidth = maxWidth
      },
      /**
       * 触发移动
       */
      touchMove(e) {
        const dragObject = this.dragObject
        const touch = e.touches ? e.touches[0] : e
        const pageX = touch.pageX
        if (!dragObject.startLeft) return
        dragObject.oldValue = dragObject.currentLeft || pageX
        if (!this.animating && Math.abs(pageX - dragObject.startLeft) < 18) return
        dragObject.currentLeft = pageX
        const offsetLeft = pageX - dragObject.oldValue
        this.animating = true
        dragObject.result = Math.abs(touch.pageY - dragObject.startTop) >= 1.73 * Math.abs(pageX - dragObject.startLeft)
        if (dragObject.result) return
        e.preventDefault()
        let currentLeft = this.slipLeft + offsetLeft || 0
        if (currentLeft >= 0) currentLeft = 0
        if (currentLeft <= -dragObject.maxWidth) currentLeft = -dragObject.maxWidth
        this.slipLeft = currentLeft
        this.setTranslate(this.$refs.warpSlip, currentLeft)
      },
      /**
       * 触发结束
       */
      touchEnd(e) {
        const dragObject = this.dragObject
        const currentLeft = this.slipLeft
        if (!dragObject.startLeft || !dragObject.currentLeft || (currentLeft === 0 && dragObject.result)) {
          this.animating = false
          this.dragObject = {}
          return
        }
        const touch = e.changedTouches ? e.changedTouches[0] : e
        this.slipLeft = touch.pageX - dragObject.oldValue > 0 ? 0 : -dragObject.maxWidth
        if (this.selfClosing) document.body.addEventListener('touchstart', this.stopPro, true)
        this.continueTranslate(this.$refs.warpSlip, currentLeft, this.slipLeft, () => {
          if (this.selfClosing) document.body.removeEventListener('touchstart', this.stopPro, true)
          if (this.slipLeft === 0) {
            if (this.selfClosing) document.body.removeEventListener('touchstart', this.reduction, true)
          } else {
            if (this.selfClosing) document.body.addEventListener('touchstart', this.reduction, true)
          }
        })
        this.dragObject = {}
      },
      /**
       * 还原
       * @param {Object} e
       */
      reduction(e) {
        if (!checkTargetNode(e.target, this.$el)) {
          this.slipLeft = 0
          document.body.removeEventListener('touchstart', this.reduction, true)
          this.setTranslate(this.$refs.warpSlip, 0, 200)
        }
      },
      /**
       * 阻止冒泡
       * @param e
       */
      stopPro(e) {
        e.stopPropagation()
      }
    },
    mounted() {
      const $el = this.$el
      $el.addEventListener('touchstart', (e) => {
        this.touchStart(e)
      }, false)
      $el.addEventListener('touchmove', (e) => {
        this.touchMove(e)
      }, false)
      $el.addEventListener('touchend', (e) => {
        this.touchEnd(e)
      }, false)
    },
    destroyed() {
      if (this.selfClosing) {
        document.body.removeEventListener('touchstart', this.reduction, true)
        document.body.removeEventListener('touchstart', this.stopPro, true)
      }
    },
  }
</script>