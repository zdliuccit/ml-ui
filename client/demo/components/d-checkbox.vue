<template>
  <div class="dd-body">
    <d-head :back="true" title="Checkbox"></d-head>
    <div class="dd-warp">
      <div class="warp-ctt">
        <div class="dd-label">String类型值: {{checkboxValue}}</div>
        <ml-checkbox v-model="checkboxValue">
          <ml-checkbox-item value="11">多选1南京</ml-checkbox-item>
          <ml-checkbox-item value="22">多选2杭州</ml-checkbox-item>
          <ml-checkbox-item value="33">多选3上海</ml-checkbox-item>
          <ml-checkbox-item value="44">多选4广州</ml-checkbox-item>
          <ml-checkbox-item value="55">多选5深圳</ml-checkbox-item>
          <ml-checkbox-item value="66">多选6北京</ml-checkbox-item>
        </ml-checkbox>
        <div class="dd-label">Array类型值: {{checkboxValue1}}</div>
        <ml-checkbox v-model="checkboxValue1">
          <ml-checkbox-item :inline="true" :value="11">多选1南京</ml-checkbox-item>
          <ml-checkbox-item :inline="true" :value="22">多选2杭州</ml-checkbox-item>
          <ml-checkbox-item :inline="true" :value="33">多选3上海</ml-checkbox-item>
          <ml-checkbox-item :inline="true" :value="44">多选4广州</ml-checkbox-item>
          <ml-checkbox-item :inline="true" :value="55">多选5深圳</ml-checkbox-item>
          <ml-checkbox-item :inline="true" :value="66">多选6北京</ml-checkbox-item>
        </ml-checkbox>
        <div class="dd-label">禁止选中: {{checkboxValue2}}</div>
        <ml-checkbox v-model="checkboxValue2">
          <ml-checkbox-item :inline="true" :value="11">多选1南京</ml-checkbox-item>
          <ml-checkbox-item :inline="true" :disabled="true" :value="22">多选2杭州</ml-checkbox-item>
          <ml-checkbox-item :inline="true" :disabled="true" :value="33">多选3上海</ml-checkbox-item>
          <ml-checkbox-item :inline="true" :value="44">多选4广州</ml-checkbox-item>
          <ml-checkbox-item :inline="true" :value="55">多选5深圳</ml-checkbox-item>
          <ml-checkbox-item :inline="true" :value="66">多选6北京</ml-checkbox-item>
        </ml-checkbox>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        checkboxValue: '22',
        checkboxValue1: [33, 44],
        checkboxValue2: [33, 44],
      }
    },
    methods: {}
  }
</script>