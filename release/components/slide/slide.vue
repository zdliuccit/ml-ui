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
  import { addClass, removeClass } from './../../utils/ml-utils'

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
      animation: {
        type: String,
        default: 'left',
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
        start: null, // 动画执行的开始时间
        timer: null, // 定时器
        animating: false, // 是否动画中
        isDone: false,
        dragging: false,
        userScrolling: false,
        dragState: {},
      }
    },
    methods: {
      /**
       * 初始化子组件
       */
      initPages() {
        const children = this.$children
        let pages = []
        let intDefaultIndex = Math.floor(this.defaultIndex)
        let defaultIndex = (intDefaultIndex >= 0 && intDefaultIndex < children.length) ? intDefaultIndex : 0
        this.index = defaultIndex
        children.forEach((child, $index) => {
          pages.push(child.$el)
          removeClass(child.$el, 'slide-active')
          addClass(child.$el, `slide-${$index} ${$index === this.index ? 'slide-active' : ''}`)
        })
        this.pages = pages
      },
      initTimer() {
        if (this.autoInterval > 0 && !this.timer) {
          this.timer = setInterval(() => {
            if (!this.loop && (this.index >= this.pages.length - 1)) {
              return this.clearTimer()
            }
            if (!this.dragging && !this.animating) {
              this.next()
            }
          }, this.autoInterval)
        }
      },
      rafTranslate(element, initOffset, offset, callback, nextElement) {
        let ALPHA = 0.88
        this.animating = true
        let _offset = initOffset
        let raf = 0

        function animationLoop() {
          if (Math.abs(_offset - offset) < 0.5) {
            this.animating = false
            _offset = offset
            element.style.webkitTransform = ''
            if (nextElement) {
              nextElement.style.webkitTransform = ''
            }
            cancelAnimationFrame(raf)

            if (callback) {
              callback()
            }

            return
          }

          _offset = ALPHA * _offset + (1.0 - ALPHA) * offset
          element.style.webkitTransform = `translateX(${_offset}px)`

          if (nextElement) {
            nextElement.style.webkitTransform = `translateX(${_offset - offset}px)`
          }

          raf = requestAnimationFrame(animationLoop.bind(this))
        }

        animationLoop.call(this)
      },

      translate(element, offset, speed, callback) {
        if (speed) {
          this.animating = true
          element.style.webkitTransition = '-webkit-transform ' + speed + 'ms ease-in-out'
          setTimeout(() => {
            element.style.webkitTransform = `translateX(${offset}px)`
          }, 50)
          let called = false

          let transitionEndCallback = () => {
            if (called) return
            called = true
            this.animating = false
            element.style.webkitTransition = ''
            element.style.webkitTransform = ''
            if (callback) {
              callback.apply(this, arguments)
            }
          }

          setTimeout(transitionEndCallback, speed + 80)
        } else {
          element.style.webkitTransition = ''
          element.style.webkitTransform = `translateX(${offset}px)`
        }
      },
      clearTimer() {
        clearInterval(this.timer)
        this.timer = null
      },
      doAnimate(towards, options) {
        if (this.$children.length === 0) return
        if (!options && this.$children.length < 2) return

        /*eslint-disable*/
        let prevPage, nextPage, currentPage, pageWidth, offsetLeft, speedX
        let speed = this.speed || 300
        let index = this.index
        let pages = this.pages
        let pageCount = pages.length

        if (!options) {
          pageWidth = this.$el.clientWidth
          currentPage = pages[index]
          prevPage = pages[index - 1]
          nextPage = pages[index + 1]
          if (this.loop && pages.length > 1) {
            if (!prevPage) {
              prevPage = pages[pages.length - 1]
            }
            if (!nextPage) {
              nextPage = pages[0]
            }
          }
          if (prevPage) {
            prevPage.style.display = 'block'
            this.translate(prevPage, -pageWidth)
          }
          if (nextPage) {
            nextPage.style.display = 'block'
            this.translate(nextPage, pageWidth)
          }
        } else {
          prevPage = options.prevPage
          currentPage = options.currentPage
          nextPage = options.nextPage
          pageWidth = options.pageWidth
          offsetLeft = options.offsetLeft
          speedX = options.speedX
        }

        let newIndex

        let oldPage = this.$children[index].$el

        if (towards === 'prev') {
          if (index > 0) {
            newIndex = index - 1
          }
          if (this.loop && index === 0) {
            newIndex = pageCount - 1
          }
        } else if (towards === 'next') {
          if (index < pageCount - 1) {
            newIndex = index + 1
          }
          if (this.loop && index === pageCount - 1) {
            newIndex = 0
          }
        }

        let callback = () => {
          if (newIndex !== undefined) {
            let newPage = this.$children[newIndex].$el
            removeClass(oldPage, 'slide-active')
            addClass(newPage, 'slide-active')
            this.index = newIndex
          }
          if (prevPage) {
            prevPage.style.display = ''
          }
          if (nextPage) {
            nextPage.style.display = ''
          }
        }

        setTimeout(() => {
          if (towards === 'next') {
            this.isDone = true
            if (speedX) {
              this.rafTranslate(currentPage, offsetLeft, -pageWidth, callback, nextPage)
            } else {
              this.translate(currentPage, -pageWidth, speed, callback)
              if (nextPage) {
                this.translate(nextPage, 0, speed)
              }
            }
          } else if (towards === 'prev') {
            this.isDone = true
            if (speedX) {
              this.rafTranslate(currentPage, offsetLeft, pageWidth, callback, prevPage)
            } else {
              this.translate(currentPage, pageWidth, speed, callback)
              if (prevPage) {
                this.translate(prevPage, 0, speed)
              }
            }
          } else {
            this.isDone = false
            this.translate(currentPage, 0, speed, callback)
            if (typeof offsetLeft !== 'undefined') {
              if (prevPage && offsetLeft > 0) {
                this.translate(prevPage, pageWidth * -1, speed)
              }
              if (nextPage && offsetLeft < 0) {
                this.translate(nextPage, pageWidth, speed)
              }
            } else {
              if (prevPage) {
                this.translate(prevPage, pageWidth * -1, speed)
              }
              if (nextPage) {
                this.translate(nextPage, pageWidth, speed)
              }
            }
          }
        }, 10)
      },
      next() {
        this.doAnimate('next')
      },
      prev() {
        this.doAnimate('prev')
      },
      /**
       * 触发开发
       */
      doOnTouchStart(event) {
        let element = this.$el
        let dragState = this.dragState
        let touch = event.touches[0]

        dragState.startTime = new Date()
        dragState.startLeft = touch.pageX
        dragState.startTop = touch.pageY
        dragState.startTopAbsolute = touch.clientY

        dragState.pageWidth = element.offsetWidth
        dragState.pageHeight = element.offsetHeight

        let prevPage = this.$children[this.index - 1]
        let dragPage = this.$children[this.index]
        let nextPage = this.$children[this.index + 1]

        if (this.loop && this.pages.length > 1) {
          if (!prevPage) {
            prevPage = this.$children[this.$children.length - 1]
          }
          if (!nextPage) {
            nextPage = this.$children[0]
          }
        }

        dragState.prevPage = prevPage ? prevPage.$el : null
        dragState.dragPage = dragPage ? dragPage.$el : null
        dragState.nextPage = nextPage ? nextPage.$el : null

        if (dragState.prevPage) {
          dragState.prevPage.style.display = 'block'
        }

        if (dragState.nextPage) {
          dragState.nextPage.style.display = 'block'
        }
      },
      /**
       * 触发移动
       */
      doOnTouchMove(event) {
        let dragState = this.dragState
        let touch = event.touches[0]

        dragState.speedX = touch.pageX - dragState.currentLeft
        dragState.currentLeft = touch.pageX
        dragState.currentTop = touch.pageY
        dragState.currentTopAbsolute = touch.clientY

        let offsetLeft = dragState.currentLeft - dragState.startLeft
        let offsetTop = dragState.currentTopAbsolute - dragState.startTopAbsolute

        let distanceX = Math.abs(offsetLeft)
        let distanceY = Math.abs(offsetTop)
        if (distanceX < 5 || (distanceX >= 5 && distanceY >= 1.73 * distanceX)) {
          this.userScrolling = true
          return
        } else {
          this.userScrolling = false
          event.preventDefault()
        }
        offsetLeft = Math.min(Math.max(-dragState.pageWidth + 1, offsetLeft), dragState.pageWidth - 1)

        let towards = offsetLeft < 0 ? 'next' : 'prev'

        if (dragState.prevPage && towards === 'prev') {
          this.translate(dragState.prevPage, offsetLeft - dragState.pageWidth)
        }
        this.translate(dragState.dragPage, offsetLeft)
        if (dragState.nextPage && towards === 'next') {
          this.translate(dragState.nextPage, offsetLeft + dragState.pageWidth)
        }
      },
      /**
       * 触发结束
       */
      doOnTouchEnd() {
        const dragState = this.dragState
        const dragDuration = new Date() - dragState.startTime
        let towards = null
        let offsetLeft = dragState.currentLeft - dragState.startLeft
        let offsetTop = dragState.currentTop - dragState.startTop
        let pageWidth = dragState.pageWidth
        let index = this.index
        let pageCount = this.pages.length

        if (dragDuration < 300) {
          let fireTap = Math.abs(offsetLeft) < 5 && Math.abs(offsetTop) < 5
          if (isNaN(offsetLeft) || isNaN(offsetTop)) {
            fireTap = true
          }
          if (fireTap) {
            this.$children[this.index].$emit('tap')
          }
        }

        if (dragDuration < 300 && dragState.currentLeft === undefined) return

        if (dragDuration < 300 || Math.abs(offsetLeft) > pageWidth / 2) {
          towards = offsetLeft < 0 ? 'next' : 'prev'
        }

        if (!this.loop) {
          if ((index === 0 && towards === 'prev') || (index === pageCount - 1 && towards === 'next')) {
            towards = null
          }
        }

        if (this.$children.length < 2) {
          towards = null
        }
        this.doAnimate(towards, {
          offsetLeft: offsetLeft,
          pageWidth: dragState.pageWidth,
          prevPage: dragState.prevPage,
          currentPage: dragState.dragPage,
          nextPage: dragState.nextPage,
          speedX: dragState.speedX
        })
        this.dragState = {}
      },
      initTimer() {
        if (this.autoInterval > 0 && !this.timer) {
          this.timer = setInterval(() => {
            if (!this.loop && (this.index >= this.pages.length - 1)) {
              return this.clearTimer()
            }
            if (!this.dragging && !this.animating) {
              this.next()
            }
          }, this.autoInterval)
        }
      },
    },
    created() {
      this.index = this.defaultIndex
    },
    mounted() {
      this.initTimer()
      this.initPages()
      const $el = this.$el
      $el.addEventListener('touchstart', (event) => {
        event.preventDefault()
        event.stopPropagation()
        if (this.animating) return
        this.dragging = true
        this.userScrolling = false
        this.doOnTouchStart(event)
      })

      $el.addEventListener('touchmove', (event) => {
        if (!this.dragging) return
        if (this.timer) this.clearTimer()
        this.doOnTouchMove(event)
      })

      $el.addEventListener('touchend', (event) => {
        if (this.userScrolling) {
          this.dragging = false
          this.dragState = {}
          return
        }
        if (!this.dragging) return
        this.initTimer()
        this.doOnTouchEnd(event)
        this.dragging = false
      })
    },
    destroyed() {
      if (this.timer) {
        this.clearTimer()
      }
    },
  }
</script>