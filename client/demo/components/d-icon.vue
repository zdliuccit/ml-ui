<template>
  <div class="dd-body">
    <d-head :back="true" title="Icon"></d-head>
    <div class="dd-warp">
      <div class="warp-content">
        <ul class="icon-list ">
          <li v-for="icon in icons" :key="icon">
            <div class="icon">
              <ml-icon :icon="`${icon}`"></ml-icon>
            </div>
            <div class="name">{{icon}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        icons: [
          'back',
          'right',
          'close',
          'sigh',
          'hook',
          'fork',
          'info',
          'radio-on',
          'checkbox-on',
          'pull-up',
          'up',
        ]
      }
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .icon-list {
    padding: 10px 0;
    word-break: break-all;
    li {
      width: 25%;
      text-align: center;
      float: left;
      margin-bottom: 10px;
      .icon {
        i {
          font-size: 20px;
        }
      }
      .name {
        padding-top: 10px;
        font-size: 12px;
      }
    }
  }

</style>
