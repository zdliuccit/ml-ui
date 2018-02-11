<template>
  <div class="ml-model dg-mask-layer" v-show="visible" :style="{ 'z-index':currentIndex|| 1001 }">
    <template v-if="transition=='middle'">
      <transition name="dl-middle">
        <div class="dl-com dl-middle" v-show="value">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-if="transition=='top'">
      <transition name="dl-top">
        <div class="dl-com dl-top" v-show="value">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-if="transition=='right'">
      <transition name="dl-right">
        <div class="dl-com dl-right" v-show="value">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-if="transition=='bottom'">
      <transition name="dl-bottom">
        <div class="dl-com dl-bottom" v-show="value">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-if="transition=='left'">
      <transition name="dl-left">
        <div class="dl-com dl-left" v-show="value">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-if="['middle','top','left','right','bottom'].indexOf(transition)==-1">
      <slot></slot>
    </template>
    <transition name="dl-opy">
      <div class="ml-mask-bg" :class="[maskClass,{'ml-mask-clarity':!mask}]" v-show="value"
           @click="doClickMask"></div>
    </transition>
  </div>
</template>
<script type="text/babel">
  import maskMixin from './../../mixins/mask-mixins'

  export default {
    name: 'ml-model',
    mixins: [maskMixin],
    props: {
      value: Boolean,
      mask: {
        type: Boolean,
        default: true
      },
      maskClass: String,
      prevent: Boolean,
      transition: {
        type: String,
        default: 'middle', // middle、top、right、bottom、left
      },
      speed: {
        type: Number,
        default: 300,
      },
      through: {
        type: Boolean,
        default: true
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
        setTimeout(() => {
          this.finish = this.value
        }, this.speed)
      }
    },
    data() {
      return {
        visible: this.value,
        finish: false,
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
        if (this.finish && !this.prevent) this.$emit('input', false)
      },
    },
    mounted() {
      this.through && this.$el.addEventListener('touchmove', (e) => {
        e.preventDefault()
      })
      const fragment = document.createDocumentFragment()
      fragment.appendChild(this.$el)
      document.body.appendChild(fragment)
    },
  }
</script>