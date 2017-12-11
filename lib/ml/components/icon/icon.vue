<template>
  <i class="ml-icon iconfont" :class="`icon-${icon}`"></i>
</template>
<script type="text/babel">
  export default {
    props: {
      icon: String
    },
    name: 'icon',
  }
</script>