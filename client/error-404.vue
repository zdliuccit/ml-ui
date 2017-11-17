<template>
  <div class="error-404">
    <div class="error-404-img">
      <p class="error-title">哎呀，您访问的页面找不到啦！</p>
      <p class="error-links">
        <a href="javascript:;" @click="goBack()">返回上一页</a>
        <a class="index" href="javascript:;" @click="$router.push('/')">返回首页</a>
      </p>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    methods: {
      /**
       * 返回上一步
       */
      goBack() {
        history.go(-1)
      },
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped="">
  .error-404 {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    .error-404-img {
      position: absolute;
      width: 498px;
      height: 226px;
      top: 50%;
      left: 50%;
      text-align: center;
      margin: -113px 0 0 -249px;
      background: url("./assets/images/404.jpg") no-repeat;
    }
    .error-title {
      top: -50px;
      position: relative;
      color: #34daed;
      font-size: 20px;
    }
    .error-links {
      top: 260px;
      position: relative;
      font-size: 14px;
      a {
        color: #ea5d5d;
        margin: 0 25px;
      }
      .index {
        text-decoration: underline;
      }
    }
  }
</style>
