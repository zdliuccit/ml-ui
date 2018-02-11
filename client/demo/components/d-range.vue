<template>
  <div class="dd-body">
    <d-head :back="true" title="Range"></d-head>
    <div class="dd-warp">
      <div class="dd-range">
        <ml-range v-model="value"></ml-range>
        <div class="range-label">默认 value:{{value}}</div>
      </div>
      <div class="dd-range">
        <ml-range v-model="value1"></ml-range>
        <div class="range-label">预设值 value:{{value1}}</div>
      </div>
      <div class="dd-range">
        <ml-range v-model="value2" :min="10" :max="60">
          <div class="pr6" slot="left">10</div>
          <div class="pf6" slot="right">60</div>
        </ml-range>
        <div class="range-label">左右slot、区间[10,60] value:{{value2}}</div>
      </div>
      <div class="dd-range">
        <ml-range v-model="value3" :step="10"></ml-range>
        <div class="range-label">自定义步长step=10 value:{{value3}}</div>
      </div>
      <div class="dd-range">
        <ml-range v-model="value4" :disabled="true"></ml-range>
        <div class="range-label">禁用 value:{{value4}}</div>
      </div>
      <div class="dd-range">
        <ml-range v-model="value5" :height="8"></ml-range>
        <div class="range-label">线宽 height=8 value:{{value5}}</div>
      </div>
      <div class="dd-range">
        <ml-range v-model="value6" :min="12" :max="30" @on-change="doChange">
          <div class="pr6" slot="left">12</div>
          <div class="pf6" slot="right">30</div>
        </ml-range>
        <div class="range-label" :style="`font-size:${value6}px`">场景：字体大小{{value6}}</div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        value: 0,
        value1: 89,
        value2: 35,
        value3: 30,
        value4: 44,
        value5: 20,
        value6: 14,
      }
    },
    methods: {
      doChange(val) {
        this.log(val)
      }
    }
  }
</script>