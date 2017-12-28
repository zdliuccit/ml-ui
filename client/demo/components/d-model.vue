<template>
  <div class="dd-body">
    <d-head :back="true" title="Popup"></d-head>
    <div class="dd-warp">
      <div class="warp-content">
        <button class="dd-btn ml-border" @click="doClick">打开弹窗1</button>
        <ml-model v-model="show">
          <div>123123</div>
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
      }
    }
  }
</script>