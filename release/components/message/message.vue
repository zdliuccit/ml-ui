<template>
  <transition name="ml-opacity">
    <div class="ml-message dg-mask-layer ml-border" :class="[`place-${place||'middle'}`,`ml-msg-${type}`]"
         :style="{ 'z-index':$index }"
         v-show="visible">
      <ml-icon v-if="showIcon" :icon="iconClass"></ml-icon>
      <p ref="mlMsgText" class="ml-message-text inline-block">{{message}}</p>
    </div>
  </transition>
</template>
<script type="text/babel">
  export default {
    props: {
      type: {
        type: String,
        default: 'info',
      },
      showIcon: {
        type: Boolean,
        default: true,
      },
      message: String,
      place: String,
      onClose: Function,
      $index: Number,
    },
    computed: {
      /**
       * icon图标
       * @return {String} icon
       */
      iconClass: function () {
        return { info: 'info', success: 'hook', error: 'fork', warning: 'sigh' }[this.type]
      },
    },
    data() {
      return {
        visible: false
      }
    }
  }
</script>
