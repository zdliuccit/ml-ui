# Switch

开关
```js
import { Switch } from 'ml-ui'

Vue.component(`ml-${Switch.name}`, Switch)
```

Demo

```html
默认
<ml-switch v-model="switchValue"></ml-switch>

带slot
<ml-switch v-model="switchValue">
  <div slot="left">ON</div>
  <div slot="right">OFF</div>
</ml-switch>

注:eft、right字数一样最好
<ml-switch v-model="switchValue">
  <div slot="left">开</div>
  <div slot="right">关</div>
</ml-switch>

禁止
<ml-switch v-model="switchValue" :disabled="true"></ml-switch>
```
Switch Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| v-model         | 绑定值		  | Boolean  | - | - |
| disabled         | 是否禁用	  | Boolean  |  true、false  | false |

Switch events
| 事件名称          | 说明            | 返回值 |
|-------------  |---------------- | ---- |
|on-change	  |开关变化时触发，返回当前的状态	 | true|false |

Switch Slot
| 名称          | 说明            |
|-------------  |---------------- |
|left  |左侧slot |
|right  |右侧slot |