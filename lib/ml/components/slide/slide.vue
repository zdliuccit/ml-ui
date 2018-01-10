<template>
  <div class="ml-slide">
    <div class="ml-slide-items-wrap" ref="wrap">
      <slot></slot>
    </div>
    <div class="ml-slide-dots" v-show="showDots">
      <div class="ml-slide-dot" v-for="(page, $index) in pages" :class="{ 'dot-active': $index == index }"></div>
    </div>
  </div>
</template>
<script type="text/babel">
  import { addClass, removeClass, animationFrame } from './../../utils/ml-utils'

  export default {
    name: 'slide',
    props: {
      speed: {
        type: Number,
        default: 300,
      },
      autoInterval: {
        type: Number,
        default: 3000,
      },
      defaultIndex: {
        type: Number,
        default: 0,
      },
      showDots: {
        type: Boolean,
        default: true,
      },
      loop: {
        type: Boolean,
        default: true,
      }
    },
    data() {
      return {
        pages: [], // dots数量
        index: 0, // 当前index索引
        timer: null, // 定时器
        animating: false, // 是否动画中
        sliding: false, // 是否滑动中
        isScroll: false, // 是否滚动
        dragObject: {}, // 储存拖拽drag信息
      }
    },
    methods: {
      /**
       * 初始化子组件
       */
      initPages() {
        const children = this.$children
        const pages = []
        this.index = Math.abs(this.defaultIndex) < children.length ? this.defaultIndex : 0
        children.forEach((child, $index) => {
          pages.push(child.$el)
          removeClass(child.$el, 'slide-active')
          if ($index === this.index) addClass(child.$el, 'slide-active')
        })
        this.pages = pages
      },
      /**
       * 初始化定时器
       * 采用setTimeout替代setInterval
       */
      initTimer() {
        if (this.autoInterval > 0 && !this.timer) {
          this.clearTimer()
          if (!this.loop && (this.index >= this.pages.length - 1)) return
          const timerFunc = (callback) => {
            this.timer = setTimeout(() => {
              callback()
              timerFunc(callback)
            }, this.autoInterval)
          }
          timerFunc(() => {
            if (!this.sliding && !this.animating) this.runAnimate('next')
          })
        }
      },
      /**
       * 清除定时器
       */
      clearTimer() {
        clearTimeout(this.timer)
        this.timer = null
      },
      /**
       * 滑动距离后继续执行
       * 采用requestAnimationFrame
       */
      continueTranslate($el, initOffset, offset, callback, $elNext) {
        let ALPHA = 0.88
        this.animating = true
        const animationLoop = () => {
          ALPHA = ALPHA * (0.98)
          if (Math.abs(initOffset - offset) < 1) {
            this.animating = false
            $el.style.webkitTransform = ''
            $elNext.style.webkitTransform = ''
          } else {
            initOffset = ALPHA * initOffset + (1.0 - ALPHA) * offset
            $el.style.webkitTransform = `translate3d(${initOffset}px,0,0)`
            $elNext.style.webkitTransform = `translate3d(${initOffset - offset}px,0,0)`
            if (Math.abs(initOffset - offset) < 1) {
              if (callback) callback.apply({}, arguments)
            }
            animationFrame(animationLoop)
          }
        }
        animationLoop()
      },
      /**
       * 动画
       */
      translate($el, offset, speed, callback) {
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
            if (callback) callback.apply({}, arguments)
          }
          setTimeout(transitionEndCallback, speed + 30)
        } else {
          $el.style.webkitTransition = ''
          $el.style.webkitTransform = `translate3d(${offset}px,0,0)`
        }
      },
      runAnimate(towards, options) {
        if (this.pages.length < 2) return
        let { prevPage, nextPage, currentPage, $elWidth, offsetLeft, distanceX } = options || {}
        const speed = this.speed || 300
        const index = this.index
        const pages = this.pages
        const prevIndex = index - 1 < 0 ? pages.length - 1 : index - 1
        const nextIndex = index + 1 > pages.length - 1 ? 0 : index + 1
        if (!options) {
          $elWidth = this.$el.offsetWidth
          currentPage = pages[index]
          prevPage = pages[prevIndex]
          nextPage = pages[nextIndex]
          prevPage.style.display = 'block'
          this.translate(prevPage, -$elWidth)
          nextPage.style.display = 'block'
          this.translate(nextPage, $elWidth)
        }
        let newIndex = null
        if (towards === 'next') newIndex = nextIndex
        if (towards === 'prev') newIndex = prevIndex
        const callback = () => {
          prevPage.style.display = ''
          nextPage.style.display = ''
          if (newIndex !== null) {
            removeClass(currentPage, 'slide-active')
            addClass(pages[newIndex], 'slide-active')
            this.index = newIndex
          }
        }
        if (towards === 'next') {
          if (distanceX) {
            this.continueTranslate(currentPage, offsetLeft, -$elWidth, callback, nextPage)
          } else {
            this.translate(currentPage, -$elWidth, speed, callback)
            this.translate(nextPage, 0, speed)
          }
        } else if (towards === 'prev') {
          if (distanceX) {
            this.continueTranslate(currentPage, offsetLeft, $elWidth, callback, prevPage)
          } else {
            this.translate(currentPage, $elWidth, speed, callback)
            this.translate(prevPage, 0, speed)
          }
        } else { // 滑动距离<5的回滚
          this.translate(currentPage, 0, speed, callback)
          if (offsetLeft > 0) {
            this.translate(prevPage, -$elWidth, speed)
          } else {
            this.translate(nextPage, $elWidth, speed)
          }
        }
      },
      /**
       * 触发开发
       */
      touchStart(e) {
        const $el = this.$el
        const dragObject = this.dragObject
        const touch = e.touches ? e.touches[0] : e
        if (!this.loop || this.pages.length < 2) return

        dragObject.startTime = new Date() // 触发时间
        dragObject.startLeft = touch.pageX // 开始left值

        dragObject.$elWidth = $el.offsetWidth
        const prevIndex = this.index - 1 < 0 ? this.pages.length - 1 : this.index - 1
        const nextIndex = this.index + 1 > this.pages.length - 1 ? 0 : this.index + 1

        dragObject.prevPage = this.$children[prevIndex].$el
        dragObject.dragPage = this.$children[this.index].$el
        dragObject.nextPage = this.$children[nextIndex].$el
        dragObject.prevPage.style.display = 'block'
        dragObject.nextPage.style.display = 'block'
      },
      /**
       * 触发移动
       */
      touchMove(e) {
        const dragObject = this.dragObject
        const touch = e.touches ? e.touches[0] : e

        dragObject.distanceX = touch.pageX - dragObject.currentLeft
        dragObject.currentLeft = touch.pageX

        let offsetLeft = dragObject.currentLeft - dragObject.startLeft
        if (!this.animating && Math.abs(offsetLeft) < 5) return
        this.animating = true
        e.preventDefault()
        e.stopPropagation()
        this.isScroll = true
        offsetLeft = Math.min(Math.max(-dragObject.$elWidth + 1, offsetLeft), dragObject.$elWidth - 1)
        const towards = offsetLeft < 0 ? 'next' : 'prev'
        if (dragObject.prevPage && towards === 'prev') {
          this.translate(dragObject.prevPage, offsetLeft - dragObject.$elWidth)
        }
        this.translate(dragObject.dragPage, offsetLeft)
        if (dragObject.nextPage && towards === 'next') {
          this.translate(dragObject.nextPage, offsetLeft + dragObject.$elWidth)
        }
      },
      /**
       * 触发结束
       */
      touchEnd() {
        const dragObject = this.dragObject
        const dragDuration = new Date() - dragObject.startTime // 间隔时长
        let towards = null
        let offsetLeft = dragObject.currentLeft - dragObject.startLeft
        const $elWidth = dragObject.$elWidth
        this.animating = false
        if (dragDuration < 300 && !offsetLeft) return

        if (dragDuration < 300 || Math.abs(offsetLeft) > $elWidth / 2) {
          towards = offsetLeft < 0 ? 'next' : 'prev'
        }
        /*eslint-disable*/
        if (!this.loop) {
          if (( this.index === 0 && towards === 'prev') || ( this.index === (this.pages.length - 1) && towards === 'next')) {
            towards = null
          }
        }
        /*eslint-disabled*/
        if (this.$children.length < 2) towards = null
        this.runAnimate(towards, {
          offsetLeft,
          $elWidth,
          prevPage: dragObject.prevPage,
          currentPage: dragObject.dragPage,
          nextPage: dragObject.nextPage,
          distanceX: dragObject.distanceX
        })
        this.dragObject = {}
      },
    },
    created() {
      this.index = this.defaultIndex
    },
    mounted() {
      this.$el.parentNode.style.position = 'relative'
      this.initTimer()
      this.initPages()
      const $el = this.$el
      $el.addEventListener('touchstart', (e) => {
        if (this.animating) return
        this.sliding = true
        this.isScroll = false
        this.touchStart(e)
      })
      $el.addEventListener('touchmove', (e) => {
        if (!this.sliding) return
        if (this.timer) this.clearTimer()
        this.touchMove(e)
      })
      $el.addEventListener('touchend', (e) => {
        if (!this.isScroll) {
          this.sliding = false
          this.dragObject = {}
        }
        if (!this.sliding || !this.isScroll) return
        this.initTimer()
        this.touchEnd(e)
        this.sliding = false
      })
    },
    destroyed() {
      if (this.timer) this.clearTimer()
    },
  }
</script>