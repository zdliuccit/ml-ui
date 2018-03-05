<template>
  <div class="ml-tab">
    <slot></slot>
  </div>
</template>
<script type="text/babel">
  import { addClass, removeClass, animationFrame } from './../../utils/ml-utils'

  export default {
    name: 'ml-tab',
    props: {
      value: {
        type: Number,
        default: 0,
      },
      speed: {
        type: Number,
        default: 300,
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
        clickIndex: null, // 外部TAB切换缓存index
        animating: false, // 是否动画中
        sliding: false, // 是否滑动中
        isScroll: false, // 是否滚动
        dragObject: {}, // 储存拖拽drag信息
        slipLeft: 0,
      }
    },
    methods: {
      /**
       * 执行tab切换
       */
      changeIndex() {
        if ((this.clickIndex && this.clickIndex !== this.value) || this.animating) {
          this.$emit('input', this.clickIndex)
          return
        }
        this.clickIndex = this.value
        const currentPage = this.pages[this.index]
        const newPage = this.pages[this.value]
        const $elWidth = this.$el.offsetWidth
        const than = (this.value - this.index) / Math.abs(this.value - this.index)
        newPage.style.webkitTransform = `translate3d(${than * $elWidth}px,0,0)`
        newPage.style.display = 'block'
        setTimeout(() => {
          this.setTranslate(currentPage, -than * $elWidth, 300)
          this.setTranslate(newPage, 0, 300, () => {
            newPage.style.display = ''
            removeClass(currentPage, 'tab-active')
            addClass(newPage, 'tab-active')
            this.index = this.clickIndex
            this.clickIndex = null
          })
        }, 0)
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
          if ($index === this.index) addClass(child.$el, 'tab-active')
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
          ALPHA *= (0.98)
          if (Math.abs(initOffset - offset) < 2) {
            this.log(Math.abs(initOffset - offset))
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
            $el.style.webkitTransition = ''
            $el.style.webkitTransform = ''
            callback && callback()
            this.animating = false
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
          this.setTranslate(prevPage, -$elWidth)
          nextPage.style.display = 'block'
          this.setTranslate(nextPage, $elWidth)
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
            this.setTranslate(prevPage, $elWidth * -1, speed)
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
        const dragObject = this.dragObject
        const touch = e.touches ? e.touches[0] : e
        dragObject.startTime = new Date()
        dragObject.startLeft = touch.pageX
        dragObject.startTop = touch.pageY
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
        const pageX = touch.pageX
        const maxX = Math.abs(pageX - dragObject.startLeft)
        if (!this.sliding && maxX < 5) return
        e.preventDefault()
        this.sliding = true
        const offsetLeft = pageX - (dragObject.currentLeft || dragObject.startLeft)
        dragObject.distanceX = pageX - dragObject.currentLeft
        dragObject.currentLeft = pageX
        dragObject.result = Math.abs(touch.pageY - dragObject.startTop) >= 1.73 * maxX
        if (dragObject.result) return
        this.slipLeft = this.slipLeft + offsetLeft
        this.setTranslate(dragObject.prevPage, this.slipLeft - dragObject.$elWidth)
        this.setTranslate(dragObject.dragPage, this.slipLeft)
        this.setTranslate(dragObject.nextPage, this.slipLeft + dragObject.$elWidth)
      },
      /**
       * 触发结束
       */
      touchEnd() {
        const dragObject = this.dragObject
        if (!dragObject.currentLeft || this.pages.length < 2) return
        let towards = null
        const offsetLeft = this.slipLeft
        const $elWidth = dragObject.$elWidth
        if (!dragObject.result && (new Date() - dragObject.startTime < 300 || Math.abs(offsetLeft) > $elWidth / 3)) {
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
        this.slipLeft = 0
        this.dragObject = {}
      },
    },
    mounted() {
      this.$el.parentNode.style.position = 'relative'
      this.initPages()
      this.$el.addEventListener('touchstart', (e) => {
        this.touchStart(e)
      })
      this.$el.addEventListener('touchmove', (e) => {
        this.touchMove(e)
      })
      this.$el.addEventListener('touchend', (e) => {
        this.touchEnd(e)
      })
    },
  }
</script>