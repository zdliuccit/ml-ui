<template>
  <div class="ml-body">
    <div class="ml-sidebar">
      <ul class="side-nav">
        <li class="nav-item">
          <a href="javascript:;" changelog>更新日志</a>
        </li>
        <li class="nav-item" v-for="side in sideJson">
          <a href="javascript:;" :class="{'active':side.link==$route.fullPath}"
             v-if="side.link" @click="goToComp(side.link)">安装</a>
          <div class="nav-group" v-if="side.children&&side.children.length>0">
            <div class="nav-group-title">{{side.label}}</div>
            <ul class="pure-menu-list">
              <li class="nav-item" v-for="component in side.children">
                <a href="javascript:;" :class="{'active':component.link==$route.fullPath}"
                   @click="goToComp(component.link)">
                  {{component.label}}
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="ml-content">
      <div class="markdown-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        sideJson: this.$store.state.sidebar
      }
    },
    methods: {
      /**
       * 组件切换
       * @param link
       */
      goToComp(link) {
        if (link) this.$router.push(link)
      }
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>

</style>