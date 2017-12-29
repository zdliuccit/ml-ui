<template>
  <transition name="ml-opacity">
    <div class="ml-toast dg-mask-layer " v-show="visible" :class="[`place-${place}`,className]"
         :style="{ 'z-index':$index }">
      <span class="ml-toast-text">{{ message}}</span>
    </div>
  </transition>
</template>
<script type="text/babel">
  export default {
    name: 'toast',
    props: {
      message: {
        type: String,
        default: ''
      },
      className: {
        type: String,
        default: ''
      },
      place: {
        type: String,
        default: 'middle'
      },
      $index: Number,
    },
    data() {
      return {
        visible: false
      }
    },
  }
</script>