<template>
  <div class="ml-model dg-mask-layer" v-show="value" :style="{ 'z-index':zIndex }">
    <slot></slot>
  </div>
</template>
<script type="text/babel">
  import maskMixin from './../../mixins/mask-mixins'

  export default {
    name: 'ml-model',
    mixins: [maskMixin],
    props: {
      value: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        visible: false,
        zIndex: 10001,
      }
    },
    mounted() {
      document.body.appendChild(this.$el)
    },
  }
</script>