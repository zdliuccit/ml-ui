<template>
  <router-view></router-view>
</template>
<script type="text/babel">
  export default {
    watch: {
      $route(to, from) {
        if (to.path !== from.path) {
          const layers = document.getElementsByClassName('dg-mask-layer')
          Array.from(layers).forEach(vv => {
            vv.parentNode.removeChild(vv)
          })
        }
      }
    },
  }
</script>