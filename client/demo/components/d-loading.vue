<template>
  <div class="dd-body">
    <d-head :back="true" title="Loading"></d-head>
    <div class="dd-warp">
      <div class="dd-load">
        <ml-loading v-model="loading"></ml-loading>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        loading: true,
      }
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .dd-load {
    height: 160px;
    position: relative;
  }
</style>