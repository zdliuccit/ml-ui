<template>
  <div class="ml-radio">
    <slot></slot>
  </div>
</template>
<script type="text/babel">
  import { COMPONENT_PREFIX } from '../../constants/app';
  export default {
    name: `${COMPONENT_PREFIX}radio`,
    props: {
      value: [String, Boolean, Number],
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
        this.currentValue = value
      }
    }
  }
</script>
