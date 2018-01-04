<template>
  <div class="ml-model dg-mask-layer" v-show="value" :style="{ 'z-index':currentIndex||zIndex }">
    <template v-if="transition">
      <transition name="ml-model">
        <div class="ml-model-transition" v-show="value">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-if="!transition">
      <slot></slot>
    </template>
    <div class="ml-mask-bg" :class="{maskClass,'ml-mask-clarity':!mask}" v-show="value"
         @click="doClickMask"></div>
  </div>
</template>
<script type="text/babel">
  import maskMixin from './../../mixins/mask-mixins'

  export default {
    name: 'model',
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
        },
      },
      transition: {
        type: Boolean,
        default: true,
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
        if (!this.prevent) this.$emit('input', false)
      },
    },
    mounted() {
      const fragment = document.createDocumentFragment()
      fragment.appendChild(this.$el)
      document.body.appendChild(fragment)
    },
  }
</script>