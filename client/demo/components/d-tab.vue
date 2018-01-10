<template>
  <div class="dd-body">
    <d-head :back="true" title="Tab"></d-head>
    <div class="dd-warp">
      <div class="dd-tab-warp">
        <div class="tab-nav ml-border">
          <a :class="{'tab-nav-check':tabIndex==0}" href="javascript:;" @click="doTabClick(0)">Tab1</a>
          <a :class="{'tab-nav-check':tabIndex==1}" href="javascript:;" @click="doTabClick(1)">Tab2</a>
          <a :class="{'tab-nav-check':tabIndex==2}" href="javascript:;" @click="doTabClick(2)">Tab3</a>
          <a :class="{'tab-nav-check':tabIndex==3}" href="javascript:;" @click="doTabClick(3)">Tab4</a>
        </div>
        <div class="dd-tab-content">
          <ml-tab v-model="tabIndex">
            <ml-tab-item class="dd-tab-c1">
              <div class="warp-content">第一页</div>
            </ml-tab-item>
            <ml-tab-item class="dd-tab-c2">
              <div class="warp-content">第二页</div>
            </ml-tab-item>
            <ml-tab-item class="dd-tab-c3">
              <div class="warp-content">第三页</div>
            </ml-tab-item>
            <ml-tab-item class="dd-tab-c4">
              <div class="warp-content">第四页</div>
            </ml-tab-item>
          </ml-tab>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        tabIndex: 0,
      }
    },
    methods: {
      doTabClick(index) {
        if (this.tabIndex !== index) this.tabIndex = index
      }
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .dd-tab-warp {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    .tab-nav {
      height: 46px;
      text-align: center;
      line-height: 46px;
      border-bottom-color: #ccc;
      a {
        display: block;
        height: 100%;
        float: left;
        width: 25%;
        color: #666;
      }
      .tab-nav-check {
        color: #20a0ff;
      }
    }
    .dd-tab-content {
      flex: 1;
      color: #fff;
    }
    .warp-content {
      text-align: center;
      font-size: 40px;
    }
    .dd-tab-c1 {
      background-color: #eb9e05
    }
    .dd-tab-c2 {
      background-color: #31a354;
    }
    .dd-tab-c3 {
      background-color: #df5000;
    }
    .dd-tab-c4 {
      background-color: #3182bd;
    }
  }


</style>