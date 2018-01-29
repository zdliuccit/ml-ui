<template>
  <div class="dd-body">
    <d-head :back="true" title="ActiveSheet 活动表"></d-head>
    <div class="dd-warp">
      <div class="warp-content">
        <button class="dd-btn ml-border" @click="doClick()">打开IOS主题活动表</button>
        <button class="dd-btn ml-border" @click="doClick('Android')">打开Android主题活动表</button>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        options: [
          { label: 'Active-sheet-1', value: '0001', },
          { label: 'Active-sheet-2', value: '0002', },
          { label: 'Active-sheet-3', value: '0003', },
          { label: 'Active-sheet-4', value: '0004', },
        ]
      }
    },
    methods: {
      doClick(mode) {
        this.$activeSheet({
          mode: mode,
          data: this.options,
          onSelect: obj => {
            this.$message.success({ message: `选择了${obj.label}` })
          },
          onCancel: () => {
            this.$message.warning({ message: '取消了' })
          }
        })
      },
    }
  }
</script>
