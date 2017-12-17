<template>
  <div class="dd-body">
    <d-head :back="true" title="Message"></d-head>
    <div class="dd-warp">
      <div class="warp-content">
        <button class="dd-btn ml-border" @click="doClick('top')">Message显示在头部</button>
        <button class="dd-btn ml-border" @click="doClick('middle')">Message显示在中间</button>
        <button class="dd-btn ml-border" @click="doClick1()">Message1s消失</button>
        <button class="dd-btn ml-border" @click="doClick('bottom')">Message显示在尾部</button>
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