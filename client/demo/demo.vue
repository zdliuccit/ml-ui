<template>
  <div class="ml-demo">
    <d-head title="BaseComponents"></d-head>
    <ul class="ul-cpt">
      <li class="ml-border" v-for="bb in baseCpt">
        <a href="javascript:;" @click="toTo(bb.link)">{{bb.label}}</a>
      </li>
    </ul>
    <d-head title="JSComponents"></d-head>
    <ul class="ul-cpt">
      <li class="ml-border" v-for="bb in jsCpt">
        <a href="javascript:;" @click="toTo(bb.link)">{{bb.label}}</a>
      </li>
    </ul>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        baseCpt: [
          {
            label: 'Icon',
            link: '/demo/icon'
          },
          {
            label: 'Layout',
            link: '/demo/layout'
          },
          {
            label: 'Slide',
            link: '/demo/slide'
          },
        ],
        jsCpt: [
          {
            label: 'Toast',
            link: '/demo/toast'
          },
          {
            label: 'Message',
            link: '/demo/message'
          },
          {
            label: 'Popup',
            link: '/demo/popup'
          },
        ]
      }
    },
    methods: {
      /**
       * 跳转
       */
      toTo(path) {
        if (path) this.$router.push(path)
      },
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .ml-demo {
    font-size: 36px;
    .ul-cpt {
      margin-bottom: 30px;
      padding: 0 20px 20px;
      li {
        border-bottom-color: #ddd;
        a {
          display: block;
          padding: 20px;
        }
        a:hover {
          color: #0090fb;
        }
      }
    }
  }
</style>