<template>
  <div class="dd-body">
    <d-head :back="true" title="Header"></d-head>
    <div class="dd-warp">
      <ml-header title="这里的标题太长会变..." class="demo-header">
        <div slot="left">
          <ml-icon icon="back"></ml-icon>
          <span>返回</span>
        </div>
        <div slot="right">
          <ml-icon icon="sigh"></ml-icon>
        </div>
      </ml-header>

      <ml-header title="仅左侧" class="demo-header">
        <div slot="left">
          <ml-icon icon="back"></ml-icon>
          <span class="inline-block">返回</span>
        </div>
      </ml-header>
      <ml-header title="仅右侧" class="demo-header">
        <div slot="right">
          <span class="inline-block">分享</span>
        </div>
      </ml-header>

      <ml-header title="仅图标" class="demo-header">
        <div slot="left">
          <ml-icon icon="back"></ml-icon>
        </div>
        <div slot="right">
          <ml-icon icon="sigh"></ml-icon>
        </div>
      </ml-header>
    </div>
  </div>
</template>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .demo-header {
    margin-bottom: 20px;
  }

</style>