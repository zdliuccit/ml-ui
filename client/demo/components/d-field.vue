<template>
  <div class="dd-body">
    <d-head :back="true" title="Field"></d-head>
    <div class="dd-warp">
      <ml-field v-model="field.text"></ml-field>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        field: {
          text: '',
        },
      }
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped></style>