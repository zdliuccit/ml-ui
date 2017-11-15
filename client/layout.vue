<template>
  <div class="view-layout" :class="{'layout-cut':isCutOut}">
    <div class="view-layout-topbar">
      <ml-top-bar></ml-top-bar>
    </div>
    <div class="view-layout-sidebar">
      <ml-side-bar></ml-side-bar>
      <div class="sidebar-collapse-inner" @click="unfoldOrRetract" :title="isCutOut?'展开':'收起'">
        <div class="sidebar-collapse-bg"></div>
        <div class="sidebar-collapse">
          <ml-icon icon="collapse-left"></ml-icon>
        </div>
      </div>
    </div>
    <div class="view-layout-warp">
      <!--vl-warp-nav暂且用不到隐藏-->
      <!--<div class="vl-warp-nav"></div>-->
      <div class="vl-warp-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        isCutOut: false, // 是否收起
      }
    },
    methods: {
      /**
       * 展开or收起
       */
      unfoldOrRetract() {
        this.isCutOut = !this.isCutOut
      }
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus">
  html, body {
    position: relative;
    height: 100%;
  }

</style>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .view-layout {
    position: relative;
    height: 100%;
    top: 0;
    left: 0;
    box-sizing: border-box;
    padding-top: 50px;
    padding-left: 180px;
    overflow: hidden;
    min-width: 1024px;
    transition: padding-left 0.2s ease;
    .view-layout-warp {
      padding: 0 20px;
      box-sizing: border-box;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
    }
    .view-layout-topbar {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 2;
      height 50px;
      background-color: #373d41;
    }
    .sidebar-collapse-inner {
      position: absolute;
      left: 166px;
      top: 50%;
      width: 20px;
      height: 50px;
      z-index: 3;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .sidebar-collapse-inner:hover {
      left: 163px;
    }
    .sidebar-collapse-bg {
      position: relative;
      height: 50px;
      right: 0;
      z-index: 1;
      border-bottom: 11px solid transparent;
      border-left: none;
      border-right: 21px solid #f7f7f7;
      border-top: 11px solid transparent;
    }
    .sidebar-collapse {
      height: 50px;
      line-height: 50px;
      position: absolute;
      left: 3px;
      top: 0;
      z-index: 2;
      text-align: center;
      cursor: pointer;
      i {
        font-size: 12px;
      }
    }
    .view-layout-sidebar {
      position: absolute;
      height: 100%;
      width: 180px;
      top: 0;
      left 0;
      z-index: 1;
      background-color: #293038;
      box-sizing: border-box;
      padding-top: 50px;
      overflow: hidden;
      transition: left 0.2s ease;
    }
  }

  .layout-cut {
    padding-left: 0;
    .view-layout-sidebar {
      left: -180px;
      overflow: initial;
      .sidebar-collapse-inner {
        left: 174px;
        transform: rotate(180deg)
      }
      .sidebar-collapse-inner:hover {
        left: 177px;
      }
      .sidebar-collapse-bg {
        border-right: 21px solid #D9DEE4;
      }
    }
  }
</style>