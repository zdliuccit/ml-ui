<template>
  <div class="ml-pull-layout">
    <div class="ml-pull" ref="elWrap">
      <div v-if="pullDown" class="ml-pull-down" ref="elPullDown"></div>
      <div class="ml-pull-wrapper" ref="elContent">
        <slot></slot>
      </div>
      <div v-if="pullUp" class="ml-pull-up" ref="elPullUp"></div>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'pull',
    props: {
      pullUp: {
        type: Boolean,
        default: true,
      },
      pullDown: {
        type: Boolean,
        default: true,
      },
      loading: Function,
      refresh: Function,
    },
    data() {
      return {
        dragObject: {},
        upLoad: false,
        downLoad: false,
        elWrap: null,
        elContent: null,
      }
    },
    methods: {
      /**
       * 执行加载事件
       */
      doLoading() {
        new Promise((resolve, reject) => {
          if (this.loading && this.upLoad) {
            this.loading(resolve, reject)
          } else if (this.downLoad && this.refresh) {
            this.refresh(resolve, reject)
          } else {
            resolve()
          }
        }).then(() => {
          this.upLoad = false
          this.downLoad = false
          this.translate(this.elWrap, 0, 80)
        })
      },
      /**
       * 动画
       */
      translate($el, offset, speed) {
        if (speed) {
          $el.style.webkitTransition = '-webkit-transform ' + speed + 'ms ease-out'
          setTimeout(() => {
            $el.style.webkitTransform = `translate3d(0,${offset}px,0)`
          }, 60)
        } else {
          $el.style.webkitTransition = ''
          $el.style.webkitTransform = `translate3d(0,${offset}px,0)`
        }
      },
      /**
       * 触发开发
       */
      touchStart(e) {
        if (this.upLoad || this.downLoad) return
        const dragObject = this.dragObject
        const touch = e.touches ? e.touches[0] : e
        dragObject.startTop = touch.pageY // 开始left值
        dragObject.scrollTop = this.elContent.scrollTop
        dragObject.diff = this.elContent.scrollHeight - this.elWrap.offsetHeight
      },
      /**
       * 触发移动
       */
      touchMove(e) {
        const dragObject = this.dragObject
        if (!dragObject.startTop) return
        const touch = e.touches ? e.touches[0] : e
        dragObject.distanceY = touch.pageY - dragObject.currentTop
        dragObject.currentTop = touch.pageY
        const offsetTop = dragObject.currentTop - dragObject.startTop
        if ((offsetTop < 0 && dragObject.scrollTop === dragObject.diff && this.pullUp) ||
          (offsetTop > 0 && dragObject.scrollTop === 0 && this.pullDown)) {
          e.preventDefault()
          this.upLoad = false
          this.downLoad = false
          if (Math.abs(offsetTop) > 5) this.translate(this.elWrap, offsetTop)
        }
      },
      /**
       * 触发结束
       */
      touchEnd() {
        const dragObject = this.dragObject
        if (!dragObject.startTop) return
        let offsetTop = dragObject.currentTop - dragObject.startTop
        if (Math.abs(offsetTop) < 5) return
        if (offsetTop > 0 && this.dragObject.scrollTop === 0 && this.pullDown) this.downLoad = true
        if (offsetTop < 0 && this.dragObject.diff === this.dragObject.scrollTop && this.pullUp) this.upLoad = true
        let offsetH = 0
        if (this.downLoad) {
          offsetH = this.$refs.elPullDown.offsetHeight
        }
        if (this.upLoad) {
          offsetH = -this.$refs.elPullUp.offsetHeight
        }
        this.translate(this.elWrap, offsetH, 200)
        this.doLoading()
        this.dragObject = {}
      },
    },
    mounted() {
      this.elWrap = this.$refs.elWrap
      this.elContent = this.$refs.elContent
      if (!this.pullUp && !this.pullUp) return
      this.elWrap.addEventListener('touchstart', (e) => {
        this.touchStart(e)
      })
      this.elWrap.addEventListener('touchmove', (e) => {
        this.touchMove(e)
      })
      this.elWrap.addEventListener('touchend', (e) => {
        e.preventDefault()
        this.touchEnd(e)
      })
    },
  }
</script>