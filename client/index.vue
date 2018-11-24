<template>
  <div class="dd-layout">
    <div class="dd-layout-warp">
      <div class="dd-layout-top">
        <div class="ml-logo"></div>
        <a class="ml-git-link" href="https://github.com/zdliuccit/ml-ui" target="_blank">
          <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16"
               width="32">
            <path fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </a>
      </div>
    </div>
    <div class="ml-index">
      <div class="gear-rolling">
        <div class="gear-loader">
          <div class="loader-cogs definitely">
            <div class="loader-cogs-large transform">
              <div class="large-part"></div>
              <div class="large-part"></div>
              <div class="large-part"></div>
              <div class="loader-hole large-hole"></div>
            </div>
            <div class="loader-cogs-in transform">
              <div class="in-part"></div>
              <div class="in-part"></div>
              <div class="in-part"></div>
              <div class="loader-hole in-hole"></div>
            </div>
            <div class="loader-cogs-small transform">
              <div class="small-part"></div>
              <div class="small-part"></div>
              <div class="small-part"></div>
              <div class="loader-hole small-hole"></div>
            </div>
          </div>
        </div>
      </div>
      <p class="ml-title">ml-ui，一套为开发者、设计师和产品经理准备的基于 Vue 2 的移动端组件库</p>
      <div class="ml-index-btn">
        <a href="javascript:;" @click="$router.push('/docs/installation')" class="to-comp">开始使用</a>
        <a href="https://github.com/zdliuccit/ml-ui" target="_blank" class="to-git">GitHub</a>
      </div>
      <div class="author-msg">
        <span>电子邮箱：<a href="mailto:zdliuccit@gmail.com">zdliuccit@gmail.com</a></span>
        <span>QQ：<a href="javascript:;">335758663 秋风</a></span>
      </div>
    </div>
    <div class="ml-record">
      <a target="_blank" href="http://www.miitbeian.gov.cn/">浙ICP备18050190号</a>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {}
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .ml-record {
    position: absolute;
    bottom: 12px;
    text-align: center;
    width: 100%;
    left 0;
    a {
      color: #666;
    }
  }

  .author-msg {
    font-size: 12px;
    color: #777;
    text-align: center;
    margin-top: -22px;
    word-break: break-all;
    z-index: 22;
    position: relative;
    span {
      margin: 0 6px;
    }
  }

  .ml-index {
    position: absolute;
    height: 464px;
    top: 50%;
    transform: translate3d(0, -50%, 0)
    left: 0;
    width: 100%;
  }

  .ml-index-btn {
    text-align: center;
    padding: 20px;
    a {
      display: inline-block;
      vertical-align: middle;
      height: 50px;
      border-radius: 25px;
      width: 160px;
      line-height: 50px;
      text-align: center;
      font-size: 16px;
      margin: 0 50px;
      box-sizing: border-box;
      transition: all 0.3s;
      margin-bottom: 15px;
    }
    a:hover {
      box-shadow: 0 0 15px #999;
    }
    .to-comp {
      color: #fff;
      background-color: #409eff;
    }
    .to-git {
      border: 1px solid #409eff;
    }
  }

  .ml-title {
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    color: #888;
    margin: 10px 0 5px;
    padding: 0 20px;
  }

  .gear-rolling {
    position: relative;
    height: 240px;
    z-index: -1;
  }

  .gear-rolling .definitely {
    position: absolute;
    top: 50%;
    left: 50%
  }

  .gear-rolling .gear-loader {
    position: relative;
    margin: 0 auto;
    width: 180px;
    height: 100%;
    text-align: center;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg)
  }

  .gear-rolling .loader-cogs {
    z-index: -2;
    margin-top: -90pt;
    margin-left: -50px;
    width: 75pt;
    height: 75pt
  }

  .gear-rolling .transform {
    transform: translateZ(0);
    webkit-transform: translateZ(0);
    -ms-transform: translateZ(0)
  }

  .gear-rolling .loader-cogs-large {
    position: relative;
    width: 75pt;
    height: 75pt;
    -webkit-transform-origin: 50px 50px;
    transform-origin: 50px 50px;
    -webkit-animation: rotate 10s infinite linear;
    animation: rotate 10s infinite linear
  }

  .gear-rolling .large-part {
    position: absolute;
    width: 75pt;
    height: 75pt;
    border-radius: 10px;
    background-color: #f96ac6
  }

  .gear-rolling .large-part:nth-of-type(1) {
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg)
  }

  .gear-rolling .large-part:nth-of-type(2) {
    -webkit-transform: rotate(60deg);
    transform: rotate(60deg)
  }

  .gear-rolling .large-part:nth-of-type(3) {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg)
  }

  .gear-rolling .loader-cogs-in {
    position: relative;
    top: 28px;
    left: -24px;
    width: 80px;
    height: 80px;
    -webkit-transform: rotate(16deg);
    transform: rotate(16deg);
    -webkit-transform-origin: 40px 40px;
    transform-origin: 40px 40px;
    -webkit-animation: rotate-in 10s .1s infinite reverse linear;
    animation: rotate-in 10s .1s infinite reverse linear
  }

  .gear-rolling .in-part {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 6px;
    background-color: #3960ff
  }

  .gear-rolling .in-part:nth-of-type(1) {
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg)
  }

  .gear-rolling .in-part:nth-of-type(2) {
    -webkit-transform: rotate(60deg);
    transform: rotate(60deg)
  }

  .gear-rolling .in-part:nth-of-type(3) {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg)
  }

  .gear-rolling .loader-cogs-small {
    position: relative;
    top: -65px;
    left: 79px;
    width: 60px;
    height: 60px;
    -webkit-transform: rotate(4deg);
    transform: rotate(4deg);
    -webkit-transform-origin: 30px 30px;
    transform-origin: 30px 30px;
    -webkit-animation: rotate-in 10.2s .4s infinite linear;
    animation: rotate-in 10.2s .4s infinite linear
  }

  .gear-rolling .small-part {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 5px;
    background-color: #ffae22
  }

  .gear-rolling .small-part:nth-of-type(1) {
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg)
  }

  .gear-rolling .small-part:nth-of-type(2) {
    -webkit-transform: rotate(60deg);
    transform: rotate(60deg)
  }

  .gear-rolling .small-part:nth-of-type(3) {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg)
  }

  .gear-rolling .loader-hole {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 100%;
    background-color: #fff
  }

  .gear-rolling .large-hole {
    margin-top: -25px;
    margin-left: -25px;
    width: 50px;
    height: 50px
  }

  .gear-rolling .in-hole {
    margin-top: -20px;
    margin-left: -20px;
    width: 40px;
    height: 40px
  }

  .gear-rolling .small-hole {
    margin-top: -15px;
    margin-left: -15px;
    width: 30px;
    height: 30px
  }

  @-webkit-keyframes rotate {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0)
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg)
    }
  }

  @keyframes rotate {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0)
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg)
    }
  }

  @-webkit-keyframes rotate-in {
    0% {
      -webkit-transform: rotate(16deg);
      transform: rotate(16deg)
    }
    to {
      -webkit-transform: rotate(376deg);
      transform: rotate(376deg)
    }
  }

  @keyframes rotate-in {
    0% {
      -webkit-transform: rotate(16deg);
      transform: rotate(16deg)
    }
    to {
      -webkit-transform: rotate(376deg);
      transform: rotate(376deg)
    }
  }

  @-webkit-keyframes rotate_right {
    0% {
      -webkit-transform: rotate(4deg);
      transform: rotate(4deg)
    }
    to {
      -webkit-transform: rotate(364deg);
      transform: rotate(364deg)
    }
  }

  @keyframes rotate_right {
    0% {
      -webkit-transform: rotate(4deg);
      transform: rotate(4deg)
    }
    to {
      -webkit-transform: rotate(364deg);
      transform: rotate(364deg)
    }
  }
</style>