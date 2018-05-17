<template>
  <i class="ml-icon iconfont" :class="`icon-${icon}`"></i>
</template>
<script type="text/babel">
  import { COMPONENT_PREFIX } from '../../constants/app';
  export default {
    name: `${COMPONENT_PREFIX}icon`,
    props: {
      icon: String
    },
  }
</script>