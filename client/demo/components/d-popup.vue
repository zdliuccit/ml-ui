<template>
  <div class="dd-body">
    <d-head :back="true" title="Popup"></d-head>
    <div class="dd-warp">
      <div class="warp-content">
        <button class="dd-btn ml-border" @click="doClick()">打开alert提示框</button>
        <button class="dd-btn ml-border" @click="doClick1()">打开confirm提示框</button>
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
      /**
       * 提示
       */
      doClick() {
        this.$popup.alert({
          message: '这是alert',
          prevent: true,
          onConfirm: () => {
            this.$message.success({ message: '这是alert' })
          },
        })
      },
      /**
       * 提示
       */
      doClick1() {
        this.$popup.confirm({
          message: '这是confirm',
          onConfirm: () => {
            this.$message.success({ message: 'confirm确定了' })
          },
          onClose: () => {
            this.$message.warning({ message: 'confirm取消了' })
          }
        })
      },
    }
  }
</script>