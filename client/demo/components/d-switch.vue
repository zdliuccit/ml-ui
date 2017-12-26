<template>
  <div class="dd-body">
    <d-head :back="true" title="Switch"></d-head>
    <div class="dd-warp">
      <div class="warp-ctt">
        <div class="dd-label">默认{{switchValue}}</div>
        <ml-switch v-model="switchValue"></ml-switch>
        <div class="dd-label">slot插槽 {{switchValue1}}</div>
        <ml-switch v-model="switchValue1">
          <div slot="left">ON</div>
          <div slot="right">OFF</div>
        </ml-switch>
        <div class="dd-label">
          <ml-switch v-model="switchValue1">
            <div slot="left">开</div>
            <div slot="right">关</div>
          </ml-switch>
        </div>
        <div class="dd-label">disabled</div>
        <ml-switch v-model="switchValue2" :disabled="true"></ml-switch>
        <ml-switch v-model="switchValue3" :disabled="true"></ml-switch>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        switchValue: true,
        switchValue1: false,
        switchValue2: true,
        switchValue3: false,
      }
    },
    methods: {}
  }
</script>