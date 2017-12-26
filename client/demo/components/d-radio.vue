<template>
  <div class="dd-body">
    <d-head :back="true" title="Radio"></d-head>
    <div class="dd-warp">
      <div class="warp-ctt">
        <div class="dd-label">单选value值:{{radioValue}}</div>
        <ml-radio v-model="radioValue">
          <ml-radio-item value="11">单选1南京</ml-radio-item>
          <ml-radio-item value="22">单选2杭州</ml-radio-item>
          <ml-radio-item value="33">单选3上海</ml-radio-item>
        </ml-radio>
        <div class="dd-label">禁止选中(行内)</div>
        <ml-radio v-model="radioValue">
          <ml-radio-item :inline="true" :disabled="true" value="11">单选1南京</ml-radio-item>
          <ml-radio-item :inline="true" :disabled="true" value="22">单选2杭州</ml-radio-item>
        </ml-radio>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        radioValue: '22',
      }
    },
    methods: {}
  }
</script>