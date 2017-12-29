<template>
  <div class="ml-model dg-mask-layer" v-show="value" :style="{ 'z-index':currentIndex||zIndex }">
    <slot></slot>
    <div class="ml-mask-bg" :class="{maskClass,'ml-mask-clarity':!mask}" v-show="value"
         @click="doClickMask"></div>
  </div>
</template>
<script type="text/babel">
  import maskMixin from './../../mixins/mask-mixins'

  export default {
    name: 'ml-model',
    mixins: [maskMixin],
    props: {
      value: {
        type: Boolean,
        default: false
      },
      mask: {
        type: Boolean,
        default: true
      },
      maskClass: String,
      prevent: {
        type: Boolean,
        default: true,
      },
      onClose: {
        type: Function,
        default: () => {
        }
      }
    },
    watch: {
      /**
       *监听v-model值变化
       */
      value() {
        if (!this.value) {
          this.onClose()
        }
      }
    },
    data() {
      return {
        zIndex: 10001,
      }
    },
    methods: {
      /**
       * 遮罩层click事件
       */
      doClickMask() {
        if (this.prevent) this.$emit('input', false)
      },
    },
    mounted() {
      document.body.appendChild(this.$el)
    },
  }
</script>