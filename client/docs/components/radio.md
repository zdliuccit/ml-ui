# Radio

单选
```js
import { Radio } from 'ml-ui'

Vue.component(`ml-${Radio.name}`, Radio)
```

Demo

```html
默认
<ml-radio v-model="radioValue" @on-change="doChange">
  <ml-radio-item value="11">单选1南京</ml-radio-item>
  <ml-radio-item value="22">单选2杭州</ml-radio-item>
  <ml-radio-item value="33">单选3上海</ml-radio-item>
</ml-radio>

禁止选中
<ml-radio v-model="radioValue">
  <ml-radio-item :disabled="true" value="11">单选1南京</ml-radio-item>
  <ml-radio-item :disabled="true" value="22">单选2杭州</ml-radio-item>
</ml-radio>
```
Radio Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| v-model         | 绑定值		  | Boolean、String、Number  | - | - |


Radio events
| 事件名称          | 说明            | 返回值 |
|-------------  |---------------- | ---- |
|on-change	  |开关变化时触发，返回当前的状态	 | true|false |

Radio-item Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value         | 值	  | -  | - | - |
| disabled         | 是否禁止选中	  | Boolean  |  true、false  | false |
| inline         | 是否行内元素	  | Boolean  |  true、false | false |
