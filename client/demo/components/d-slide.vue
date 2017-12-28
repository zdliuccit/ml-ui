<template>
  <div class="dd-body">
    <d-head :back="true" title="Silde幻灯片"></d-head>
    <div class="dd-warp">
      <div class="slide-demo">
        <ml-slide :defaultIndex="1">
          <ml-slide-item>
            <div class="slide-dbg gbg1">第一页</div>
          </ml-slide-item>
          <ml-slide-item>
            <div class="slide-dbg gbg2">第二页</div>
          </ml-slide-item>
          <ml-slide-item>
            <div class="slide-dbg gbg3">第三页</div>
          </ml-slide-item>
          <ml-slide-item>
            <div class="slide-dbg gbg4">第四页</div>
          </ml-slide-item>
        </ml-slide>
      </div>
      <div class="slide-demo">
        <ml-slide :speed="1000" :autoInterval="5000" :showDots="false">
          <ml-slide-item>
            <div class="slide-dbg gbg1">第一页</div>
          </ml-slide-item>
          <ml-slide-item>
            <div class="slide-dbg gbg2">第二页</div>
          </ml-slide-item>
        </ml-slide>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {}
    },
    methods: {
      /**
       * 提示
       * @param {String} place 位置
       */
      doClick(place) {
        this.$toast({ message: `消息在${place}`, place: place })
      },
      /**
       * 提示
       */
      doClick1() {
        this.$toast({ message: '消息1s消失', duration: 1000 })
      },
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .slide-demo {
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
  }

  .slide-dbg {
    line-height: 200px;
    font-size: 20px;
    text-align: center;
    color: #fff;
  }

  .gbg1 {
    background-color: #00aeae;
  }

  .gbg2 {
    background-color: #ff77ff;
  }

  .gbg3 {
    background-color: #79ff79;
  }

  .gbg4 {
    background-color: #ff7575;
  }

</style>