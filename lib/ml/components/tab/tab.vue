<template>
  <div class="ml-tab">
    <div class="ml-tab-nav ml-border">
    </div>
    <div class="ml-tab-wrap" ref="mlTabs">
      <slot name="item"></slot>
    </div>
  </div>
</template>
<script type="text/babel">
  import { addClass, removeClass, animationFrame } from './../../utils/ml-utils'

  export default {
    name: 'tab',
    props: {
      speed: {
        type: Number,
        default: 300,
      },
      defaultIndex: {
        type: Number,
        default: 0,
      },
    },
    data() {
      return {
        pages: [], // dots数量
        index: 0, // 当前index索引
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
          removeClass(child.$el, 'tab-active')
          addClass(child.$el, `tab-${$index} ${$index === this.index ? 'tab-active' : ''}`)
        })
        this.pages = pages
      },
      /**
       * 滑动距离后继续执行
       * 采用requestAnimationFrame
       */
      continueTranslate($el, initOffset, offset, callback, $elNext) {
        this.animating = true
        const animationLoop = () => {
          if (Math.abs(initOffset - offset) < 0.5) {
            this.animating = false
            $el.style.webkitTransform = ''
            $elNext.style.webkitTransform = ''
            if (callback) callback()
          } else {
            initOffset = 0.87 * initOffset + 0.3 * offset
            $el.style.webkitTransform = `translateX(${initOffset}px)`
            $elNext.style.webkitTransform = `translateX(${initOffset - offset}px)`
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
            $el.style.webkitTransform = `translateX(${offset}px)`
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
          $el.style.webkitTransform = `translateX(${offset}px)`
        }
      },
      runAnimate(towards, options) {
        if (this.pages.length < 2) return
        let { prevPage, nextPage, currentPage, $elWidth, offsetLeft, distanceX } = options || {}
        let speed = this.speed || 300
        const index = this.index
        const pages = this.pages
        let pageCount = pages.length
        if (!options) {
          $elWidth = this.$el.clientWidth
          const prevIndex = index - 1 < 0 ? pages.length - 1 : index - 1
          const nextIndex = index + 1 > pages.length - 1 ? 0 : index + 1
          currentPage = pages[index]
          prevPage = pages[prevIndex]
          nextPage = pages[nextIndex]

          prevPage.style.display = 'block'
          this.translate(prevPage, -$elWidth)

          nextPage.style.display = 'block'
          this.translate(nextPage, $elWidth)
        }
        if (!currentPage || !prevPage || !nextPage) return

        let newIndex = null
        if (towards === 'prev') {
          if (index > 0) newIndex = index - 1
          if (index === 0) newIndex = pageCount - 1
        } else if (towards === 'next') {
          if (index < pageCount - 1) newIndex = index + 1
          if (index === pageCount - 1) newIndex = 0
        }
        let callback = () => {
          if (newIndex !== undefined && newIndex !== null) {
            removeClass(currentPage, 'tab-active')
            addClass(pages[newIndex], 'tab-active')
            this.index = newIndex
          }
          prevPage.style.display = ''
          nextPage.style.display = ''
        }

        setTimeout(() => {
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
              this.translate(prevPage, $elWidth * -1, speed)
            } else {
              this.translate(nextPage, $elWidth, speed)
            }
          }
        }, 10)
      },
      /**
       * 触发开发
       */
      touchStart(e) {
        const $el = this.$el
        const dragObject = this.dragObject
        const touch = e.touches ? e.touches[0] : e
        if (this.pages.length < 2) return

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
        if (Math.abs(offsetLeft) < 5) return
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

        if (dragDuration < 300 && !offsetLeft) return

        if (dragDuration < 300 || Math.abs(offsetLeft) > $elWidth / 2) {
          towards = offsetLeft < 0 ? 'next' : 'prev'
        }

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
      this.initPages()
      const $el = this.$refs.mlTabs
      $el.addEventListener('touchstart', (e) => {
        if (this.animating) return
        this.sliding = true
        this.isScroll = false
        this.touchStart(e)
      })
      $el.addEventListener('touchmove', (e) => {
        e.preventDefault()
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
        this.touchEnd(e)
        this.sliding = false
      })
    },
  }
</script>