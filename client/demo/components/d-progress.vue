<template>
  <div class="dd-body">
    <d-head :back="true" title="Progress"></d-head>
    <div class="dd-warp">
      <div class="warp-content">
        <div class="pgs-demo">
          <ml-progress v-model="progress"></ml-progress>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        progress: 23,
      }
    },
    methods: {}
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .pgs-demo {
    height: 20px;
    padding: 0 20px;
  }
</style>