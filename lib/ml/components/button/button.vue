<template>
  <button class="ml-button" @click="handleClick">
    测试
  </button>
</template>
<script>
  export default {
    name: 'button',
    props: {
      type: String,
      size: String,
      disabled: Boolean,
      icon: String,
      loading: Boolean,
      autofocus: Boolean,
      nativeType: {
        type: String,
        default: 'button',
      },
    },
    methods: {
      /**
       * click 的触发函数，用于将事件抛出到外部处理
       * @method handleClick
       * @param {Object} evt 事件对象
       */
      handleClick(evt) {
        this.$emit('click', evt)
      },
    },
  }
</script>
