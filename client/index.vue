<template>
  <div class="dd-layout">
    <div class="dd-layout-warp">
      <div class="dd-layout-top">
        <div class="ml-logo"></div>
        <div class="logo-word">组件</div>
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
<style lang="stylus" ref="stylesheet/stylus" scoped="">
  .ml-index {
    position: absolute;
    height: 464PX;
    top: 50%;
    margin-top: -162PX;
    left: 0;
    width: 100%;
  }

  .ml-index-btn {
    text-align: center;
    padding: 20PX;
    a {
      display: inline-block;
      vertical-align: middle;
      height: 50PX;
      border-radius: 25PX;
      width: 160PX;
      line-height: 50PX;
      text-align: center;
      font-size: 16PX;
      margin: 0 50PX;
      box-sizing: border-box;
      transition: all 0.3s;
    }
    a:hover {
      box-shadow: 0 0 15PX #999;
    }
    .to-comp {
      color: #fff;
      background-color: #409eff;
    }
    .to-git {
      border: 1PX solid #409eff;
    }
  }

  .ml-title {
    font-size: 18PX;
    line-height: 28PX;
    text-align: center;
    color: #888;
    margin: 10PX 0 5PX;
  }

  .gear-rolling {
    position: relative;
    height: 240PX;
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
    width: 180PX;
    height: 100%;
    text-align: center;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg)
  }

  .gear-rolling .loader-cogs {
    z-index: -2;
    margin-top: -90pt;
    margin-left: -50PX;
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
    -webkit-transform-origin: 50PX 50PX;
    transform-origin: 50PX 50PX;
    -webkit-animation: rotate 10s infinite linear;
    animation: rotate 10s infinite linear
  }

  .gear-rolling .large-part {
    position: absolute;
    width: 75pt;
    height: 75pt;
    border-radius: 10PX;
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
    top: 28PX;
    left: -24PX;
    width: 80PX;
    height: 80PX;
    -webkit-transform: rotate(16deg);
    transform: rotate(16deg);
    -webkit-transform-origin: 40PX 40PX;
    transform-origin: 40PX 40PX;
    -webkit-animation: rotate-in 10s .1s infinite reverse linear;
    animation: rotate-in 10s .1s infinite reverse linear
  }

  .gear-rolling .in-part {
    position: absolute;
    width: 80PX;
    height: 80PX;
    border-radius: 6PX;
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
    top: -65PX;
    left: 79PX;
    width: 60PX;
    height: 60PX;
    -webkit-transform: rotate(4deg);
    transform: rotate(4deg);
    -webkit-transform-origin: 30PX 30PX;
    transform-origin: 30PX 30PX;
    -webkit-animation: rotate-in 10.2s .4s infinite linear;
    animation: rotate-in 10.2s .4s infinite linear
  }

  .gear-rolling .small-part {
    position: absolute;
    width: 60PX;
    height: 60PX;
    border-radius: 5PX;
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
    margin-top: -25PX;
    margin-left: -25PX;
    width: 50PX;
    height: 50PX
  }

  .gear-rolling .in-hole {
    margin-top: -20PX;
    margin-left: -20PX;
    width: 40PX;
    height: 40PX
  }

  .gear-rolling .small-hole {
    margin-top: -15PX;
    margin-left: -15PX;
    width: 30PX;
    height: 30PX
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