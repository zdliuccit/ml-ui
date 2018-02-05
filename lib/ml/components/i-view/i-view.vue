<template>
  <div class="ml-i-view" :style="{ 'z-index':currentIndex|| 1001 }">
    <span class="ii-test">{{zoom}}</span>
    <div class="ml-i-img">
      <img ref="mlIImg" :style="{transform:`translate3d(-50%, -50%, 0) scale(${zoom})`,
      width:`${imgWidth}px`,
      'margin-top':`${mTop}px`,
      'margin-left':`${mLeft}px`}"
           @load="imgLoad"
           @error="imgError(imgObject)"
           :src="imgObject.url"
           :class="{'ii-scale':!isTouch}"
           v-show="!loading"/>
      <div v-show="loading">正在加载....</div>
    </div>
  </div>
</template>
<script type="text/babel">
  import maskMixin from './../../mixins/mask-mixins'
  import { animationFrame } from './../../utils/ml-utils'

  export default {
    name: 'ml-i-view',
    mixins: [maskMixin],
    props: {},
    data() {
      return {
        imgObject: {
          url: 'https://img-np.xkeshi.cn/dev/crm/d3/59/2ab0f61a73309bc4ee16c09e40fe.jpeg',
          url2: 'https://img-np.xkeshi.cn/dev/crm/c9/e0/25556d4b08a8c40b7aeb125ca5a3.png',
        },
        loading: false,
        dragObject: {},
        starLine: 0,
        zoom: 1,
        compress: null, // 压缩比
        elWidth: null, // 外层宽度
        elHeight: null, // 外层高度
        imgWidth: null, // 当前图片宽度
        imgHeight: null, // 当前图片高度
        mTop: 0,
        mLeft: 0,
        isTouch: false,
        scrolling: false,
        animating: false,
      }
    },
    methods: {
      /**
       * 图片加载成功事件
       */
      imgLoad(e) {
        const compress = e.target.width / this.elWidth
        this.imgWidth = compress > 1 ? this.elWidth : e.target.width
        this.imgHeight = compress > 1 ? e.target.height / compress : e.target.height
        this.compress = compress > 3 ? compress : 3
        this.loading = false
      },
      /**
       * 图片加载失败事件
       */
      imgError(obj) {
        this.loading = false
        obj.src = ''
      },
      /**
       * 继续动画
       */
      continueTranslate(top, left) {
        this.animating = true
        let ALPHA = 0.88
        const yy = top - this.mTop
        const xx = left - this.mLeft
        const oldX = this.mLeft
        const oldY = this.mTop
        let diffX = 0
        let diffY = 0
        const animationLoop = () => {
          ALPHA *= 0.98
          const resultX = Math.abs(diffX - xx) < 1
          const resultY = Math.abs(diffY - yy) < 1
          if (resultX && resultY) {
            this.mLeft = left
            this.mTop = top
            this.animating = false
          } else {
            diffX = diffX * ALPHA + (1 - ALPHA) * xx
            diffY = diffY * ALPHA + (1 - ALPHA) * yy
            if (resultX) this.mLeft = left
            if (resultY) this.mTop = top
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
        const touch1 = e.touches[0]
        if (e.touches.length > 1) {
          const touch2 = e.touches[1]
          const diffX = touch1.pageX - touch2.pageX
          const diffY = touch1.pageY - touch2.pageY
          this.starLine = Math.pow((diffX * diffX + diffY * diffY), 0.5)
          const width = (this.zoom * this.imgWidth - this.elWidth) / 2
          const height = (this.zoom * this.imgHeight - this.elHeight) / 2
          this.dragObject.topThan = this.mTop / (height > 0 ? height : 0)
          this.dragObject.leftThan = this.mLeft / (width > 0 ? width : 0)
        }
        this.dragObject.startLeft = touch1.pageX
        this.dragObject.startTop = touch1.pageY
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
          const cha = (this.imgWidth * dragObject.zoom - this.elWidth) / 2
          if (Math.abs(this.mLeft) > cha) xx *= 0.3
          this.mLeft += xx
        }
        if (this.imgHeight * dragObject.zoom > this.elHeight) {
          const cha = (this.imgHeight * dragObject.zoom - this.elHeight) / 2
          if (Math.abs(this.mTop) > cha) yy *= 0.3
          this.mTop += yy
        }
      },
      /**
       * 解发结束
       * @param {Number} dragDuration 间隔
       */
      touchEnd(dragDuration) {
        const dragObject = this.dragObject
        const durationMile = Math.round(800 / dragDuration * 10)
        let top = this.mTop
        let left = this.mLeft
        if (this.imgWidth * dragObject.zoom > this.elWidth) {
          const xx = (dragObject.oldLeft - dragObject.startLeft) || 1
          left += durationMile * (xx / Math.abs(xx))
          const cha = (this.imgWidth * dragObject.zoom - this.elWidth) / 2
          if (left > cha) left = cha
          if (left < -cha) left = -cha
        }
        if (this.imgHeight * dragObject.zoom > this.elHeight) {
          const yy = (dragObject.oldTop - dragObject.startTop) || 1
          top += durationMile * (yy / Math.abs(yy))
          const cha = (this.imgHeight * dragObject.zoom - this.elHeight) / 2
          if (top > cha) top = cha
          if (top < -cha) top = -cha
        }
        this.continueTranslate(top, left)
      },
      /**
       * 放缩移动
       */
      touchTwoMove(e) {
        this.scrolling = true
        const dragObject = this.dragObject
        const touch1 = e.touches[0]
        const touch2 = e.touches[1]
        const diffX = touch1.pageX - touch2.pageX
        const diffY = touch1.pageY - touch2.pageY
        const line = Math.pow((diffX * diffX + diffY * diffY), 0.5) - this.starLine
        let zoom = dragObject.zoom + (line / 2 / 75)
        /*eslint-disable*/
        if (zoom < 1) zoom = 1 - (1 - zoom ) * 0.1
        if (zoom > this.compress) zoom = this.compress + (zoom - 3) * 0.1
        this.zoom = zoom
        const width = (zoom * this.imgWidth - this.elWidth ) / 2
        const height = (zoom * this.imgHeight - this.elHeight ) / 2
        this.mLeft = dragObject.leftThan * (width > 0 ? width : 0)
        this.mTop = dragObject.leftThan * (height > 0 ? height : 0)
      },
      /**
       * 初始化事件
       * @param {Object} $el 当前DOM
       */
      init($el) {
        this.elWidth = $el.offsetWidth
        this.elHeight = $el.offsetHeight
        $el.addEventListener('touchstart', (e) => {
          if (this.animating) return
          this.animating = false
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
        $el.addEventListener('touchend', () => {
          if (this.animating) return
          const dragDuration = new Date() - this.dragObject.startTime // 间隔时长
          if (!this.isTouch && dragDuration < 300) {
            this.zoom = this.zoom > 1 ? 1 : 2
          } else {
            if (!this.scrolling) this.touchEnd(dragDuration)
            this.isTouch = false
            if (this.zoom > this.compress) this.zoom = this.compress
            if (this.zoom < 1) this.zoom = 1
            this.dragObject = {}
            this.starLine = 0
            this.scrolling = false
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