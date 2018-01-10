<template>
  <div class="ml-tab">
    <slot></slot>
  </div>
</template>
<script type="text/babel">
  import { addClass, removeClass, animationFrame } from './../../utils/ml-utils'

  export default {
    name: 'tab',
    props: {
      value: {
        type: Number,
        default: 0,
      },
      speed: {
        type: Number,
        default: 300,
      },
      defaultIndex: {
        type: Number,
        default: 0,
      },
    },
    watch: {
      /**
       * 监听value变化
       */
      value() {
        if (this.value !== this.index) this.changeIndex()
      },
      /**
       * 监听内部index变化
       */
      index() {
        if (this.index !== this.value) this.$emit('input', this.index)
      }
    },
    data() {
      return {
        pages: [], // 存储子元素
        index: this.value, // 当前index索引
        animating: false, // 是否动画中
        sliding: false, // 是否滑动中
        isScroll: false, // 是否滚动
        dragObject: {}, // 储存拖拽drag信息
      }
    },
    methods: {
      /**
       * 执行tab切换
       */
      changeIndex() {
        if (this.animating) {
          this.$emit('input', this.index)
          return
        }
        const currentPage = this.pages[this.index]
        const newPage = this.pages[this.value]
        const $elWidth = this.$el.offsetWidth

        const callback = () => {
          newPage.style.display = ''
          removeClass(currentPage, 'tab-active')
          addClass(newPage, 'tab-active')
          this.index = this.value
        }
        if (this.value > this.index) {
          newPage.style.webkitTransform = `translate3d(${$elWidth}px,0,0)`
          newPage.style.display = 'block'
          this.translate(currentPage, -$elWidth, 300, callback)
          this.translate(newPage, 0, 300)
        } else {
          newPage.style.webkitTransform = `translate3d(-${$elWidth}px,0,0)`
          newPage.style.display = 'block'
          this.translate(currentPage, $elWidth, 300, callback)
          this.translate(newPage, 0, 300)
        }
      },
      /**
       * 初始化子组件
       */
      initPages() {
        const children = this.$children
        const pages = []
        this.index = Math.abs(this.index) < children.length ? this.index : 0
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
        let ALPHA = 0.88
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
            removeClass(currentPage, 'tab-active')
            addClass(pages[newIndex], 'tab-active')
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
            this.translate(prevPage, $elWidth * -1, speed)
          } else {
            this.translate(nextPage, $elWidth, speed)
          }
        }
      },
      /**
       * 触发开发
       */
      touchStart(e) {
        if (this.pages.length < 2 || this.animating) return
        const dragObject = this.dragObject
        const touch = e.touches ? e.touches[0] : e

        dragObject.startTime = new Date() // 触发时间
        dragObject.startLeft = touch.pageX // 开始left值
        dragObject.startTop = touch.pageY // 开始Top值

        dragObject.$elWidth = this.$el.offsetWidth
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
        if (!dragObject.startLeft) return
        const touch = e.touches ? e.touches[0] : e
        dragObject.distanceX = touch.pageX - dragObject.currentLeft
        dragObject.currentLeft = touch.pageX
        let offsetLeft = dragObject.currentLeft - dragObject.startLeft
        if (!this.sliding && Math.abs(offsetLeft) < 5) return
        e.preventDefault()
        this.sliding = true
        offsetLeft = Math.min(Math.max(-dragObject.$elWidth + 1, offsetLeft), dragObject.$elWidth - 1)
        this.translate(dragObject.prevPage, offsetLeft - dragObject.$elWidth)
        this.translate(dragObject.dragPage, offsetLeft)
        this.translate(dragObject.nextPage, offsetLeft + dragObject.$elWidth)
      },
      /**
       * 触发结束
       */
      touchEnd(e) {
        const dragObject = this.dragObject
        if (!dragObject.startLeft || this.pages.length < 2) return
        const touch = e.touches ? e.touches[0] : e
        const dragDuration = new Date() - dragObject.startTime // 间隔时长
        let towards = null
        let offsetLeft = dragObject.currentLeft - dragObject.startLeft
        const $elWidth = dragObject.$elWidth
        if (dragDuration < 300 && !offsetLeft) return
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
      this.$el.parentNode.style.position = 'relative'
      this.initPages()
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
  }
</script>