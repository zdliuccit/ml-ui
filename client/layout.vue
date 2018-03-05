<template>
  <div class="dd-layout">
    <div class="dd-layout-warp">
      <div class="dd-layout-top">
        <router-link :to="{path:'/'}">
          <div class="ml-logo"></div>
        </router-link>
        <a class="ml-git-link" href="https://github.com/zdliuccit/ml-ui" target="_blank">
          <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16"
               width="32">
            <path fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </a>
      </div>
      <div class="ml-body">
        <div class="ml-sidebar">
          <div class="ml-QRCode">
            <div class="ml-QRCode-img"></div>
            <div class="ml-QRCode-word">手机预览</div>
          </div>
          <ul class="side-nav">
            <li class="nav-item">
              <a href="javascript:;">更新日志</a>
            </li>
            <li class="nav-item" v-for="side in sideJson" :key="side.label">
              <a href="javascript:;" :class="{'active':side.link==$route.path}"
                 v-if="side.link" @click="goToComp(side.link)">安装</a>
              <div class="nav-group" v-if="side.children&&side.children.length>0">
                <div class="nav-group-title">{{side.label}}</div>
                <ul class="pure-menu-list">
                  <li class="nav-item" v-for="component in side.children" :key="component.label">
                    <a href="javascript:;" :class="{'active':component.link==$route.path}"
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
          <div class="markdown-body ml-content-warp">
            <router-view></router-view>
          </div>
        </div>
        <div class="ml-phone">
          <div class="phone-top"></div>
          <iframe class="phone-content" :src="`${host}/#/demo${$route.meta.demoLink||''}`"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        sideJson: this.$store.state.sidebar,
        host: window.location.host,
      }
    },
    created() {
      if (process.env.NODE_ENV === 'development') this.host = `//${this.host}`
    },
    methods: {
      /**
       * 组件切换
       * @param link
       */
      goToComp(link) {
        if (link) this.$router.push(link)
      }
    },
  }
</script>
