<template>
  <div class="dd-body">
    <d-head :back="true" title="Tab"></d-head>
    <div class="dd-warp">
      <ml-tab>
        <ml-tab-nav>选项1</ml-tab-nav>
        <ml-tab-nav>选项2</ml-tab-nav>
        <template slot="item">
          <ml-tab-item>123123</ml-tab-item>
        </template>
      </ml-tab>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        tabJson: []
      }
    },
    methods: {}
  }
</script>