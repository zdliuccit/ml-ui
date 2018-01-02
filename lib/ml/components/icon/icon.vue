<template>
  <i class="ml-icon iconfont" :class="`icon-${icon}`"></i>
</template>
<script type="text/babel">
  export default {
    name: 'icon',
    props: {
      icon: String
    },
  }
</script>