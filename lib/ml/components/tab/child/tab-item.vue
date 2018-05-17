<template>
  <div class="ml-tab-item">
    <slot></slot>
  </div>
</template>
<script type="text/babel">
  import { COMPONENT_PREFIX } from '../../../constants/app';
  export default {
    name: `${COMPONENT_PREFIX}tab-item`,
  }
</script>