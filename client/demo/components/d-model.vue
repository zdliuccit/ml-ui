<template>
  <div class="dd-body">
    <d-head :back="true" title="Model"></d-head>
    <div class="dd-warp">
      <div class="warp-content">
        <button class="dd-btn ml-border" @click="show1=true">打开弹窗(默认middle效果)</button>
        <ml-model v-model="show1" :onClose="doClose" :prevent="false">
          <div class="test-ww">默认middle效果</div>
        </ml-model>

        <button class="dd-btn ml-border" @click="show2=true">打开弹窗(top效果)</button>
        <ml-model v-model="show2" :onClose="doClose" :prevent="false" transition="top">
          <div class="test-ww">top效果</div>
        </ml-model>

        <button class="dd-btn ml-border" @click="show3=true">打开弹窗(right效果)</button>
        <ml-model v-model="show3" :onClose="doClose" :prevent="false" transition="right">
          <div class="test-ww">right效果</div>
        </ml-model>

        <button class="dd-btn ml-border" @click="show4=true">打开弹窗(bottom效果)</button>
        <ml-model v-model="show4" :onClose="doClose" :prevent="false" transition="bottom">
          <div class="test-ww">bottom效果</div>
        </ml-model>

        <button class="dd-btn ml-border" @click="show5=true">打开弹窗(left效果)</button>
        <ml-model v-model="show5" :onClose="doClose" :prevent="false" transition="left">
          <div class="test-ww">bottom效果</div>
        </ml-model>

        <button class="dd-btn ml-border" @click="doClick1">打开弹窗(自定义效果)</button>
        <ml-model v-model="custom" :onClose="doClose" :prevent="false" transition="test-cc">
          <transition name="dd-custom">
            <div class="test-cc" v-show="custom">
              自定义效果
            </div>
          </transition>
        </ml-model>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        custom: false,
      }
    },
    methods: {
      doClick1() {
        this.custom = !this.custom
      },
      doClose() {
        this.log('关闭了')
      },
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .test-ww {
    text-align: center;
    font-size: 16px;
    padding: 30px 20px;
  }

  .test-cc {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    height: 100px;
    line-height: 80px;
    text-align: center;
    font-size: 16px;
    padding: 10px;
    transform: translate3d(0, -50%, 0) rotate(0deg);
    background-color: #fff;
    transition: opacity .2s ease-out, transform .2s ease-out;
  }

  .dd-custom-enter, .dd-custom-leave-active {
    opacity: 0;
    transform: translate3d(0, 0, 0) rotate(25deg);
  }
</style>