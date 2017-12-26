# Checkbox

多选
```js
import { Checkbox } from 'ml-ui'

Vue.component(Checkbox.name, Checkbox)
```

Demo

```html
<ml-checkbox v-model="checkboxValue">
  <ml-checkbox-item value="11">单选1南京</ml-checkbox-item>
  <ml-checkbox-item value="22">单选2杭州</ml-checkbox-item>
  <ml-checkbox-item value="33">单选3上海</ml-checkbox-item>
</ml-checkbox>

// 禁止选中
<ml-checkbox v-model="checkboxValue">
  <ml-checkbox-item :disabled="true" value="11">单选1南京</ml-checkbox-item>
  <ml-checkbox-item :disabled="true" value="22">单选2杭州</ml-checkbox-item>
</ml-checkbox>
```
ml-checkbox Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| v-model         | 值	  | String(`,`隔开)、Array  | - | - |

ml-checkbox-item Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value         | 值	  | -  | - | - |
| disabled         | 是否禁止选中	  | Boolean  |  true、false  | false |
| className         | 自定义	  | String  | - | - |
| inline         | 是否行内元素	  | Boolean  |  true、false | false |
