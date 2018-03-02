<template>
  <div class="ml-pull-layout">
    <div class="ml-pull" ref="elWrap" :class="{'pull-drag':!animating}"
         :style="{ 'transform': 'translate3d(0, ' + translate + 'px, 0)' }">
      <div v-if="pullDown" class="ml-pull-down" :class="{'satisfy-down':downLoad}" ref="elPullDown">
        <div class="inline-block ml-pd-icon" v-show="!satisfy">
          <ml-icon icon="pull-up"></ml-icon>
        </div>
        <div class="inline-block ml-pd-load " v-show="satisfy">
          <ml-loading :width="16" :height="16" :value="true"></ml-loading>
        </div>
        <span class="inline-block">{{satisfy ? '正在刷新...' : '下拉刷新'}}</span>
      </div>
      <div class="ml-pull-wrapper" ref="elContent">
        <slot></slot>
      </div>
      <div v-if="pullUp" class="ml-pull-up" :class="{'satisfy-up':upLoad}" ref="elPullUp">
        <div class="inline-block ml-pd-icon" v-show="!satisfy">
          <ml-icon icon="pull-up"></ml-icon>
        </div>
        <div class="inline-block ml-pd-load" v-show="satisfy">
          <ml-loading :width="16" :height="16" :value="true"></ml-loading>
        </div>
        <span class="inline-block">{{satisfy ? '正在加载...' : '上拉刷新'}}</span>
      </div>
    </div>
    <div class="ml-back-top" v-if="showTop" v-show="isTop" @click="backTop">
      <i class="ml-icon iconfont icon-up"></i>
      <div>顶部</div>
    </div>
  </div>
</template>
<script type="text/babel">
  import { throttle, backToTop, animationFrame } from './../../utils/ml-utils'

  export default {
    name: 'ml-pull',
    props: {
      pullUp: {
        type: Boolean,
        default: true,
      },
      pullDown: {
        type: Boolean,
        default: true,
      },
      distance: {
        type: Number,
        default: 50,
      },
      loading: Function,
      refresh: Function,
      value: {
        type: Boolean,
        default: true,
      },
      showTop: {
        type: Boolean,
        default: true,
      }
    },
    watch: {
      /**
       * 监听
       */
      value() {
        if (this.value && this.$refs.elWrap.offsetHeight >= this.$refs.elContent.scrollHeight) {
          this.$emit('input', false)
        }
      },
    },
    data() {
      return {
        dragObject: {},
        upLoad: false,
        downLoad: false,
        elWrap: null,
        elContent: null,
        satisfy: false,
        isTop: false,
        animating: false,
        translate: 0,
      }
    },
    methods: {
      /**
       * 执行加载事件
       */
      doLoading() {
        new Promise((resolve, reject) => {
          if (this.loading && this.upLoad) {
            this.loading(resolve, reject)
          } else if (this.downLoad && this.refresh) {
            this.refresh(resolve, reject)
          } else {
            resolve()
          }
        }).then(() => {
          this.translate = 0
          this.upLoad = this.downLoad = this.satisfy = false
        })
      },
      /**
       * 触发开发
       */
      touchStart(e) {
        if (this.animating || this.satisfy) return
        const touch = e.touches ? e.touches[0] : e
        const dragObject = this.dragObject
        dragObject.startTop = touch.pageY
        dragObject.scrollTop = this.elContent.scrollTop
        dragObject.diff = this.elContent.scrollHeight - this.elWrap.offsetHeight
        this.downLoad = this.upLoad = false
      },
      /**
       * 触发移动
       */
      touchMove(e) {
        const dragObject = this.dragObject
        if (!dragObject.startTop) return
        const touch = e.touches ? e.touches[0] : e
        const pageY = touch.pageY
        const maxY = pageY - dragObject.startTop
        if (!this.animating && Math.abs(maxY) < 5) return
        if (!dragObject.dire) dragObject.dire = maxY > 0 ? 'down' : 'up'
        const translate = this.translate
        if ((dragObject.dire === 'down' && translate < 0) || (dragObject.dire === 'up' && translate > 0)) return
        if ((dragObject.dire === 'down' && dragObject.scrollTop === 0 && this.pullDown) ||
          (dragObject.dire === 'up' && dragObject.scrollTop === dragObject.diff && this.pullUp && this.value)) {
          e.preventDefault()
          let than = Math.abs(translate) > 70 ? 3 : 2
          this.animating = true
          let offsetTop = pageY - (dragObject.currentTop || dragObject.startTop)
          if ((dragObject.dire === 'down' && offsetTop < 0) || (dragObject.dire === 'up' && offsetTop > 0)) than = than === 3 ? 2 : 1.5
          dragObject.currentTop = pageY
          let currentTop = Math.round(translate + offsetTop / than)
          if ((dragObject.dire === 'down' && currentTop < 0) || (dragObject.dire === 'up' && currentTop > 0)) currentTop = 0
          this.downLoad = currentTop > 0 && currentTop >= this.distance
          this.upLoad = currentTop < 0 && currentTop <= -this.distance
          this.translate = currentTop
        }
      },
      /**
       * 触发结束
       */
      touchEnd() {
        this.animating = false
        if (!this.dragObject.startTop) return
        let offsetH = 0
        this.satisfy = this.downLoad || this.upLoad
        if (this.downLoad) offsetH = this.$refs.elPullDown.offsetHeight
        if (this.upLoad) offsetH = -this.$refs.elPullUp.offsetHeight
        this.translate = offsetH
        if (offsetH !== 0) this.doLoading()
        this.dragObject = {}
      },
      /**
       * 计算是否到底部
       */
      countDom() {
        this.isTop = this.$refs.elContent.scrollTop > 50
      },
      /**
       * 回到顶部
       */
      backTop() {
        backToTop(animationFrame, this.$refs.elContent, this.$refs.elContent.scrollTop)
      },
    },
    mounted() {
      this.$el.parentNode.style.position = 'relative'
      this.$refs.elContent.addEventListener('scroll', throttle(this.countDom, 20, 30), true)
      this.elWrap = this.$refs.elWrap
      this.elContent = this.$refs.elContent
      if (!this.pullUp && !this.pullDown) return
      this.elWrap.addEventListener('touchstart', (e) => {
        this.touchStart(e)
      })
      this.elWrap.addEventListener('touchmove', (e) => {
        this.touchMove(e)
      })
      this.elWrap.addEventListener('touchend', (e) => {
        this.touchEnd(e)
      })
    },
  }
</script>