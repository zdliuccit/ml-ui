<template>
  <div class="dd-icon">
    <d-head :back="true" title="Icon"></d-head>
    <ul class="icon_lists ">
      <li v-for="icon in icons">
        <div class="icon">
          <ml-icon :icon="`${icon}`"></ml-icon>
        </div>
        <div class="name">{{icon}}</div>
      </li>
    </ul>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        icons: [
          'back',
          'right',
        ]
      }
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .icon_lists {
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