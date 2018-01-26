<template>
  <ml-model v-model="value" :mask="true" :prevent="prevent" transition="bottom" class="ast-model">
    <div class="ml-active-sheet">
      <div class="ast-title">{{title || '提示'}}</div>
      <div class="ast-options">
        <button class="ast-option" v-for="item in data">
        </button>
      </div>
      <button class="ml-ast-cancel">{{cancelText || '取消'}}</button>
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
      prevent: {
        type: Boolean,
        default: false,
      },
      mode: String,
      data: Array,
      label: String,
      title: String,
      cancelText: String,
      onSelect: Function,
      onCancel: Function,
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
