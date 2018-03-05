<template>
  <div class="ml-demo">
    <div class="ul-title ml-border">JSComponents</div>
    <ul class="ul-cpt">
      <li class="ml-border" v-for="bb in jsCpt" :key="bb.label">
        <a href="javascript:;" @click="toTo(bb.link)">{{bb.label}}</a>
        <ml-icon icon="up"></ml-icon>
      </li>
    </ul>
    <div class="ul-title ml-border">BaseComponents</div>
    <ul class="ul-cpt">
      <li class="ml-border" v-for="bb in baseCpt" :key="bb.label">
        <a href="javascript:;" @click="toTo(bb.link)">{{bb.label}}</a>
        <ml-icon icon="up"></ml-icon>
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
          {
            label: 'Header 顶部导航栏',
            link: '/demo/header'
          },
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
            label: 'Range 范围',
            link: '/demo/range'
          },
          {
            label: 'IView 图片预览组件',
            link: '/demo/i-view'
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
          {
            label: 'ActiveSheet 活动表',
            link: '/demo/active-sheet'
          },
        ]
      }
    },
    watch: {
      $route(to, from) {
        if (to.path !== from.path) {
          Array.from(document.getElementsByClassName('dg-mask-layer')).forEach(vv => {
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
    font-size: 16px;
    .ul-title {
      background-color: #f5f5f5;
      padding: 16px 10px;
      color: #505050;
      border-bottom-color: #ddd;
    }
    .ul-cpt {
      margin-bottom: 15px;
      padding-left: 10px;
      li {
        border-bottom-color: #ddd;
        a {
          display: inline-block;
          padding: 12px 0;
        }
        i {
          float: right;
          font-size: 24px;
          transform: rotate(90deg);
          margin: 8px 12px;
          color: #777;
        }
        a:hover {
          color: #0090fb;
        }
      }
    }
  }
</style>
