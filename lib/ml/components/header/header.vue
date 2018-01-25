<template>
  <header class="ml-header">
    <div class="ml-header-left">
      <slot name="left"></slot>
    </div>
    <h1 class="ml-header-title ellipsis">{{title}}</h1>
    <div class="ml-header-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>
<script type="text/babel">
  export default {
    name: 'header',
    props: {
      title: String,
    },
  }
</script>