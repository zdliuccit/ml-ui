<template>
  <div class="ml-radio-item" :class="{'inline-block':inline}">
    <div class="ml-radio-icon" @click="doCheck">
      <transition name="ml-radio-scale">
        <div class="ml-radio-on" v-show="isCheck" :class="{'is-disabled':disabled}">
          <ml-icon icon="radio-on"></ml-icon>
        </div>
      </transition>
      <div class="ml-radio-no ml-border" :class="{'is-disabled':disabled}" v-show="!isCheck"></div>
    </div>
    <div class="ml-radio-label" @click="doCheck">
      <slot></slot>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'ml-radio-item',
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
        return this.$parent.currentValue === this.value
      }
    },
    methods: {
      /**
       * 选中事件
       */
      doCheck() {
        !this.disabled && this.$parent && this.$parent.setCurrentValue(this.value)
      }
    }
  }
</script>