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
            label: 'Icon 图标',
            link: '/demo/icon'
          },
//          {
//            label: 'Layout',
//            link: '/demo/layout'
//          },
          {
            label: 'Button 按钮',
            link: '/demo/button'
          },
          {
            label: 'Radio 单选',
            link: '/demo/radio'
          },
          {
            label: 'Checkbox 多选',
            link: '/demo/checkbox'
          },
          {
            label: 'Switch 开关',
            link: '/demo/switch'
          },
          {
            label: 'DatePater 日期、时间选择器',
            link: '/demo/date-pater'
          },
          {
            label: 'Tab 选项卡',
            link: '/demo/tab'
          },
          {
            label: 'Slide 幻灯片',
            link: '/demo/slide'
          },
//          {
//            label: 'Progress 进度条',
//            link: '/demo/progress'
//          },
          {
            label: 'Model 遮罩层',
            link: '/demo/model'
          },
          {
            label: 'Pull 上拉加载 下拉刷新',
            link: '/demo/pull'
          },
          {
            label: 'AutoLoad 底部自动加载',
            link: '/demo/auto-load'
          },
          {
            label: 'Loading 正在加载...',
            link: '/demo/loading'
          },
          {
            label: 'LeftSlip 左滑',
            link: '/demo/left-slip'
          },
        ],
        jsCpt: [
          {
            label: 'Toast 提示',
            link: '/demo/toast'
          },
          {
            label: 'Message 消息',
            link: '/demo/message'
          },
          {
            label: 'Popup 弹窗',
            link: '/demo/popup'
          },
        ]
      }
    },
    watch: {
      $route(to, from) {
        if (to.path !== from.path) {
          const layers = document.getElementsByClassName('dg-mask-layer')
          this.log(layers)
          Array.from(layers).forEach(vv => {
            vv.parent.removeChild(vv)
          })
        }
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