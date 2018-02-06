# Tab

选项卡，左右切换效果(支持左右滑动)，`ml-tab-item`依赖`ml-tab`

<strong>注:touch事件请手机预览</strong>
<hr>

### 引入
```js
import { Tab, TabItem } from 'ml-ui'

Vue.component(Tab)
Vue.component(Tab, TabItem)
```
### Demo

Tab的头部自定义吧！

```html
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
```
### Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |-------------- |-------- |
| v-model         | 绑定值(索引从0开始)		  | Number  | - | - |
