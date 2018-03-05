<template>
  <div class="ml-slide">
    <div class="ml-slide-items-wrap" ref="wrap">
      <slot></slot>
    </div>
    <div class="ml-slide-dots" v-show="showDots">
      <div class="ml-slide-dot" v-for="(page, $index) in pages" :class="{ 'dot-active': $index == index }"
           :key="$index"></div>
    </div>
  </div>
</template>
<script type="text/babel">
  import { addClass, removeClass, animationFrame } from './../../utils/ml-utils'

  export default {
    name: 'ml-slide',
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
          const timerFunc = (callback) => {
            this.timer = setTimeout(() => {
              if (!this.loop && this.index >= this.pages.length - 1) return
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
          ALPHA = ALPHA * 0.98
          if (Math.abs(initOffset - offset) < 2) {
            this.animating = false
            $el.style.webkitTransform = ''
            $elNext.style.webkitTransform = ''
          } else {
            initOffset = Math.round(ALPHA * initOffset + (1 - ALPHA) * offset)
            $el.style.webkitTransform = `translate3d(${initOffset}px,0,0)`
            $elNext.style.webkitTransform = `translate3d(${initOffset - offset}px,0,0)`
            if (Math.abs(initOffset - offset) < 2 && callback) callback()
            animationFrame(animationLoop)
          }
        }
        animationLoop()
      },
      /**
       * 动画
       */
      setTranslate($el, offset, speed, callback) {
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
            callback && callback()
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
          this.setTranslate(prevPage, -$elWidth)
          this.setTranslate(nextPage, $elWidth)
          prevPage.style.display = nextPage.style.display = 'block'
        }
        let newIndex = null
        if (towards === 'next') newIndex = nextIndex
        if (towards === 'prev') newIndex = prevIndex
        const callback = () => {
          prevPage.style.display = nextPage.style.display = ''
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
            this.setTranslate(currentPage, -$elWidth, speed, callback)
            this.setTranslate(nextPage, 0, speed)
          }
        } else if (towards === 'prev') {
          if (distanceX) {
            this.continueTranslate(currentPage, offsetLeft, $elWidth, callback, prevPage)
          } else {
            this.setTranslate(currentPage, $elWidth, speed, callback)
            this.setTranslate(prevPage, 0, speed)
          }
        } else { // 滑动距离<5的回滚
          this.setTranslate(currentPage, 0, speed, callback)
          if (offsetLeft > 0) {
            this.setTranslate(prevPage, -$elWidth, speed)
          } else {
            this.setTranslate(nextPage, $elWidth, speed)
          }
        }
      },
      /**
       * 触发开发
       */
      touchStart(e) {
        if (this.pages.length < 2 || this.animating) return
        const $el = this.$el
        const dragObject = this.dragObject
        const touch = e.touches ? e.touches[0] : e
        dragObject.startTime = new Date() // 触发时间
        dragObject.startLeft = touch.pageX // 开始left值
        dragObject.$elWidth = $el.offsetWidth
        const prevIndex = this.index - 1 < 0 ? this.pages.length - 1 : this.index - 1
        const nextIndex = this.index + 1 > this.pages.length - 1 ? 0 : this.index + 1
        dragObject.prevPage = this.pages[prevIndex]
        dragObject.dragPage = this.pages[this.index]
        dragObject.nextPage = this.pages[nextIndex]
        dragObject.prevPage.style.display = 'block'
        dragObject.nextPage.style.display = 'block'
      },
      /**
       * 触发移动
       */
      touchMove(e) {
        const dragObject = this.dragObject
        const touch = e.touches ? e.touches[0] : e
        if (!dragObject.startLeft) return
        dragObject.distanceX = touch.pageX - dragObject.currentLeft
        dragObject.currentLeft = touch.pageX
        let offsetLeft = dragObject.currentLeft - dragObject.startLeft
        if (!this.animating && Math.abs(offsetLeft) < 5) return
        offsetLeft = Math.min(Math.max(-dragObject.$elWidth + 1, offsetLeft), dragObject.$elWidth - 1)
        if (!this.loop && ((this.index === 0 && offsetLeft > 0) ||
            (this.index === this.pages.length - 1 && offsetLeft < 0))) {
          dragObject.currentLeft = null
          offsetLeft = 0
        }
        this.animating = true
        e.preventDefault()
        this.setTranslate(dragObject.dragPage, offsetLeft)
        if (dragObject.prevPage !== dragObject.nextPage) {
          this.setTranslate(dragObject.prevPage, offsetLeft - dragObject.$elWidth)
          this.setTranslate(dragObject.nextPage, offsetLeft + dragObject.$elWidth)
        } else {
          if (this.index === 1) {
            this.setTranslate(dragObject.nextPage, offsetLeft - dragObject.$elWidth)
          } else {
            this.setTranslate(dragObject.nextPage, offsetLeft + dragObject.$elWidth)
          }
        }
      },
      /**
       * 触发结束
       */
      touchEnd() {
        const dragObject = this.dragObject
        if (!dragObject.startLeft || !dragObject.currentLeft) {
          this.animating = false
          return
        }
        const dragDuration = new Date() - dragObject.startTime // 间隔时长
        const offsetLeft = dragObject.currentLeft - dragObject.startLeft
        const $elWidth = dragObject.$elWidth
        let towards = null
        if (dragDuration < 300 || Math.abs(offsetLeft) > $elWidth / 2) {
          towards = offsetLeft < 0 ? 'next' : 'prev'
        }
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
    mounted() {
      const $el = this.$el
      this.initTimer()
      this.initPages()
      $el.parentNode.style.position = 'relative'
      $el.addEventListener('touchstart', (e) => {
        this.sliding = true
        this.touchStart(e)
      })
      $el.addEventListener('touchmove', (e) => {
        if (!this.sliding) return
        if (this.timer) this.clearTimer()
        this.touchMove(e)
      })
      $el.addEventListener('touchend', () => {
        this.touchEnd()
        this.initTimer()
        this.sliding = false
      })
    },
    destroyed() {
      if (this.timer) this.clearTimer()
    },
  }
</script>
