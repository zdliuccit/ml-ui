<template>
  <div class="ml-checkbox-item" :class="{className,'inline-block':inline}">
    <div class="ml-checkbox-icon">
      <transition name="ml-checkbox-scale">
        <div class="ml-checkbox-on" v-show="isCheck" :class="{'is-disabled':disabled}">
          <ml-icon icon="checkbox-on" @click.native="doCheck"></ml-icon>
        </div>
      </transition>
      <div class="ml-checkbox-no" :class="{'is-disabled':disabled}" v-show="!isCheck">
        <ml-icon icon="checkbox-no" @click.native="doCheck"></ml-icon>
      </div>
    </div>
    <div class="ml-checkbox-label" @click="doCheck">
      <slot></slot>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'ml-checkbox-item',
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
    }
  }
</script>