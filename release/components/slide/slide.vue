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
    name: 'ml-layout',
    props: {
      fixTop: {
        type: Boolean,
        default: false
      },
      fixBottom: {
        type: Boolean,
        default: true
      }
    }
  }
</script>