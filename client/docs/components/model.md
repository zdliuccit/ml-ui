# Model

提供弹层

```html
<button class="dd-btn ml-border" @click="doClick">打开弹窗(默认效果)</button>
<ml-model v-model="show" :onClose="doClose" :prevent="false">
  <div class="test-ww">
    默认效果
  </div>
</ml-model>

<button class="dd-btn ml-border" @click="doClick1">打开弹窗(自定义效果)</button>
<ml-model v-model="custom" :onClose="doClose" :prevent="false" :transition="false">
  <transition name="dd-custom">
    <div class="test-cc" v-show="custom">
      自定义效果
    </div>
  </transition>
</ml-model>
<script type="text/babel">
  export default {
    data() {
      return {
        show: false,
        custom: false,
      }
    },
    methods: {
      doClick() {
        this.show = !this.show
      },
      doClick1() {
        this.custom = !this.custom
      },
      doClose() {
        this.log('关闭了')
      },
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .test-ww {
    text-align: center;
    font-size: 16px;
    padding: 20px;
  }

  .test-cc {
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    height: 100px;
    line-height: 80px;
    text-align: center;
    font-size: 16px;
    padding: 10px;
    transform: translate3d(0, -100%, 0);
    background-color: #fff;
    transition: opacity .2s ease-out, transform .2s ease-out;
  }

  .dd-custom-enter {
    opacity: 0;
    transform: translate3d(0, 150%, 0);
  }
</style>
```
Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|------------- |---------------- |---------------- |---------------------- |-------- |
| v-model       | 绑定值   | Boolean  | true、false | - |
| transition       | 默认出场动画效果   | Boolean  | true、false | true |
| mask    | 是否需要遮罩层   | Boolean  | true、false | true |
| maskClass    | 自定义遮罩层的class名称   | String  | - | - |
| prevent    | 点击外层是否关闭   | Boolean  | true、false | false |
| onClose    | 关闭执行事件   | Function  | - | - |
