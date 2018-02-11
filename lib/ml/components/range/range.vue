<template>
  <div class="ml-range" :class="{'ml-range-disable':disabled}">
    <slot name="left"></slot>
    <div class="ml-range-warp" ref="rangWarp">
      <div class="ml-rang-line"
           :style="`height:${height}px;border-radius: ${height/2}px 0 0 ${height/2}px;width:${rangLeft}%;`"></div>
      <div class="ml-rang-bg" :style="`height:${height}px;border-radius: ${height/2}px;`"></div>
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
    watch: {
      /**
       * 监听
       */
      value() {
        if (this.value !== this.currentValue) this.init()
      }
    },
    data() {
      return {
        rangLeft: 0,
        dragObject: {},
        than: 100 / (this.max - this.min),
        currentValue: this.value,
      }
    },
    methods: {
      /**
       * 初始化
       */
      init() {
        this.currentValue = this.value
        this.rangLeft = Math.floor((this.value - this.min) * this.than)
      },
      /**
       * 触发开发
       */
      touchStart(e) {
        if (this.min >= this.max || this.disabled) return
        e.preventDefault()
        const dragObject = this.dragObject
        const touch = e.touches ? e.touches[0] : e
        dragObject.startLeft = touch.pageX
        dragObject.width = this.$refs.rangWarp.offsetWidth
        dragObject.left = this.rangLeft
        dragObject.step = Math.abs(this.step || 1)
      },
      /**
       * 触发移动
       */
      touchMove(e) {
        const dragObject = this.dragObject
        if (!dragObject.startLeft) return
        e.preventDefault()
        const touch = e.touches ? e.touches[0] : e
        const diff = Math.floor((touch.pageX - dragObject.startLeft) / dragObject.width * 100 / dragObject.step / this.than)
        let left = dragObject.left + diff * dragObject.step * this.than
        if (left > 100) left = 100
        if (left < 0) left = 0
        this.rangLeft = left
        this.currentValue = this.min + Math.round(left / this.than)
        if (this.currentValue !== this.value) {
          this.$emit('input', this.currentValue)
          this.$emit('on-change', this.currentValue)
        }
      },
    },
    mounted() {
      this.init()
      const $el = this.$refs.mlRang
      $el.addEventListener('touchstart', (e) => {
        this.touchStart(e)
      })
      $el.addEventListener('touchmove', (e) => {
        this.touchMove(e)
      })
      $el.addEventListener('touchend', () => {
        this.dragObject = {}
      })
    },
  }
</script>