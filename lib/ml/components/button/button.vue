<template>
  <button @click="handleClick" class="ml-button ml-border" :disabled="disabled"
          :class="[
            `ml-button-${type||'default'}`,
            {
            'ml-button-disabled': disabled,
            [`ml-button-${size}`]: size
          }]">
    <div class="inline-block">
      <slot name="icon"></slot>
    </div>
    <div class="inline-block">
      <slot></slot>
    </div>
  </button>
</template>
<script type="text/babel">
  export default {
    name: 'button',
    props: {
      disabled: Boolean,
      type: String,
      size: String,
    },
    methods: {
      /**
       * click 的触发函数，用于将事件抛出到外部处理
       * @method handleClick
       * @param {Object} evt 事件对象
       */
      handleClick(event) {
        this.$emit('click', event)
      },
    },
    mounted() {
      this.$el.addEventListener('touchstart', () => {
      })
    }
  }
</script>