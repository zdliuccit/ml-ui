<template>
  <div class="ml-loading" v-show="value" :style="`width:${width}px;height:${height}px`">
    <div class="spinner-one" v-if="type=='one'"></div>
    <div class="spinner-two" v-if="type=='two'">
      <div class="sto-dv"><span></span></div>
      <div class="sto-dv"><span></span></div>
      <div class="sto-dv"><span></span></div>
    </div>
  </div>
</template>
<script type="text/babel">
  import { COMPONENT_PREFIX } from '../../constants/app';
  export default {
    name: `${COMPONENT_PREFIX}loading`,
    props: {
      value: Boolean,
      width: {
        type: Number,
        default: 60,
      },
      height: {
        type: Number,
        default: 60,
      },
      type: {
        type: String,
        default: 'one'
      }
    }
  }
</script>