<template>
  <i class="ml-icon iconfont" :class="`icon-${icon}`"></i>
</template>
<script type="text/babel">
  export default {
    name: 'ml-icon',
    props: {
      icon: String
    },
  }
</script>