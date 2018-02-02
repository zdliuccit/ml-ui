<template>
  <div class="ml-i-view" :style="{ 'z-index':currentIndex|| 1001 }">
    <span class="ii-test">{{zoom}}  {{mLeft}} {{$refs.mlIImg && $refs.mlIImg.scrollLeft}}</span>
    <div class="ml-i-img" ref="mlIImg">
      <img :style="{width:`${imgWidth?imgWidth*zoom:''}px`,
      'margin-top':`${isTouch?-mTop:0}%`,
      'margin-left':`${isTouch?-mLeft:0}%`}" @load="imgLoad"
           @error="imgError(imgObject)"
           :class="{'ml-ii-top':iiTop,'ml-ii-left':iiLeft}" :src="imgObject.url"
           v-show="!loading"/>
      <div v-show="loading">正在加载....</div>
    </div>
  </div>
</template>
<script type="text/babel">
  import maskMixin from './../../mixins/mask-mixins'

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
        zoom: 0.99,
        compress: null, // 压缩比
        elWidth: null, // 外层宽度
        elHeight: null, // 外层高度
        imgWidth: null, // 当前图片宽度
        imgHeight: null, // 当前图片高度
        iiTop: false,
        iiLeft: false,
        mTop: 0,
        mLeft: 0,
        isTouch: false,
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
       * 触发开发
       */
      touchStart(e) {
        const touch1 = e.touches[0]
        const touch2 = e.touches[1]
        const diffX = touch1.pageX - touch2.pageX
        const diffY = touch1.pageY - touch2.pageY
        this.starLine = Math.pow((diffX * diffX + diffY * diffY), 0.5)
        this.dragObject.zoom = this.zoom
        this.iiTop = false
        this.iiLeft = false
      },
      /**
       * 触发移动
       */
      touchMove(e) {
        e.preventDefault()
        const touch1 = e.touches[0]
        const touch2 = e.touches[1]
        const diffX = touch1.pageX - touch2.pageX
        const diffY = touch1.pageY - touch2.pageY
        const line = Math.pow((diffX * diffX + diffY * diffY), 0.5) - this.starLine
        let zoom = this.dragObject.zoom + (line / 2 / 75)
        /*eslint-disable*/
        if (zoom < 1) zoom = 1 - (1 - zoom ) * 0.1
        if (zoom > this.compress) zoom = this.compress + (zoom - 3) * 0.1
        this.zoom = zoom
      },
      /**
       * 初始化事件
       * @param {Object} $el 当前DOM
       */
      init($el) {
        this.elWidth = $el.offsetWidth
        this.elHeight = $el.offsetHeight
        $el.addEventListener('touchstart', (e) => {
          const len = e.touches.length
          this.dragObject.startTime = new Date()
          if (len === 2) this.touchStart(e)
          if (!this.isTouch) this.isTouch = len > 1
        })
        $el.addEventListener('touchmove', (e) => {
          this.isTouch = true
          if (e.touches.length === 2) this.touchMove(e)
        })
        $el.addEventListener('touchend', () => {
          if (!this.isTouch && (new Date() - this.dragObject.startTime) < 300) {
            this.log('click')
          } else {
            const $el = this.$refs.mlIImg
            let pageX = this.imgWidth * this.zoom - this.elWidth
            let pageY = this.imgHeight * this.zoom - this.elHeight
            this.mTop = 0
            this.mLeft = 0
            if (pageX > 0) {
              this.iiLeft = true
              let xx = pageX / 2
              console.log('mLeft1', xx)
              if (this.mLeft !== 0) xx = this.mLeft * this.imgWidth
              this.mLeft = xx / this.imgWidth / 2
              console.log('mLeft2', xx)
              this.$nextTick(() => {
                $el.scrollLeft = xx
              })
            }
            if (pageY > 0) {
              this.iiTop = true
              let yy = pageY / 2
              if (this.mTop !== 0) yy = this.mTop * this.imgHeight
              this.mTop = yy / this.imgHeight
              this.$nextTick(() => {
                $el.scrollTop = yy
              })
            }
            this.isTouch = false
            if (this.zoom > this.compress) this.zoom = this.compress
            if (this.zoom < 1) this.zoom = 0.99
            this.dragObject = {}
            this.starLine = 0
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