<template>
  <transition name="ml-opacity">
    <div class="ml-toast dg-mask-layer " v-show="visible" :class="[`place-${place ||'middle'}`]"
         :style="{ 'z-index':$index }">
      <span class="ml-toast-text">{{message}}</span>
    </div>
  </transition>
</template>
<script type="text/babel">
  import { COMPONENT_PREFIX } from '../../constants/app';
  export default {
    name: `${COMPONENT_PREFIX}toast`,
    props: {
      message: String,
      place: String,
      $index: Number,
    },
    data() {
      return {
        visible: false
      }
    },
  }
</script>