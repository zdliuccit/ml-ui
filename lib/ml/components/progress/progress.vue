<template>
  <div class="ml-progress">
    {{value}}
    <div class="ml-progress-circle ml-border" ref="progressCircle"></div>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'progress',
    props: {
      value: {
        type: Number,
        default: 0,
      }
    },
    data() {
      return {
        dragObject: {},
      }
    },
    methods: {
      /**
       * 动画
       */
      translate($el, offset, callback) {
        $el.style.webkitTransition = ''
        $el.style.webkitTransform = `translate3d(${offset}px,0,0)`
        if (callback) callback.apply({}, arguments)
      },
      /**
       * 触发开发
       */
      touchStart(e) {
        const $el = this.$el
        const dragObject = this.dragObject
        const touch = e.touches ? e.touches[0] : e
        dragObject.startLeft = touch.pageX // 开始left值
        dragObject.$elWidth = $el.offsetWidth
      },
      /**
       * 触发移动
       */
      touchMove(e) {
        this.log(dragObject)
        const dragObject = this.dragObject
        const touch = e.touches ? e.touches[0] : e
        dragObject.distanceX = touch.pageX - dragObject.currentLeft
        dragObject.currentLeft = touch.pageX
        let offsetLeft = dragObject.currentLeft - dragObject.startLeft
        if (Math.abs(offsetLeft) < 5) return
        e.preventDefault()
        if (offsetLeft > 0 && this.slipLeft === dragObject.maxWidth) {
          offsetLeft = this.slipLeft - offsetLeft
          if (offsetLeft <= 0) offsetLeft = 0
          this.translate(this.$refs.progressCircle, -offsetLeft)
        }
        if (offsetLeft < 0 && this.slipLeft === 0) {
          if (Math.abs(offsetLeft) >= dragObject.maxWidth) offsetLeft = -dragObject.maxWidth
          this.translate(this.$refs.progressCircle, offsetLeft)
        }
      },
      /**
       * 触发结束
       */
      touchEnd() {
        this.dragObject = {}
      },
    },
    mounted() {
      const $el = this.$refs.progressCircle
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
  }
</script>