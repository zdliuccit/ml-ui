<template>
  <div class="ml-slide">
    <slot name="top"></slot>
    <div class="ml-layout-warp">
      <slot></slot>
    </div>
    <slot name="bottom"></slot>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'ml-slide',
    props: {
      speed: {
        type: Number,
        default: 300
      },
      autoInterval: {
        type: Number,
        default: 3000
      },
      defaultIndex: {
        type: Number,
        default: 0
      },
    }
  }
</script>