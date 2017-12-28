<template>
  <div class="ml-model" v-if="value">
    <transition name="ml-scale">
      <div class="ml-model"></div>
    </transition>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'ml-model',
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      document.body.appendChild(this.$el)
    },
    data() {
      return {
        visible: false,
      }
    },
    destroyed() {
      document.body.removeChild(this.$el)
    },
  }
</script>