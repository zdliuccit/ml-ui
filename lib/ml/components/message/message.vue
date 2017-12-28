<template>
  <transition name="ml-opacity">
    <div class="ml-message dg-no-layer ml-border" :class="[`place-${place}`,`ml-msg-${type}`]" :style="{ 'z-index':$index }"
         v-show="visible">
      <ml-icon ref="mlMsgIcon" v-if="showIcon" :icon="iconClass"></ml-icon>
      <p ref="mlMsgText" class="ml-message-text inline-block">{{message}}</p>
    </div>
  </transition>
</template>
<script type="text/babel">
  import MlIcon from '../icon/icon.vue'

  export default {
    components: { MlIcon },
    props: {
      message: String,
      type: {
        type: String,
        default: 'info',
      },
      showIcon: {
        type: Boolean,
        default: true,
      },
      className: {
        type: String,
        default: '',
      },
      place: {
        type: String,
        default: 'middle',
      },
      onClose: {
        type: Function,
        default: () => {
        },
      },
      $index: Number,
    },
    computed: {
      /**
       * icon图标
       * @return {String} icon
       */
      iconClass: function () {
        let icon = 'info'
        if (this.type === 'success') icon = 'hook'
        if (this.type === 'error') icon = 'fork'
        if (this.type === 'warning') icon = 'sigh'
        return icon
      },
    },
    data() {
      return {
        visible: false
      }
    }
  }
</script>
