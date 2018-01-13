<template>
  <div class="dd-body">
    <d-head :back="true" title="DatePater"></d-head>
    <div class="dd-warp">
      <div class="warp-ctt">
        <div class="dd-label">
          <ml-button @click="doClick">datePater</ml-button>
        </div>
        <ml-date-pater ref="datePater"></ml-date-pater>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        checkboxValue: '22',
      }
    },
    methods: {
      doClick() {
        this.$refs.datePater.doOpen()
      }
    }
  }
</script>