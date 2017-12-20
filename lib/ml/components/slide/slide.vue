<template>
  <div class="ml-slide">
    <div class="ml-slide-items-wrap" ref="wrap">
      <slot></slot>
    </div>
    <div class="ml-slide-dots" v-show="showDots">
      <div class="ml-slide-dot" v-for="(page, $index) in pages" :class="{ 'is-active': $index === index }"></div>
    </div>
  </div>
</template>
<script type="text/babel">
  import touchMixin from './../../mixins/touch-mixin'
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
        pages: [],
        index: 0,
      }
    },
    methods: {
      /**
       * 初始化子组件
       */
      initPages() {
        const children = this.$children
        const pages = []
        this.log(children)
        children.forEach(child => {
          pages.push(child.$el)
          addClass(child.$el, 'test2')
        })
        this.pages = pages
      }
    },
    mounted() {
      this.initPages()
      touchMixin(this.$el, {
        callback: (num) => {
          removeClass(this.$children[1].$el, 'test1')
        }
      })
    },
  }
</script>