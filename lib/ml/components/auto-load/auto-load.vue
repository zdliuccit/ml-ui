<template>
  <div class="ml-auto-load">
    <div class="ml-auto-wrapper" ref="autoLoad">
      <div class="ml-auto-content" ref="autoContent">
        <slot></slot>
      </div>
      <div class="ml-auto-bottom" ref="autoBottom" v-if="value">
        <div class="inline-block auto-load-warp ">
          <ml-loading :width="16" :height="16" :value="true"></ml-loading>
        </div>
        <span class="inline-block">正在加载...</span>
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
    name: 'ml-auto-load',
    props: {
      loading: Function,
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
        this.$nextTick(() => {
          if (this.value && this.$refs.autoLoad.offsetHeight >= this.$refs.autoContent.offsetHeight) {
            this.$emit('input', false)
          }
        })
      },
    },
    data() {
      return {
        loadState: false,
        elContent: null,
        isTop: false,
      }
    },
    methods: {
      /**
       * 回到顶部
       */
      backTop() {
        backToTop(animationFrame, this.$refs.autoLoad, this.$refs.autoLoad.scrollTop)
      },
      /**
       * 执行加载事件
       */
      doLoading() {
        new Promise((resolve) => {
          if (this.loadState) this.loading(resolve)
        }).then(() => {
          this.loadState = false
          this.downLoad = false
        })
      },
      /**
       * 计算是否到底部
       */
      countDom() {
        const $el = this.$refs.autoLoad
        this.isTop = $el.scrollTop > 50
        if (this.loadState || !this.value) return
        const $bH = this.$refs.autoBottom.offsetHeight
        const $Ch = this.$refs.autoContent.offsetHeight
        const $diff = $Ch + $bH - $el.offsetHeight
        if ($diff - $el.scrollTop < $bH / 3) {
          this.loadState = true
          this.doLoading()
        }
      },
    },
    mounted() {
      this.$el.parentNode.style.position = 'relative'
      this.$refs.autoLoad.addEventListener('scroll', throttle(this.countDom, 20, 30), true)
    },
  }
</script>