<template>
  <ml-model v-model="visible" :mask="true" :prevent="prevent" transition="bottom">
    <div class="ml-date-pater">
      <div class="ml-dp-btn ml-border">
        <a class="" @click="doCancel" href="javascript:;">取消</a>
        <a class="ml-dp-confirm" @click="doConfirm" href="javascript:;">确定</a>
      </div>
      <div class="ml-dp-warp">
        <ml-pater-item :width="100" :start="1990" :end="2050" unit="年" v-model="dateObject.year"/>
        <!--<ml-pater-item :width="16.6666" :start="1" :end="12" unit="月"/>-->
        <!--<ml-pater-item :width="16.6666" :start="1" :end="31" unit="日"/>-->
        <!--<ml-pater-item :width="16.6666" :start="0" :end="23" unit="时"/>-->
        <!--<ml-pater-item :width="16.6666" :start="0" :end="59" unit="分"/>-->
        <!--<ml-pater-item :width="16.6666" :start="0" :end="59" unit="秒"/>-->
        <div class="ml-dp-bg ml-border"></div>
      </div>
    </div>
  </ml-model>
</template>
<script type="text/babel">
  export default {
    name: 'date-pater',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      onConfirm: {
        type: Function,
        default: () => {
        },
      },
      onClose: {
        type: Function,
        default: () => {
        },
      },
      format: {
        type: String,
        default: 'yyyy-MM-dd hh:mm:ss'
      },
      prevent: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        visible: false,
        unit: ['年', '月', '日', '时', '分', '秒'],
        dateObject: {
          year: 2001,
          month: 1,
          day: 1,
          hour: 0,
          minutes: 0,
          second: 0,
        }
      }
    },
    methods: {
      /**
       * 关闭
       * @param {Function} callback
       */
      doHide(callback) {
        setTimeout(() => {
          this.visible = false
          callback && callback()
        }, 200)
      },
      /**
       * 打开
       */
      doOpen() {
        this.visible = true
        setTimeout(() => {
          this.$children[0].$children.forEach(vv => {
            vv.initTranslate3d()
          })
        }, 200)
      },
      /**
       * 取消事件
       */
      doCancel() {
        this.doHide(this.onClose)
      },
      /**
       * 确认事件
       */
      doConfirm() {
        this.doHide(this.onConfirm)
      },

    },
  }
</script>
