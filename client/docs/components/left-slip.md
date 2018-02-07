# LeftSlip

左滑 

<strong>注:外层必须定高,touch事件请手机预览</strong>
<hr>
 
### 引入
```js
import { LeftSlip } from 'ml-ui'

Vue.component(LeftSlip.name, LeftSlip)
```
### Demo
```html
<li v-for="(ii,$index) in list" :key="`slip-${ii}`">
  <ml-left-slip>
    <div class="address-info">
      <div class="name">{{ii.name}}<span>{{ii.iphone}}</span></div>
      <div class="address">{{ii.address}}</div>
    </div>
    <div slot="right" class="btn-del" @click="doClick($index)">删除</div>
  </ml-left-slip>
</li>
```
### Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| selfClosing  |  点击外部区域自动关闭  | Boolean  |  - |  true| 

### Slot
| name | 描述 |
| -- | --- | 
| - | 默认 | 
| right | 右侧 | 