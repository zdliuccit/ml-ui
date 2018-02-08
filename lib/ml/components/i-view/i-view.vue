<template>
  <transition name="ii-view">
    <div class="ml-i-view" :style="{ 'z-index':currentIndex|| 1001 }" v-show="value">
      <div class="ml-i-img" ref="mlIImg">
        <img :style="{width:`${imgWidth*zoom}px`,'margin-top':`${mTop}px`,'margin-left':`${mLeft}px`}"
             @load="imgLoad" @error="loading = 3" :src="url"
             :class="{'ii-scale':!isTouch&&!this.animating}"
             v-show="loading==1"/>
        <div class="ii-text" v-show="loading==2">正在加载...</div>
        <div class="ii-text" v-show="loading==3">图片出错了!</div>
      </div>
    </div>
  </transition>
</template>
<script type="text/babel">
  import maskMixin from './../../mixins/mask-mixins'
  import { animationFrame } from './../../utils/ml-utils'

  export default {
    name: 'ml-i-view',
    mixins: [maskMixin],
    props: {
      value: Boolean,
      url: String,
      scale: Number,
    },
    data() {
      return {
        loading: 2, // 1成功 2正在加载 3error失败
        dragObject: {},
        starLine: 0, // 初始俩个点第1次距离
        zoom: 1, // 放缩比
        compress: null, // 最大压缩比
        elWidth: null, // 外层宽度
        elHeight: null, // 外层高度
        imgWidth: null, // 当前图片宽度
        imgHeight: null, // 当前图片高度
        mTop: 0,  // margin-top 值
        mLeft: 0, // margin-left 值
        isTouch: false, // 是否touch
        scrolling: false, // 是否放缩
        animating: false, // 是否动画中
        isTwoClick: false,  // 是否双击
        startTime: null, // 第一次时间
        timeFunc: null, // 定时器
      }
    },
    methods: {
      /**
       * 图片加载成功事件
       */
      imgLoad(e) {
        const compress = e.target.width / this.elWidth
        const scale = this.scale > 3 ? this.scale : 3
        this.imgWidth = compress > 1 ? this.elWidth : e.target.width
        this.imgHeight = compress > 1 ? e.target.height / compress : e.target.height
        this.compress = compress > scale ? compress : scale
        this.loading = 1
      },
      /**
       * 继续执行一段距离滑行
       * @param {Number} top 将要到达的top值
       * @param {Number} left 将要到达的left值
       * @param {Number} oldX  动画执行前left值
       * @param {Number} oldY 动画执行前top值
       */
      continueTranslate(top, left, oldX, oldY) {
        this.animating = true
        const xx = left - oldX
        const yy = top - oldY
        let diffX = 0
        let diffY = 0
        let ALPHA = 0.88
        const animationLoop = () => {
          ALPHA *= 0.95
          const resultX = Math.abs(diffX - xx) < 1
          const resultY = Math.abs(diffY - yy) < 1
          if (resultX && resultY) {
            this.animating = false
            this.mLeft = left
            this.mTop = top
          } else {
            diffX = diffX * ALPHA + (1 - ALPHA) * xx
            diffY = diffY * ALPHA + (1 - ALPHA) * yy
            if (!resultX) this.mLeft = oldX + diffX
            if (!resultY) this.mTop = oldY + diffY
            animationFrame(animationLoop)
          }
        }
        animationLoop()
      },
      /**
       * 触发开发
       */
      touchStart(e) {
        const touch = e.touches[0]
        if (e.touches.length > 1) {
          // 放缩初始俩点的距离
          const touch2 = e.touches[1]
          const diffX = touch.pageX - touch2.pageX
          const diffY = touch.pageY - touch2.pageY
          this.starLine = Math.pow((diffX * diffX + diffY * diffY), 0.5)
        }
        // 缓存初始的margin-left和margin-top的比值
        this.dragObject.topThan = this.mTop !== 0 ? this.mTop / this.reckonHeight(this.zoom) : 0
        this.dragObject.leftThan = this.mLeft !== 0 ? this.mLeft / this.reckonWidth(this.zoom) : 0
        this.dragObject.startLeft = touch.pageX
        this.dragObject.startTop = touch.pageY
        this.dragObject.zoom = this.zoom
      },
      /**
       * 触发移动
       */
      touchMove(e) {
        if (this.scrolling) return
        const dragObject = this.dragObject
        const touch = e.touches[0]
        let xx = touch.pageX - (dragObject.oldLeft || dragObject.startLeft)
        let yy = touch.pageY - (dragObject.oldTop || dragObject.startTop)
        dragObject.oldLeft = touch.pageX
        dragObject.oldTop = touch.pageY
        if (this.imgWidth * dragObject.zoom > this.elWidth) {
          if (Math.abs(this.mLeft) > this.reckonWidth(dragObject.zoom)) xx *= 0.3
          this.mLeft += xx
        }
        if (this.imgHeight * dragObject.zoom > this.elHeight) {
          if (Math.abs(this.mTop) > this.reckonHeight(dragObject.zoom)) yy *= 0.3
          this.mTop += yy
        }
      },
      /**
       * 解发结束
       * @param {Number} dragDuration 间隔
       */
      touchEnd(dragDuration) {
        const dragObject = this.dragObject
        const durationMile = Math.round(1024 / dragDuration * 6)
        let left = this.mLeft
        if (this.imgWidth * dragObject.zoom > this.elWidth) {
          const xx = (dragObject.oldLeft - dragObject.startLeft) || 1
          left += durationMile * (xx / Math.abs(xx))
          const cha = this.reckonWidth(dragObject.zoom)
          if (left > cha) left = cha
          if (left < -cha) left = -cha
        }
        let top = this.mTop
        if (this.imgHeight * dragObject.zoom > this.elHeight) {
          const yy = (dragObject.oldTop - dragObject.startTop) || 1
          top += durationMile * (yy / Math.abs(yy))
          const cha = this.reckonHeight(dragObject.zoom)
          if (top > cha) top = cha
          if (top < -cha) top = -cha
        }
        this.continueTranslate(top, left, this.mLeft, this.mTop)
      },
      /**
       * 放缩移动
       */
      touchTwoMove(e) {
        this.scrolling = true
        const dragObject = this.dragObject
        const touch = e.touches[0]
        const touch2 = e.touches[1]
        const diffX = touch.pageX - touch2.pageX
        const diffY = touch.pageY - touch2.pageY
        const line = Math.pow((diffX * diffX + diffY * diffY), 0.5) - this.starLine
        let zoom = Number(dragObject.zoom + (line / 2 / 75))
        if (zoom < 1) zoom = 1 - (1 - zoom) * 0.15
        if (zoom > this.compress) zoom = this.compress + (zoom - 3) * 0.2
        this.zoom = zoom
        this.mLeft = dragObject.leftThan * this.reckonWidth(zoom)
        this.mTop = dragObject.topThan * this.reckonHeight(zoom)
      },
      /**
       * 返回 超出 宽度1/2
       * @param {Number} zoom 当前比
       * @return {Number} 返回值
       */
      reckonWidth(zoom) {
        const width = (zoom * this.imgWidth - this.elWidth) / 2 || 0
        return width > 0 ? width : 0
      },
      /**
       * 返回 超出 高度1/2
       * @param{Number} zoom 当前比
       * @return {Number} height 值
       */
      reckonHeight(zoom) {
        const height = (zoom * this.imgHeight - this.elHeight) / 2 || 0
        return height > 0 ? height : 0
      },
      /**
       * 初始化事件
       * @param {Object} $el 当前DOM
       */
      init($el) {
        this.elWidth = document.documentElement.clientWidth
        this.elHeight = document.documentElement.clientHeight
        $el.addEventListener('touchstart', (e) => {
          if (this.animating) return
          // 记录点击时间和第二次点击的时差
          if (this.startTime) this.dragObject.duration = new Date() - this.startTime
          if (!this.startTime) this.startTime = new Date()
          if (this.dragObject.duration) this.startTime = null
          this.dragObject.startTime = new Date()
          this.touchStart(e)
          if (!this.isTouch) this.isTouch = e.touches.length > 1
        })
        $el.addEventListener('touchmove', (e) => {
          e.preventDefault()
          if (this.animating) return
          this.isTouch = true
          if (e.touches.length === 2) this.touchTwoMove(e)
          if (e.touches.length === 1) this.touchMove(e)
        })
        $el.addEventListener('touchend', (e) => {
          if (this.animating || e.touches.length > 0) return
          const dragObject = this.dragObject
          // 单次间隔时长
          const duration = new Date() - this.dragObject.startTime
          let zoom = this.zoom
          if (this.isTouch) {
            // 滑动事件
            clearTimeout(this.timeFunc)
            this.timeFunc = null
            // 滑动执行事件
            if (!this.scrolling) this.touchEnd(duration)
            // 放缩执行事件
            if (this.scrolling) {
              if (zoom > this.compress) zoom = this.compress
              if (zoom < 1) zoom = 1
              if (dragObject.leftThan) this.mLeft = dragObject.leftThan * this.reckonWidth(zoom)
              if (dragObject.topThan) this.mTop = dragObject.topThan * this.reckonHeight(zoom)
            }
            this.isTouch = false
            this.zoom = zoom
            this.scrolling = false
            this.starLine = 0
            this.dragObject = {}
          } else {
            // 俩次点击时长<250双击
            if (dragObject.duration && dragObject.duration < 250) {
              // 双击事件
              clearTimeout(this.timeFunc)
              this.timeFunc = null
              this.zoom = zoom > 1 ? 1 : 2
              this.mLeft = this.mTop = 0
              this.dragObject = {}
            } else {
              // 单击事件
              if (this.timeFunc) return
              this.timeFunc = setTimeout(() => {
                this.timeFunc = null
                this.dragObject = {}
                this.startTime = null
                this.zoom = 1
                this.mLeft = this.mTop = 0
                this.$emit('input', false)
              }, 250)
            }
          }
        })
      }
    },
    mounted() {
      const $el = this.$el
      this.init($el)
      const fragment = document.createDocumentFragment()
      fragment.appendChild($el)
      document.body.appendChild(fragment)
    },
  }
</script>