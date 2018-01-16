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
    name: 'left-slip',
    props: {},
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
      translate($el, offset, speed, callback) {
        if (speed) {
          this.animating = true
          $el.style.webkitTransition = '-webkit-transform ' + speed + 'ms ease-in-out'
          setTimeout(() => {
            $el.style.webkitTransform = `translate3d(${offset}px,0,0)`
          }, 66)
          const transitionEndCallback = () => {
            this.animating = false
            $el.style.webkitTransition = ''
            $el.style.webkitTransform = ''
            if (callback) callback.apply({}, arguments)
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
      continueTranslate($el, initOffset, offset, callback) {
        let ALPHA = 0.88
        this.animating = true
        const animationLoop = () => {
          if (Math.abs(initOffset - offset) < 2 || Math.abs(initOffset) < 2) {
            if (callback) callback.apply({}, arguments)
            this.animating = false
            if (offset > 0) offset = 0
            $el.style.webkitTransform = `translate3d(${offset}px,0,0)`
          } else {
            if (offset < 0) {
              ALPHA = ALPHA * 0.98
              initOffset = ALPHA * initOffset + (1.0 - ALPHA) * offset
            } else {
              ALPHA = ALPHA * 0.995
              initOffset = ALPHA * initOffset - (1.0 - ALPHA) * initOffset
            }
            $el.style.webkitTransform = `translate3d(${initOffset}px,0,0)`
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
        if (maxWidth < 0 || this.animating) return
        const touch = e.touches ? e.touches[0] : e
        this.dragObject.startLeft = touch.pageX
        this.dragObject.maxWidth = maxWidth
      },
      /**
       * 触发移动
       */
      touchMove(e) {
        const dragObject = this.dragObject
        const touch = e.touches ? e.touches[0] : e
        if (!dragObject.startLeft) return
        dragObject.currentLeft = touch.pageX
        let offsetLeft = dragObject.currentLeft - dragObject.startLeft
        if (!this.animating && Math.abs(offsetLeft) < 5) return
        if (offsetLeft < 0 && this.slipLeft !== 0) return
        this.animating = true
        e.preventDefault()
        offsetLeft = this.slipLeft + offsetLeft
        if (offsetLeft >= 0) offsetLeft = 0
        if (Math.abs(offsetLeft) >= this.dragObject.maxWidth) offsetLeft = -this.dragObject.maxWidth
        this.translate(this.$refs.warpSlip, offsetLeft)
      },
      /**
       * 触发结束
       */
      touchEnd() {
        const dragObject = this.dragObject
        this.dragObject = {}
        if (!dragObject.startLeft && !this.animating) return
        let offsetLeft = dragObject.currentLeft - dragObject.startLeft
        this.animating = false
        if (offsetLeft > 0 && this.slipLeft + offsetLeft >= 0) {
          this.slipLeft = 0
          return
        }
        if (offsetLeft > 0 && this.slipLeft !== 0) {
          this.continueTranslate(this.$refs.warpSlip, this.slipLeft + offsetLeft, dragObject.maxWidth, () => {
            this.slipLeft = 0
            document.body.removeEventListener('touchstart', this.reduction, false)
          })
        }
        if (offsetLeft < 0 && this.slipLeft === 0) {
          if (Math.abs(offsetLeft) >= dragObject.maxWidth) offsetLeft = -dragObject.maxWidth
          this.continueTranslate(this.$refs.warpSlip, offsetLeft, -dragObject.maxWidth, () => {
            document.body.addEventListener('touchstart', this.reduction, false)
            this.slipLeft = -dragObject.maxWidth
          })
        }
      },
      /**
       * 还原
       * @param {Object} e
       */
      reduction(e) {
        if (!checkTargetNode(e.target, this.$el)) {
          document.body.removeEventListener('touchstart', this.reduction, false)
          this.translate(this.$refs.warpSlip, 0, 200, () => {
            this.slipLeft = 0
          })
        }
      },
    },
    mounted() {
      const $el = this.$el
      $el.addEventListener('touchstart', (e) => {
        this.touchStart(e)
      })
      $el.addEventListener('touchmove', (e) => {
        this.touchMove(e)
      })
      $el.addEventListener('touchend', (e) => {
        this.touchEnd(e)
      })
    },
    destroyed() {
      document.body.removeEventListener('touchstart', this.reduction, false)
    },
  }
</script>