<template>
  <div class="ml-checkbox">
    <slot></slot>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'checkbox',
    props: {
      value: [String, Array],
    },
    watch: {
      /**
       * 监听
       * @param val
       */
      value(val) {
        this.currentValue = val
      },
      /**
       * 监听
       * @param val
       */
      currentValue(val) {
        this.$emit('input', val)
        this.$emit('on-change', val)
      }
    },
    data() {
      return {
        currentValue: this.value
      }
    },
    methods: {
      /**
       * 选中
       * @param value 值
       */
      setCurrentValue(value) {
        let ary = JSON.parse(JSON.stringify(this.currentValue))
        if (Object.prototype.toString.apply(this.currentValue) === '[object String]') {
          /*eslint-disable*/
          ary = ary && ary.split(',') || []
          /*eslint-disabled*/
        }
        const $index = ary.findIndex(vl => vl === value)
        if ($index > -1) {
          ary.splice($index, 1)
        } else {
          ary.push(value)
        }
        if (Object.prototype.toString.apply(this.currentValue) === '[object String]') {
          ary = ary.join(',')
        }
        this.currentValue = ary
      }
    }
  }
</script>
