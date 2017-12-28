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
          {
            label: 'Button',
            link: '/demo/button'
          },
          {
            label: 'Radio',
            link: '/demo/radio'
          },
          {
            label: 'Checkbox',
            link: '/demo/checkbox'
          },
          {
            label: 'Tab',
            link: '/demo/tab'
          },
          {
            label: 'Switch',
            link: '/demo/switch'
          },
          {
            label: 'Progress',
            link: '/demo/progress'
          },
          {
            label: 'Model',
            link: '/demo/model'
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
    font-size: 18px;
    .ul-cpt {
      margin-bottom: 15px;
      padding: 0 10px 10px;
      li {
        border-bottom-color: #ddd;
        a {
          display: block;
          padding: 10px;
        }
        a:hover {
          color: #0090fb;
        }
      }
    }
  }
</style>