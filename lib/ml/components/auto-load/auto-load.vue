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
  </div>
</template>
<script type="text/babel">
  import { throttle } from './../../utils/ml-utils'

  export default {
    name: 'auto-load',
    props: {
      loading: Function,
      value: {
        type: Boolean,
        default: true,
      }
    },
    watch: {
      /**
       * 监听
       */
      value() {
        if (this.value && this.$refs.autoLoad.offsetHeight >= this.$refs.autoContent.offsetHeight) {
          this.$emit('input', false)
        }
      },
    },
    data() {
      return {
        loadState: false,
        elContent: null,
      }
    },
    methods: {
      /**
       * 执行加载事件
       */
      doLoading() {
        new Promise((resolve, reject) => {
          if (this.loadState) {
            this.loading(resolve, reject)
          } else {
            resolve()
          }
        }).then(() => {
          this.loadState = false
          this.downLoad = false
        })
      },
      /**
       * 计算是否到底部
       */
      countDom() {
        if (this.loadState || !this.value) return
        const $el = this.$refs.autoLoad
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
      const $el = this.$refs.autoLoad
      $el.addEventListener('scroll', throttle(this.countDom, 30, 50), true)
    },
  }
</script>