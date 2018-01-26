<template>
  <ml-model v-model="value" :mask="true" :prevent="prevent">
    <div class="ml-popup">
      <div class="ml-popup-title">{{title || '提示'}}</div>
      <div class="ml-popup-content" v-html="message"></div>
      <div class="ml-popup-button ml-border">
        <button @click="doClose" class="ml-popup-cancel ml-border" v-if="type==='confirm'">{{cancelText || '取消'}}
        </button>
        <button @click="doConfirm" class="ml-popup-confirm">{{confirmText || '确定'}}</button>
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
      type: {
        type: String,
        default: 'alert'
      },
      prevent: {
        type: Boolean,
        default: true,
      },
      title: String,
      message: String,
      onConfirm: Function,
      onCancel: Function,
      confirmText: String,
      cancelText: String,
    },
    methods: {
      /**
       * 窗口关闭移除DOM
       */
      removeDom(callback) {
        this.value = false
        setTimeout(() => {
          callback && callback()
          if (this.$el.parentNode) document.body.removeChild(this.$el)
        }, 300)
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
