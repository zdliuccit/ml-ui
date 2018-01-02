<template>
  <div class="ml-radio-item" :class="{className,'inline-block':inline}">
    <div class="ml-radio-icon">
      <transition name="ml-radio-scale">
        <div class="ml-radio-on" v-show="isCheck" :class="{'is-disabled':disabled}">
          <ml-icon icon="radio-on" @click.native="doCheck"></ml-icon>
        </div>
      </transition>
      <div class="ml-radio-no" :class="{'is-disabled':disabled}" v-show="!isCheck">
        <ml-icon icon="radio-no" @click.native="doCheck"></ml-icon>
      </div>
    </div>
    <div class="ml-radio-label" @click="doCheck">
      <slot></slot>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'radio-item',
    props: {
      value: {
        type: [String, Number, Boolean],
        default: '',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      className: String,
      inline: {
        type: Boolean,
        default: false,
      }
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