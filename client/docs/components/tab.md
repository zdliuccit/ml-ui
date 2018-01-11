# Tab

选项卡

左右切换效果(支持左右滑动)

```js
import { Tab } from 'ml-ui'

Vue.component(`ml-${Tab.name}`, Tab)
```

Demo

Tab 切换的头部自定义吧！

```html
<div class="dd-tab-warp">
  <div class="tab-nav ml-border">
    <a :class="{'tab-nav-check':tabIndex==0}" href="javascript:;" @click="doTabClick(0)">Tab1</a>
    <a :class="{'tab-nav-check':tabIndex==1}" href="javascript:;" @click="doTabClick(1)">Tab2</a>
    <a :class="{'tab-nav-check':tabIndex==2}" href="javascript:;" @click="doTabClick(2)">Tab3</a>
    <a :class="{'tab-nav-check':tabIndex==3}" href="javascript:;" @click="doTabClick(3)">Tab4</a>
  </div>
  <div class="dd-tab-content">
    <ml-tab v-model="tabIndex">
      <ml-tab-item class="dd-tab-c1">
        <div class="warp-content">第一页</div>
      </ml-tab-item>
      <ml-tab-item class="dd-tab-c2">
        <div class="warp-content">第二页</div>
      </ml-tab-item>
      <ml-tab-item class="dd-tab-c3">
        <div class="warp-content">第三页</div>
      </ml-tab-item>
      <ml-tab-item class="dd-tab-c4">
        <div class="warp-content">第四页</div>
      </ml-tab-item>
    </ml-tab>
  </div>
</div>
<script type="text/babel">
  export default {
    data() {
      return {
        tabIndex: 0,
      }
    },
    methods: {
      doTabClick(index) {
        if (this.tabIndex !== index) this.tabIndex = index
      }
    }
  }
</script>
```
Tab Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |-------------- |-------- |
| v-model         | 绑定值(索引从0开始)		  | Number  | - | - |
