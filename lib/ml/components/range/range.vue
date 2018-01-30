<template>
  <div class="ml-range">
    <slot name="left"></slot>
    <div class="ml-range-warp" ref="rangWarp">
      <div class="ml-rang-line"></div>
      <div class="ml-rang-bg"></div>
      <div class="ml-rang-circle" ref="mlRang" :style="`left:${rangLeft}%;`"></div>
    </div>
    <slot name="right"></slot>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'ml-range',
    props: {
      value: Number,
      min: {
        type: Number,
        default: 0,
      },
      max: {
        type: Number,
        default: 100,
      },
      step: Number,
      height: Number,
      disabled: Boolean,
    },
    data() {
      return {
        rangLeft: 0,
        dragObject: {},
        than: 100 / (this.max - this.min),
      }
    },
    methods: {
      /**
       * 触发开发
       */
      touchStart(e) {
        const dragObject = this.dragObject
        const touch = e.touches ? e.touches[0] : e
        dragObject.startLeft = touch.pageX
        dragObject.width = this.$refs.rangWarp.offsetWidth
        dragObject.left = this.rangLeft
      },
      calculateValue() {
        this.$emit('input', this.min + Math.round(this.rangLeft / this.than))
      },
      /**
       * 触发移动
       */
      touchMove(e) {
        const dragObject = this.dragObject
        const touch = e.touches ? e.touches[0] : e
        const step = Math.abs(this.step || 1)
        const diff = Math.floor((touch.pageX - dragObject.startLeft) / dragObject.width * 100 / step / this.than)
        let left = dragObject.left + diff * step * this.than
        if (left > 100) left = 100
        if (left < 0) left = 0
        this.rangLeft = left
        this.calculateValue()
      },
    },
    mounted() {
      const $el = this.$refs.mlRang
      $el.addEventListener('touchstart', (e) => {
        this.touchStart(e)
      })
      $el.addEventListener('touchmove', (e) => {
        e.preventDefault()
        this.touchMove(e)
      })
      $el.addEventListener('touchend', () => {
        this.dragObject = {}
      })
    },
  }
</script>