<template>
  <div class="dd-body">
    <d-head :back="true" title="Model"></d-head>
    <div class="dd-warp">
      <div class="warp-content">
        <button class="dd-btn ml-border" @click="doClick">打开弹窗1</button>
        <ml-model v-model="show" :onClose="doClose" :prevent="false">
          <transition name="ml-scale">
            <div class="test-cc" v-show="show">
              <button class="dd-btn ml-border" @click="doClick11">打开alert提示框</button>
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
        show: false
      }
    },
    methods: {
      doClick() {
        this.show = !this.show
      },
      doClose() {
        this.log('关闭了')
      },
      /**
       * 提示
       */
      doClick11() {
        this.$popup.alert({
          message: '这是alert',
          mask: false,
          onConfirm: () => {
            this.$message.success({ message: '这是alert' })
          },
        })
      },
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .test-cc {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 10%;
    height: 300px;
    padding: 20px;
    transform: translate(0, -50%);
    background-color: #fff;
    transition: opacity .2s ease-out, transform .2s ease-out;
  }

  .ml-scale-enter {
    opacity: 0;
    transform: translate(0, -50%) scale(0.7);
  }

  .ml-scale-leave-active {
    opacity: 0;
    transform: translate(0, -50%) scale(0.9);
  }

</style>