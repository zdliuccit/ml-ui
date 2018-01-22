<template>
  <ml-model v-model="value" :mask="true" :prevent="prevent">
    <div class="ml-popup">
      <div class="ml-popup-title">{{title}}</div>
      <div class="ml-popup-content" v-html="message"></div>
      <div class="ml-popup-button ml-border">
        <button @click="doClose" class="ml-popup-cancel ml-border" v-if="type==='confirm'">{{cancelText}}</button>
        <button @click="doConfirm" class="ml-popup-confirm">{{confirmText}}</button>
      </div>
    </div>
  </ml-model>
</template>
<script type="text/babel">
  export default {
    props: {
      value: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: '提示'
      },
      message: String,
      onConfirm: {
        type: Function,
        default: () => {
        },
      },
      onCancel: {
        type: Function,
        default: () => {
        },
      },
      type: {
        type: String,
        default: 'alert'
      },
      prevent: {
        type: Boolean,
        default: true,
      },
      confirmText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
    },
    data() {
      return {}
    },
    methods: {
      /**
       * 窗口关闭移除DOM
       */
      removeDom(callback) {
        this.value = false
        setTimeout(() => {
          callback && callback()
          if (this.$el.parentNode) {
            document.body.removeChild(this.$el)
          }
        }, 200)
      },
      /**
       * 取消事件
       */
      doClose() {
        this.removeDom(this.onCancel)
      },
      /**
       * 确认事件
       */
      doConfirm() {
        this.removeDom(this.onConfirm)
      },
    },
  }
</script>
