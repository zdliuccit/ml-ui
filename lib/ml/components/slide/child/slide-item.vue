<template>
  <div class="ml-slide-item">
    <slot></slot>
  </div>
</template>
<script type="text/babel">
  import { COMPONENT_PREFIX } from '../../../constants/app';
  export default {
    name: `${COMPONENT_PREFIX}slide-item`,
  }
</script>