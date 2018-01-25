# Checkbox

复选框，`ml-checkbox-item`依赖`ml-checkbox`
<hr>

### 引入

```js
import { Checkbox,CheckBoxItem } from 'ml-ui'

Vue.component(`ml-${Checkbox.name}`, Checkbox)
Vue.component(`ml-${CheckBoxItem.name}`, CheckBoxItem)
```

### Demo

String类型值checkboxValue = '11,22,44'
```html
<ml-checkbox v-model="checkboxValue">
  <ml-checkbox-item value="11">多选1南京</ml-checkbox-item>
  <ml-checkbox-item value="22">多选2杭州</ml-checkbox-item>
  <ml-checkbox-item value="33">多选3上海</ml-checkbox-item>
  <ml-checkbox-item value="44">多选4广州</ml-checkbox-item>
  <ml-checkbox-item value="55">多选5深圳</ml-checkbox-item>
  <ml-checkbox-item value="66">多选6北京</ml-checkbox-item>
</ml-checkbox>
```
Array类型值checkboxValue = [11,22,44]
```html
<ml-checkbox v-model="checkboxValue">
  <ml-checkbox-item :inline="true" :value="11">多选1南京</ml-checkbox-item>
  <ml-checkbox-item :inline="true" :value="22">多选2杭州</ml-checkbox-item>
  <ml-checkbox-item :inline="true" :value="33">多选3上海</ml-checkbox-item>
  <ml-checkbox-item :inline="true" :value="44">多选4广州</ml-checkbox-item>
  <ml-checkbox-item :inline="true" :value="55">多选5深圳</ml-checkbox-item>
  <ml-checkbox-item :inline="true" :value="66">多选6北京</ml-checkbox-item>
</ml-checkbox>
```
选项是否行内元素 `ml-checkbox-item`的参数`:inline=true`
```html
<ml-checkbox-item :inline="true" :value="22">多选2杭州</ml-checkbox-item>
```
设置禁用选项 `ml-checkbox-item`的参数`:disabled=true`
```html
<ml-checkbox-item :disabled="true" :value="22">多选2杭州</ml-checkbox-item>
```
事件绑定
```html
<ml-checkbox v-model="checkboxValue" @on-change="doChange">
  ...    
</ml-checkbox>
```

### Checkbox Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| v-model         | 绑定值	  | String(`,`隔开)、Array  | - | - |

### Checkbox events
| 事件名称          | 说明            | 返回值 |
|-------------  |---------------- | ---- |
|on-change	  | 值改变执行事件	 | 当前值 |

### Checkbox-item Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value         | 值	  | String、Number、Boolean | - | - |
| disabled         | 是否禁止选中	  | Boolean  |  -  | false |
| inline         | 是否行内元素	  | Boolean  |  - | false |
