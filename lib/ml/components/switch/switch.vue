<template>
  <div class="ml-switch inline-block" :class="{'ml-switch-check':currentValue,'switch-disabled':disabled}"
       @click="doClick">
    <div class="ml-switch-circle"></div>
    <div class="ml-switch-left" ref="switchLeft">
      <slot name="left"></slot>
    </div>
    <div class="ml-switch-right" ref="switchFight">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script type="text/babel">
  import { COMPONENT_PREFIX } from '../../constants/app';
  export default {
    name: `${COMPONENT_PREFIX}switch`,
    props: {
      value: Boolean,
      disabled: Boolean,
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
      doClick() {
        if (!this.disabled) this.currentValue = !this.currentValue
      }
    }
  }
</script>