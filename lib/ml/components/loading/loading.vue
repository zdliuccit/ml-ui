<template>
  <div class="ml-loading" v-show="value" :style="`width:${width}px;height:${height}px`">
    <div class="spinner-one" v-if="type=='one'"></div>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'loading',
    props: {
      value: {
        type: Boolean,
        default: false
      },
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