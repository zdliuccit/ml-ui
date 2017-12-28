<template>
  <div class="dd-body">
    <d-head :back="true" title="Button"></d-head>
    <div class="dd-warp">
      <div class="dd-button-warp">
        <div class="big-button">
          <div class="label">default</div>
          <ml-button size="big" @click="onClick">默认按钮</ml-button>
          <ml-button size="big" @click="onClick" type="primary">primary按钮</ml-button>
          <ml-button size="big" @click="onClick" type="danger">danger按钮</ml-button>
          <ml-button size="big" @click="onClick" type="submit">submit按钮</ml-button>
        </div>
        <div class="big-button">
          <div class="label">disabled</div>
          <ml-button size="big" @click="onClick" :disabled="true">默认按钮</ml-button>
          <ml-button size="big" @click="onClick" :disabled="true" type="submit">submit按钮</ml-button>
        </div>
        <div class="default-button">
          <div class="label">default</div>
          <ml-button @click="onClick">默认按钮</ml-button>
          <ml-button @click="onClick" type="primary">primary按钮</ml-button>
          <ml-button @click="onClick" type="danger">danger按钮</ml-button>
          <ml-button @click="onClick" type="submit">submit按钮</ml-button>
        </div>
        <div class="small-button">
          <div class="label">small</div>
          <ml-button @click="onClick" size="small">默认按钮</ml-button>
          <ml-button @click="onClick" size="small" type="primary">primary按钮</ml-button>
          <ml-button @click="onClick" size="small" type="danger">danger按钮</ml-button>
          <ml-button @click="onClick" size="small" type="submit">submit按钮</ml-button>
        </div>
        <div class="icon-button">
          <div class="label">icon</div>
          <ml-button @click="onClick">
            <i class="iconfont icon-info" slot="icon"></i>默认按钮
          </ml-button>
          <ml-button type="submit" @click="onClick">
            <i class="iconfont icon-hook" slot="icon"></i>submit按钮
          </ml-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {}
    },
    methods: {
      onClick() {
        /*eslint-disable*/
        this.log('点击了')
      }
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .dd-button-warp {
    padding: 5px 15px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .icon-button {
    .iconfont {
      font-size: 18px;
      margin-right: 5px;
    }
  }

  .dd-warp {
    .label {
      text-align: center;
      margin-bottom: 20px;
      font-size: 18px;
    }
    button {
      margin-bottom: 20px;
    }
  }

  .big-button, .default-button, .small-button, .icon-button {
    margin-bottom: 20px;
  }

  .default-button {
    button {
      margin-right: 20px;
    }
  }

  .small-button, .icon-button {
    button {
      margin-right: 5px;
    }
  }
</style>