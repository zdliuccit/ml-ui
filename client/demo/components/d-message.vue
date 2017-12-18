<template>
  <div class="dd-body">
    <d-head :back="true" title="Message"></d-head>
    <div class="dd-warp">
      <div class="warp-content">
        <button class="dd-btn ml-border" @click="doClick()">消息</button>
        <button class="dd-btn ml-border" @click="doClick1()">警告</button>
        <button class="dd-btn ml-border" @click="doClick2()">成功</button>
        <button class="dd-btn ml-border" @click="doClick3()">错误</button>
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
       */
      doClick() {
        this.$message({ message: '测试消息' })
      },
      /**
       * 提示
       */
      doClick1() {
        this.$message.warning({ message: '警告消息' })
      },
      /**
       * 提示
       */
      doClick2() {
        this.$message.success({ message: '成功消息' })
      },
      /**
       * 提示
       */
      doClick3() {
        this.$message.error({ message: '错误消息' })
      },
    }
  }
</script>