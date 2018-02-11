# Range

范围，可设置间隔。适用于音量、改变字体大小等场景。

<strong>注:touch事件请手机预览</strong>
<hr>


### 引入
```js
import { Range } from 'ml-ui'

Vue.component(Range.name, Range)
```

### Demo
默认，预设值:value=89
```html
<ml-range v-model="value"></ml-range>
```
设置区间，左右slot
```html
<ml-range :min="10" :max="60" v-model="value">
  <div class="pr6" slot="left">10</div>
  <div class="pf6" slot="right">60</div>
</ml-range>
```
自定义步长，设置线宽
```html
<ml-range :step="10" :height="8" v-model="value"></ml-range>
```
禁用
```html
<ml-range :disabled="true" v-model="value"></ml-range>

事件绑定
```html
<ml-range @on-change="doChange" v-model="value"></ml-range>
```

### Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value         | 值	  | Number  | - | - |
| min         | 最小值	  | Number  | - | 0 |
| max         | 最大值	  | Number  | - | 100 |
| step         | 步长	  | Number  | - | 1 |
| height         | 线条高度	  | Number  | - | 2 |
| disabled         | 禁用状态	  | Boolean  | - | false |

<strong>注：max必须大于min</strong>

### Events
| 事件名称          | 说明            | 返回值 |
|-------------  |---------------- | ---- |
|on-change	  | 值改变执行事件	 | 当前值 |


### Slot
| name | 描述 |
| -- | --- | 
| left | 滑块左侧 DOM | 
| right | 滑块右侧 DOM | 