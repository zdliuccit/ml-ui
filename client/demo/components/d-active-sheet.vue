<template>
  <div class="dd-body">
    <d-head :back="true" title="ActiveSheet 活动表"></d-head>
    <div class="dd-warp">
      <div class="warp-content">
        <button class="dd-btn ml-border" @click="doClick()">打开活动表</button>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        dataList: 20,
        paging: false,
      }
    },
    methods: {
      doClick() {
        this.$activeSheet()
      }
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
</style>