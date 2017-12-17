<template>
  <div class="dd-body">
    <d-head :back="true" title="Layout"></d-head>
    <div class="dd-warp">
      <div class="dd-label">头部固定</div>
      <div class="dd-layout-demo">
        <ml-layout>
          <div slot="top" class="slot-hh"></div>
          <div class="slot-ctt">
            测试<br/>
            测试<br/>
            测试<br/>
            测试<br/>
            测试<br/>
            测试<br/>
            测试<br/>
            测试<br/>
            测试<br/>
            测试<br/>
            测试<br/>
            测试<br/>
            测试<br/>
            测试<br/>
            测试<br/>
          </div>
        </ml-layout>
      </div>
      <div class="dd-label">尾部固定</div>
      <div class="dd-layout-demo">
        <ml-layout>
          <div class="slot-ctt">
            测试<br/>
            测试<br/>
            测试<br/>
            测试<br/>
            测试<br/>
            测试<br/>
            测试<br/>
          </div>
          <div slot="bottom" class="slot-hh"></div>
        </ml-layout>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .dd-layout-demo .ml-layout {
    border: 1px solid #ccc;
  }
</style>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .dd-layout-demo {
    height: 400px;
    overflow: auto;
    padding: 0 40px;
  }

  .slot-ctt {
    font-size: 32px;
  }

  .slot-hh {
    height: 60px;
    background-color cornflowerblue;
  }

</style>