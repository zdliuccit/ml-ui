<template>
  <div class="dd-body">
    <d-head :back="true" title="Range"></d-head>
    <div class="dd-warp">
      <div class="warp-ctt">
        <ml-range v-model="value">
          <div style="padding-right: 5px;" slot="left">10</div>
          <div style="padding-left: 5px;" slot="right">60</div>
        </ml-range>
      </div>
      <div class="warp-ctt">{{value}}</div>
      <div class="warp-ctt">
        <ml-range v-model="value1" :step="5" :min="10">
          <div style="padding-right: 5px;" slot="left">10</div>
        </ml-range>
      </div>
      <div class="warp-ctt">{{value1}}</div>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        value: 0,
        value1: 0,
      }
    }
  }
</script>