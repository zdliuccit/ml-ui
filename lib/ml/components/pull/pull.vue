<template>
  <div class="ml-pull-layout">
    <div class="ml-pull" ref="elWrap">
      <div v-if="pullDown" class="ml-pull-down" :class="{'satisfy-down':downLoad}" ref="elPullDown">
        <div class="inline-block ml-pd-icon" v-show="!satisfy">
          <ml-icon icon="pull-up"></ml-icon>
        </div>
        <div class="inline-block ml-pd-load " v-show="satisfy">
          <ml-loading :width="16" :height="16" :value="true"></ml-loading>
        </div>
        <span class="inline-block">{{satisfy ? '正在刷新...' : '下拉刷新'}}</span>
      </div>
      <div class="ml-pull-wrapper" ref="elContent">
        <slot></slot>
      </div>
      <div v-if="pullUp" class="ml-pull-up" :class="{'satisfy-up':upLoad}" ref="elPullUp">
        <div class="inline-block ml-pd-icon" v-show="!satisfy">
          <ml-icon icon="pull-up"></ml-icon>
        </div>
        <div class="inline-block ml-pd-load" v-show="satisfy">
          <ml-loading :width="16" :height="16" :value="true"></ml-loading>
        </div>
        <span class="inline-block">{{satisfy ? '正在加载...' : '上拉刷新'}}</span>
      </div>
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
      value: {
        type: Boolean,
        default: true,
      },
    },
    watch: {
      /**
       * 监听
       */
      value() {
        if (this.value && this.$refs.elWrap.offsetHeight >= this.$refs.elContent.scrollHeight) {
          this.$emit('input', false)
        }
      },
    },
    data() {
      return {
        dragObject: {},
        upLoad: false,
        downLoad: false,
        elWrap: null,
        elContent: null,
        satisfy: false,
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
          this.translate(this.elWrap, 0, 100, () => {
            this.upLoad = this.downLoad = this.satisfy = false
          })
        })
      },
      /**
       * 动画
       */
      translate($el, offset, speed, callback) {
        if (speed) {
          $el.style.webkitTransition = '-webkit-transform ' + speed + 'ms ease-out'
          setTimeout(() => {
            $el.style.webkitTransform = `translate3d(0,${offset}px,0)`
          }, 60)
          const transitionEndCallback = () => {
            if (callback) callback.apply({}, arguments)
          }
          setTimeout(transitionEndCallback, speed + 30)
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
        const touch = e.touches ? e.touches[0] : e
        this.dragObject.startTop = touch.pageY // 开始left值
        this.dragObject.scrollTop = this.elContent.scrollTop
        this.dragObject.diff = this.elContent.scrollHeight - this.elWrap.offsetHeight
      },
      /**
       * 触发移动
       */
      touchMove(e) {
        this.downLoad = this.upLoad = false
        const dragObject = this.dragObject
        if (!dragObject.startTop) return
        const touch = e.touches ? e.touches[0] : e
        dragObject.currentTop = touch.pageY
        let offsetTop = dragObject.currentTop - dragObject.startTop
        /*eslint-disable*/
        dragObject.ALPHA = dragObject.ALPHA ? dragObject.ALPHA * 0.985 : 0.88
        if (offsetTop < 0 && dragObject.scrollTop === dragObject.diff && this.pullUp && this.value) {
          e.preventDefault()
          if (Math.abs(offsetTop) > 5) {
            offsetTop = -5 * (1.0 - dragObject.ALPHA ) + dragObject.ALPHA * offsetTop
            this.translate(this.elWrap, offsetTop)
          }
          if (Math.abs(offsetTop) > this.$refs.elPullUp.offsetHeight) this.upLoad = true
        }
        if (offsetTop > 0 && dragObject.scrollTop === 0 && this.pullDown) {
          e.preventDefault()
          if (offsetTop > 5) {
            offsetTop = 5 * (1.0 - dragObject.ALPHA ) + dragObject.ALPHA * offsetTop
            this.translate(this.elWrap, offsetTop)
          }
          if (offsetTop > this.$refs.elPullDown.offsetHeight) this.downLoad = true
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
        let offsetH = 0
        this.satisfy = this.downLoad || this.upLoad
        if (this.downLoad) offsetH = this.$refs.elPullDown.offsetHeight
        if (this.upLoad) offsetH = -this.$refs.elPullUp.offsetHeight
        this.translate(this.elWrap, offsetH, 160)
        if (offsetH !== 0) this.doLoading()
        this.dragObject = {}
      },
    },
    mounted() {
      this.$el.parentNode.style.position = 'relative'
      this.elWrap = this.$refs.elWrap
      this.elContent = this.$refs.elContent
      if (!this.pullUp && !this.pullDown) return
      this.elWrap.addEventListener('touchstart', (e) => {
        this.touchStart(e)
      })
      this.elWrap.addEventListener('touchmove', (e) => {
        this.touchMove(e)
      })
      this.elWrap.addEventListener('touchend', (e) => {
        this.touchEnd(e)
      })
    },
  }
</script>