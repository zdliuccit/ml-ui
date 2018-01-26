<template>
  <div class="ml-checkbox-item" :class="{'inline-block':inline}">
    <div class="ml-checkbox-icon" @click="doCheck">
      <transition name="ml-checkbox-scale">
        <div class="ml-checkbox-on" v-show="isCheck" :class="{'is-disabled':disabled}">
          <ml-icon icon="checkbox-on"></ml-icon>
        </div>
      </transition>
      <div class="ml-checkbox-no ml-border" :class="{'is-disabled':disabled}" v-show="!isCheck">
      </div>
    </div>
    <div class="ml-checkbox-label" @click="doCheck">
      <slot></slot>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'checkbox-item',
    props: {
      value: [String, Number, Boolean],
      disabled: Boolean,
      inline: Boolean,
    },
    computed: {
      /**
       * 是否选中
       * @return {boolean}
       */
      isCheck: function () {
        return this.$parent.currentValue.indexOf(this.value) > -1
      }
    },
    methods: {
      /**
       * 选中事件
       */
      doCheck() {
        !this.disabled && this.$parent && this.$parent.setCurrentValue(this.value)
      }
    },
  }
</script>