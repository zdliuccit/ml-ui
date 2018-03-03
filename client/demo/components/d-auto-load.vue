<template>
  <div class="dd-body">
    <d-head :back="true" title="AutoLoad 底部自动加载"></d-head>
    <div class="dd-warp">
      <ml-auto-load :loading="doLoad" v-model="paging">
        <ul class="test-ul ml-border">
          <li class="ml-border" v-for="ii in dataList" :key="ii">{{ii}}</li>
          <li class="ml-border">paging: {{paging}}</li>
        </ul>
      </ml-auto-load>
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
          if (this.dataList === 50) this.paging = false
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
