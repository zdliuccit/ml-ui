# LeftSlip

左滑 <strong>注:外层必须定高</strong>
<hr>
 
### 引入
```js
import { LeftSlip } from 'ml-ui'

Vue.component(`ml-${LeftSlip.name}`, Icon)
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
### Slot
| name | 描述 |
| -- | --- | 
| - | 默认 | 
| right | 右侧 | 