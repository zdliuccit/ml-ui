<template>
  <header class="ml-header" :class="{'fix-header':fix}">
    <div class="ml-header-left">
      <slot name="left"></slot>
    </div>
    <h1 class="ml-header-title ellipsis">{{title}}</h1>
    <div class="ml-header-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>
<script type="text/babel">
  import { COMPONENT_PREFIX } from '../../constants/app';
  export default {
    name: `${COMPONENT_PREFIX}header`,
    props: {
      title: String,
      fix: Boolean,
    },
  }
</script>