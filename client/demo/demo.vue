<template>
  <div class="ml-demo">
    <d-head title="BaseComponents"></d-head>
    <ul class="ul-cpt">
      <li></li>
    </ul>
    <d-head title="JSComponents"></d-head>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {}
    },
    created() {
      this.$toast({})
    },
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>

  .ml-demo {
    font-size: 24px;
  }
</style>