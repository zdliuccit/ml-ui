# Checkbox

多选
```js
import { Checkbox } from 'ml-ui'

Vue.component(`ml-${Checkbox.name}`, Checkbox)
```

Demo

```html
<div class="dd-label">String类型值: {{checkboxValue}}</div>
<ml-checkbox v-model="checkboxValue">
  <ml-checkbox-item value="11">多选1南京</ml-checkbox-item>
  <ml-checkbox-item value="22">多选2杭州</ml-checkbox-item>
  <ml-checkbox-item value="33">多选3上海</ml-checkbox-item>
  <ml-checkbox-item value="44">多选4广州</ml-checkbox-item>
  <ml-checkbox-item value="55">多选5深圳</ml-checkbox-item>
  <ml-checkbox-item value="66">多选6北京</ml-checkbox-item>
</ml-checkbox>
<div class="dd-label">Array类型值: {{checkboxValue1}}</div>
<ml-checkbox v-model="checkboxValue1">
  <ml-checkbox-item :inline="true" :value="11">多选1南京</ml-checkbox-item>
  <ml-checkbox-item :inline="true" :value="22">多选2杭州</ml-checkbox-item>
  <ml-checkbox-item :inline="true" :value="33">多选3上海</ml-checkbox-item>
  <ml-checkbox-item :inline="true" :value="44">多选4广州</ml-checkbox-item>
  <ml-checkbox-item :inline="true" :value="55">多选5深圳</ml-checkbox-item>
  <ml-checkbox-item :inline="true" :value="66">多选6北京</ml-checkbox-item>
</ml-checkbox>
<div class="dd-label">禁止选中: {{checkboxValue2}}</div>
<ml-checkbox v-model="checkboxValue2">
  <ml-checkbox-item :inline="true" :value="11">多选1南京</ml-checkbox-item>
  <ml-checkbox-item :inline="true" :disabled="true" :value="22">多选2杭州</ml-checkbox-item>
  <ml-checkbox-item :inline="true" :disabled="true" :value="33">多选3上海</ml-checkbox-item>
  <ml-checkbox-item :inline="true" :value="44">多选4广州</ml-checkbox-item>
  <ml-checkbox-item :inline="true" :value="55">多选5深圳</ml-checkbox-item>
  <ml-checkbox-item :inline="true" :value="66">多选6北京</ml-checkbox-item>
</ml-checkbox>
<script type="text/babel">
  export default {
    data() {
      return {
        checkboxValue: '22',
        checkboxValue1: [33, 44],
        checkboxValue2: [33, 44],
      }
    },
    methods: {}
  }
</script>
```
Checkbox Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| v-model         | 绑定值	  | String(`,`隔开)、Array  | - | - |

Checkbox events
| 事件名称          | 说明            | 返回值 |
|-------------  |---------------- | ---- |
|on-change	  |开关变化时触发，返回当前的状态	 | true|false |

Checkbox-item Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value         | 值	  | String、Number、Boolean | - | - |
| disabled         | 是否禁止选中	  | Boolean  |  true、false  | false |
| inline         | 是否行内元素	  | Boolean  |  true、false | false |
