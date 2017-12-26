<template>
  <div class="dd-body">
    <d-head :back="true" title="Icon"></d-head>
    <div class="dd-warp">
      <div class="warp-content">
        <ul class="icon-list ">
          <li v-for="icon in icons">
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
          'radio-no',
          'radio-on',
          'checkbox-on',
          'checkbox-no',
        ]
      }
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .icon-list {
    padding: 20px;
    word-break: break-all;
    li {
      width: 20%;
      text-align: center;
      float: left;
      margin-bottom: 20px;
      .icon {
        i {
          font-size: 44px;
        }
      }
      .name {
        padding-top: 20px;
      }
    }
  }

</style>