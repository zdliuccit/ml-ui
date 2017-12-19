<template>
  <div class="ml-popup-body" :style="{ 'z-index':$index }">
    <transition name="ml-scale">
      <div class="ml-popup" v-show="visible">
        <div class="ml-popup-title">{{title}}</div>
        <div class="ml-popup-content" v-html="message">
        </div>
        <div class="ml-popup-button ml-border" :class="{'two-btn':type==='confirm'}">
          <button @click="doClose" class="ml-border" v-if="type==='confirm'">取消</button>
          <button @click="doConfirm" class="ml-border ml-popup-confirm">确定</button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script type="text/babel">
  export default {
    props: {
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
      onClose: {
        type: Function,
        default: () => {
        },
      },
      type: {
        type: String,
        default: 'alert'
      },
      $index: Number,
    },
    data() {
      return {
        visible: false
      }
    },
    methods: {
      /**
       * 窗口关闭移除DOM
       */
      removeDom() {
        this.visible = false
        this.$el.addEventListener('transitionend', () => {
          if (this.$el.parentNode) {
            document.body.removeChild(this.$el)
          }
        })
      },
      /**
       * 取消事件
       */
      doClose() {
        this.removeDom()
        this.$nextTick(() => {
          this.onClose()
        })
      },
      /**
       * 确认事件
       */
      doConfirm() {
        this.removeDom()
        this.$nextTick(() => {
          this.onConfirm()
        })
      },
    },
  }
</script>
