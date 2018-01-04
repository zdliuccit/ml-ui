<template>
  <div class="dd-body">
    <d-head :back="true" title="Pull上拉加载下拉刷新"></d-head>
    <div class="dd-warp">
      <ml-pull :loading="doLoad" :refresh="doRefresh" v-model="paging">
        <ul class="test-ul ml-border">
          <li class="ml-border" v-for="ii in dataList">{{ii}}</li>
          <li class="ml-border">paging: {{paging}}</li>
        </ul>
      </ml-pull>
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
    mounted() {
      this.paging = true
    },
    methods: {
      doLoad(resolve) {
        setTimeout(() => {
          this.dataList += 10
          if (this.dataList >= 50) this.paging = false
          resolve()
        }, 1000)
      },
      doRefresh(resolve) {
        setTimeout(() => {
          this.dataList = 20
          resolve()
        }, 1000)
      }
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .test-ul {
    font-size: 20px;
    text-align: center;
    border-top-color: #eee;
    li {
      padding: 15px;
      border-bottom-color: #eee;
    }
  }
</style>