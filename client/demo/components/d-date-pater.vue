<template>
  <div class="dd-body">
    <d-head :back="true" title="Checkbox"></d-head>
    <div class="dd-warp">
      <div class="warp-ctt">
        <div class="dd-label">String类型值: {{checkboxValue}}</div>
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
    methods: {}
  }
</script>