<template>
  <div class="dd-body">
    <d-head :back="true" title="Left-slip"></d-head>
    <div class="dd-warp">
      <ul class="slip-ul ml-border">
        <li class=" ml-border" v-for="(ii,$index) in list" :key="`slip-${ii}`">
          <ml-left-slip>
            <div class="ctn-word">左滑出现删除 {{ii}}</div>
            <div slot="right" class="btn-del" @click="doClick($index)">删除</div>
          </ml-left-slip>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        list: [1, 2, 3, 4, 5, 6],
      }
    },
    methods: {
      doClick($index) {
        this.list.splice($index, 1)
        this.$message.success({ message: '成功删除了' })
      },
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .slip-ul {
    border-top-color: #ccc;
    li {
      height: 60px;
      line-height: 60px;
      border-bottom-color: #ccc;
      text-align: center;
      .ctn-word {
        height: 100%;
      }
      .btn-del {
        background-color: red;
        color: #fff;
        width: 100px;
        height: 100%;
      }
    }
  }


</style>