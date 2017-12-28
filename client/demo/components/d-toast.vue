<template>
  <div class="dd-body">
    <d-head :back="true" title="Toast"></d-head>
    <div class="dd-warp">
      <div class="warp-content">
        <button class="dd-btn ml-border" @click="doClick('top')">Toast显示在头部</button>
        <button class="dd-btn ml-border" @click="doClick('middle')">Toast显示在中间</button>
        <button class="dd-btn ml-border" @click="doClick1()">Toast1s消失</button>
        <button class="dd-btn ml-border" @click="doClick('bottom')">Toast显示在尾部</button>
      </div>
    </div>
    <ml-model v-model="aa"></ml-model>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        aa: false,
      }
    },
    methods: {
      /**
       * 提示
       * @param {String} place 位置
       */
      doClick(place) {
        this.aa = !this.aa
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