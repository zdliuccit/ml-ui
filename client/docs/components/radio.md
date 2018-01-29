# Radio

单选框，`ml-radio-item`依赖`ml-radio`
<hr>

### 引入
```js
import { Radio, RadioItem } from 'ml-ui'

Vue.component(Radio)
Vue.component(RadioItem)
```
### Demo
默认
```html
<ml-radio v-model="radioValue">
  <ml-radio-item value="11">单选1南京</ml-radio-item>
  <ml-radio-item value="22">单选2杭州</ml-radio-item>
  <ml-radio-item value="33">单选3上海</ml-radio-item>
</ml-radio>
```

设置禁用选项 `ml-radio-item`的参数`:disabled=true`
```html
  <ml-radio-item :disabled="true" value="11">单选1南京</ml-radio-item>
```
事件绑定
```html
<ml-radio v-model="radioValue" @on-change="doChange">
  ...    
</ml-radio>
```
### Radio Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| v-model         | 绑定值		  | Boolean、String、Number  | - | - |


### Radio events
| 事件名称          | 说明            | 返回值 |
|-------------  |---------------- | ---- |
|on-change	  |开关变化时触发，返回当前的状态	 | true|false |

### Radio-item Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value         | 值	  | String、Number、Boolean  | - | - |
| disabled         | 是否禁止选中	  | Boolean  |  -  | false |
| inline         | 是否行内元素	  | Boolean  |  - | false |
