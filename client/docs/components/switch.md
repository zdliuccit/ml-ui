# Switch

开关
```js
import { Switch } from 'ml-ui'

Vue.component(Switch.name, Switch)
```

Demo

```html
// 默认
<ml-switch v-model="switchValue"></ml-switch>

// 带slot
<ml-switch v-model="switchValue">
  <div slot="left">ON</div>
  <div slot="right">OFF</div>
</ml-switch>

<ml-switch v-model="switchValue">
  <div slot="left">开</div>
  <div slot="right">关</div>
</ml-switch>

// 禁止
<ml-switch v-model="switchValue" :disabled="true"></ml-switch>
```
Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| v-model         | 绑定值		  | Boolean  | - | - |
| disabled         | 是否禁用	  | Boolean  |  true、false  | false |
