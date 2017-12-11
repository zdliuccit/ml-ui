<template>
  <div class="demo-top">
    <a class="demo-back" @click="goBack" v-if="back" href="javascript:;">
      <ml-icon icon="back"></ml-icon>
    </a>
    <div class="demo-top-title">{{title}}</div>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'd-top',
    props: {
      title: {
        type: String,
        default: '实例管理',
      },
      back: {
        type: Boolean,
        default: false,
      }
    },
    methods: {
      /**
       * 返回上一步
       */
      goBack() {
        this.$router.push('/demo/index')
      }
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .demo-top {
    padding: 20px;
    position: relative;
    line-height: 40px;
    .demo-back {
      position: absolute;
      top: 20px;
      left: 30px;
    }
    .demo-top-title {
      font-size: 44px;
      text-align: center;
    }
  }
</style>