<template>
  <div class="ml-model dg-mask-layer" v-show="visible" :style="{ 'z-index':currentIndex||zIndex }">
    <template v-if="transition=='middle'">
      <transition name="mml-middle">
        <div class="mml-com mml-middle" v-show="value">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-if="transition=='top'">
      <transition name="mml-top">
        <div class="mml-com mml-top" v-show="value">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-if="transition=='right'">
      <transition name="mml-right">
        <div class="mml-com mml-right" v-show="value">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-if="transition=='bottom'">
      <transition name="mml-bottom">
        <div class="mml-com mml-bottom" v-show="value">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-if="transition=='left'">
      <transition name="mml-left">
        <div class="mml-com mml-left" v-show="value">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-if="['middle','top','left','right','bottom'].indexOf(transition)==-1">
      <slot></slot>
    </template>
    <div class="ml-mask-bg" :class="{maskClass,'ml-mask-clarity':!mask}" v-show="visible"
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
        default: false,
      },
      transition: {
        type: String,
        default: 'middle', // middle、top、right、bottom、left
      },
      speed: {
        type: Number,
        default: 200,
      }
    },
    watch: {
      /**
       *监听v-model值变化
       */
      value() {
        if (!this.value) {
          this.doClose()
        } else {
          this.visible = true
        }
      }
    },
    data() {
      return {
        zIndex: 10001,
        visible: this.value,
      }
    },
    methods: {
      /**
       * 关闭事件
       */
      doClose() {
        setTimeout(() => {
          this.visible = false
          this.$emit('on-close')
        }, this.speed)
      },
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