<template>
  <ml-model v-model="value" :mask="true" :prevent="prevent" transition="bottom" class="ast-model" @on-close="removeDom">
    <div class="ml-active-sheet" :class="`ast-${mode||'IOS '}`">
      <ul class="ast-options">
        <li class="ast-title ml-border ellipsis">{{title || '提示'}}</li>
        <li v-for="item in data" :key="`option-${item[label || 'label']}`">
          <button @click="doExcEvent(item)" class="ast-btn ml-border ellipsis">{{item[label || 'label']}}</button>
        </li>
      </ul>
      <div class="ml-ast-cancel" v-if="mode!='Android'">
        <button class="ast-btn ellipsis" @click="doExcEvent()">{{cancelText || '取消'}}</button>
      </div>
    </div>
  </ml-model>
</template>
<script type="text/babel">
  export default {
    props: {
      value: Boolean,
      prevent: Boolean,
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
       * 窗口关闭移除DOM/Window closes and remove DOM
       */
      removeDom() {
        if (this.$el.parentNode) document.body.removeChild(this.$el)
      },
      /**
       * 执行事件/Execution of events
       */
      doExcEvent(obj) {
        this.value = false
        setTimeout(() => {
          obj ? this.onSelect && this.onSelect(JSON.parse(JSON.stringify(obj))) : this.onCancel && this.onCancel()
          this.removeDom()
        }, 300)
      },
    },
    mounted() {
      // Ios click Effect
      setTimeout(() => {
        Array.from(this.$el.getElementsByClassName('ast-btn')).forEach($el => {
          $el.addEventListener('touchstart', () => {
          })
        })
      }, 60)
    },
  }
</script>
