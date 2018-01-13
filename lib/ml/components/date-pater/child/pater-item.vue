<template>
  <div class="ml-pater-item" :style="`width:${width}%;`">
    <ul ref="paterUl">
      <li v-for="ii in (end-start+1)">
        {{(start + ii - 1) < 10 ? '0' : ''}}{{start + ii - 1}}{{unit}}
      </li>
    </ul>
  </div>
</template>
<script type="text/babel">
  import { animationFrame, checkTargetNode } from './../../../utils/ml-utils'

  export default {
    name: 'pater-item',
    props: {
      value: Number,
      width: {
        type: Number,
        default: 0,
      },
      start: {
        type: Number,
        default: 0,
      },
      end: {
        type: Number,
        default: 0,
      },
      unit: String
    },
    data() {
      return {
        elWrap: null,
        dragObject: {},
        currentTop: 0,
        animating: false,
      }
    },
    methods: {
      /**
       * 动画
       */
      translate($el, offset, speed) {
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
            this.currentTop = futureTop
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
        dragObject.startTop = touch.pageY // 开始left值
        dragObject.startTime = new Date() // 触发时间
        const one = this.$el.offsetHeight / 7
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
        if (Math.abs(pageY - dragObject.startTop) < 5) return
        let offsetTop = pageY - (dragObject.currentTop || dragObject.startTop)
        dragObject.currentTop = pageY
        let currentTop = this.currentTop + offsetTop
        if (currentTop >= dragObject.maxTop) currentTop = dragObject.maxTop
        if (currentTop <= dragObject.minTop) currentTop = dragObject.minTop
        /*eslint-disable*/
        e.preventDefault()
        this.currentTop = currentTop
        this.translate(this.elWrap, currentTop)
      }
      ,
      /**
       * 触发结束
       */
      touchEnd() {
        const dragObject = this.dragObject
        if (!dragObject.startTop) return
        const dragDuration = new Date() - dragObject.startTime // 间隔时长
        let currentTop = Math.round(this.currentTop / dragObject.one) * dragObject.one
        const offsetTop = dragObject.currentTop - dragObject.startTop
        if (dragDuration > 300) {
          this.translate(this.elWrap, currentTop, 200)
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