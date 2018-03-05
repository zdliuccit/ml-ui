<template>
  <div class="ml-pater-item">
    <ul ref="paterUl">
      
      <li v-for="ii in (end-start+1)" :key="`pater${ii}`" :class="{'pater-check':value==(start + ii - 1)}">
        <!-- &lt; refers to '<', see discussion here 'https://github.com/vuejs/eslint-plugin-vue/issues/370' -->
        {{ (start + ii - 1) &lt; 10 ? '0' : '' }}{{ start + ii - 1 }}{{ unit }}
      </li>
    </ul>
  </div>
</template>
<script type="text/babel">
  import { animationFrame, checkTargetNode } from './../../../utils/ml-utils'

  export default {
    name: 'ml-pater-item',
    props: {
      value: Number,
      start: Number,
      end: Number,
      unit: String
    },
    watch: {
      /**
       * 监听
       */
      value() {
        if (this.value !== this.currentValue) this.initTranslate3d()
      }
    },
    data() {
      return {
        elWrap: null,
        dragObject: {},
        currentTop: 0,
        animating: false,
        currentValue: this.value,
      }
    },
    methods: {
      /**
       * 通知值变化
       */
      emitValue() {
        this.currentValue = Math.round(3 - this.currentTop / 34 + this.start)
        if (this.value !== this.currentValue) this.$emit('input', this.currentValue)
      },
      /**
       * 初始化位置
       */
      initTranslate3d() {
        this.currentTop = 34 * (this.start - this.value + 3)
        this.setTranslate(this.elWrap, this.currentTop)
      },
      /**
       * 动画
       */
      setTranslate($el, offset, speed) {
        if (speed) {
          this.animating = true
          $el.style.webkitTransition = '-webkit-transform ' + speed + 'ms ease-in-out'
          setTimeout(() => {
            $el.style.webkitTransform = `translate3d(0,${offset}px,0)`
          }, 60)
          const transitionEndCallback = () => {
            this.animating = false
            $el.style.webkitTransition = ''
          }
          setTimeout(transitionEndCallback, speed + 30)
        } else {
          $el.style.webkitTransition = ''
          $el.style.webkitTransform = `translate3d(0,${offset}px,0)`
        }
      },
      /**
       * 滑动距离后继续执行
       * 采用requestAnimationFrame
       */
      continueTranslate($el, nowTop, futureTop) {
        this.animating = true
        const animationLoop = () => {
          if (Math.abs(nowTop - futureTop) < 1) {
            this.animating = false
            $el.style.webkitTransform = `translate3d(0,${futureTop}px,0)`
          } else {
            nowTop = 0.87 * nowTop + 0.13 * futureTop
            $el.style.webkitTransform = `translate3d(0,${nowTop}px,0)`
            animationFrame(animationLoop)
          }
        }
        animationLoop()
      },
      /**
       * 触发开发
       */
      touchStart(e) {
        if (this.animating) {
          e.preventDefault()
          return
        }
        const touch = e.touches ? e.touches[0] : e
        const dragObject = this.dragObject
        const one = this.$el.offsetHeight / 7
        dragObject.startTop = touch.pageY // 开始left值
        dragObject.startTime = new Date() // 触发时间
        dragObject.one = one
        dragObject.maxTop = one * 3
        dragObject.minTop = -(this.end - this.start - 3) * one
      },
      /**
       * 触发移动
       */
      touchMove(e) {
        const dragObject = this.dragObject
        if (!dragObject.startTop) return
        const touch = e.touches ? e.touches[0] : e
        const pageY = touch.pageY
        if (!this.animating && Math.abs(pageY - dragObject.startTop) < 5) return
        this.animating = true
        const offsetTop = pageY - (dragObject.currentTop || dragObject.startTop)
        dragObject.currentTop = pageY
        let currentTop = this.currentTop + offsetTop || 0
        if (currentTop >= dragObject.maxTop) currentTop = dragObject.maxTop
        if (currentTop <= dragObject.minTop) currentTop = dragObject.minTop
        e.preventDefault()
        this.currentTop = currentTop
        this.setTranslate(this.elWrap, currentTop)
      },
      /**
       * 触发结束
       */
      touchEnd() {
        const dragObject = this.dragObject
        if (!dragObject.startTop || !dragObject.currentTop) {
          this.animating = false
          return
        }
        const dragDuration = new Date() - dragObject.startTime // 间隔时长
        let currentTop = Math.round(this.currentTop / dragObject.one) * dragObject.one
        const offsetTop = dragObject.currentTop - dragObject.startTop
        if (dragDuration > 300) {
          this.setTranslate(this.elWrap, currentTop, 200)
        } else {
          const topMile = (1 + Math.abs(offsetTop) / 5 / dragObject.one)
          const durationMile = Math.round(600 / dragDuration * topMile)
          if (offsetTop > 0) {
            currentTop += dragObject.one * durationMile
          } else {
            currentTop -= dragObject.one * durationMile
          }
          if (currentTop >= dragObject.maxTop) currentTop = dragObject.maxTop
          if (currentTop <= dragObject.minTop) currentTop = dragObject.minTop
          this.continueTranslate(this.elWrap, this.currentTop, currentTop)
        }
        this.currentTop = currentTop
        this.emitValue()
        this.dragObject = {}
      }
      ,
    },
    mounted() {
      this.elWrap = this.$refs.paterUl
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
    }
  }
</script>
