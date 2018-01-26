<template>
  <ml-model v-model="visible" :mask="true" :prevent="prevent" transition="bottom">
    <div class="ml-date-pater">
      <div class="ml-dp-btn ml-border">
        <a class="" @click="doCancel" href="javascript:;">取消</a>
        <a class="ml-dp-confirm" @click="doConfirm" href="javascript:;">确定</a>
      </div>
      <div class="ml-dp-warp">
        <ml-pater-item v-if="format.indexOf('yyyy')>-1" :start="1950" :end="2050" unit="年"
                       v-model="mlDate.year"/>
        <ml-pater-item v-if="format.indexOf('MM')>-1" :start="1" :end="12" unit="月" v-model="mlDate.month"/>
        <ml-pater-item v-if="format.indexOf('dd')>-1" :start="1" :end="lastDay" unit="日" v-model="mlDate.day"/>
        <ml-pater-item v-if="format.indexOf('hh')>-1" :start="0" :end="23" unit="时" v-model="mlDate.hour"/>
        <ml-pater-item v-if="format.indexOf('mm')>-1" :start="0" :end="59" unit="分" v-model="mlDate.minutes"/>
        <ml-pater-item v-if="format.indexOf('ss')>-1" :start="0" :end="59" unit="秒" v-model="mlDate.second"/>
        <div class="ml-dp-bg ml-border"></div>
      </div>
    </div>
  </ml-model>
</template>
<script type="text/babel">
  export default {
    name: 'date-pater',
    props: {
      value: String,
      format: {
        type: String,
        default: 'yyyy-MM-dd', //  yyyy-MM-dd HH:mm:ss
      },
      prevent: Boolean,
    },
    watch: {
      /**
       * 监听
       */
      'mlDate.year'() {
        this.monthLastDay(this.mlDate.year, this.mlDate.month)
      },
      /**
       * 监听
       */
      'mlDate.month'() {
        this.monthLastDay(this.mlDate.year, this.mlDate.month)
      },
    },
    data() {
      return {
        visible: false,
        mlDate: {
          year: 2018,
          month: 1,
          day: 15,
          hour: 0,
          minutes: 0,
          second: 0,
        },
        clWidth: 100,
        lastDay: 30,
        demoDate: this.value,
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
          this.$emit(callback, this.demoDate)
        }, 200)
      },
      /**
       * 打开
       */
      doOpen() {
        let de = new Date()
        let val = this.value
        if (val) {
          const dateJson = {
            'yyyy': `${val}/01/01`,
            'MM': `2018/${val}/01`,
            'MM-dd': `2018/${val}`,
            'yyyy-MM': `${val}/01`,
          }
          const format = this.format
          let yy = ''
          if (['yyyy', 'MM', 'dd'].findIndex(ss => format.indexOf(ss) > -1) === -1) yy = '2018/01/01 '
          if (dateJson[format]) val = dateJson[format]
          de = new Date(yy + val.replace(/-/g, '/'))
        }
        const mlDate = this.mlDate
        mlDate.year = de.getFullYear()
        mlDate.month = de.getMonth() + 1
        mlDate.day = de.getDate()
        mlDate.minutes = de.getMinutes()
        mlDate.hour = de.getHours()
        mlDate.second = de.getSeconds()
        this.monthLastDay(mlDate.year, mlDate.month)
        this.visible = true
        this.$children[0].$children.forEach(vv => {
          vv.initTranslate3d()
        })
      },
      /**
       * 取消事件
       */
      doCancel() {
        this.doHide('on-close')
      },
      /**
       * 计算月份的最后一天
       */
      monthLastDay(year, month) {
        this.lastDay = (new Date(year, month, 0)).getDate()
        if (this.mlDate.day > this.lastDay) this.mlDate.day = this.lastDay
      },
      /**
       * 确认事件
       */
      doConfirm() {
        const dd = this.mlDate
        this.demoDate = this.format.replace('yyyy', dd.year)
          .replace('MM', (dd.month < 10 ? '0' : '') + dd.month)
          .replace('dd', (dd.day < 10 ? '0' : '') + dd.day)
          .replace('hh', (dd.hour < 10 ? '0' : '') + dd.hour)
          .replace('mm', (dd.minutes < 10 ? '0' : '') + dd.minutes)
          .replace('ss', (dd.second < 10 ? '0' : '') + dd.second)
        this.$emit('input', this.demoDate)
        this.doHide('on-confirm')
      },
    },
  }
</script>
