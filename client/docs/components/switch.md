# Switch

开关
<hr>

### 引入
```js
import { Switch } from 'ml-ui

Vue.component(Switch.name, Switch)
```
### Demo
默认
```html
<ml-switch v-model="switchValue"></ml-switch>
```
带slot 注:eft、right字数一样最好
```html
<ml-switch v-model="switchValue">
  <div slot="left">ON</div>
  <div slot="right">OFF</div>
</ml-switch>
```
禁止
```html
<ml-switch v-model="switchValue" :disabled="true"></ml-switch>
```
事件绑定
```html
<ml-switch @on-change="doChange" v-model="switchValue"></ml-switch>
```
### Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| v-model         | 绑定值		  | Boolean  | - | - |
| disabled         | 是否禁用	  | Boolean  |  - | false |

### Events
| 事件名称          | 说明            | 返回值 |
|-------------  |---------------- | ---- |
|on-change	  |开关变化时触发，返回当前的状态	 | true|false |

### Slot
| 名称          | 说明            |
|-------------  |---------------- |
|left  |左侧slot |
|right  |右侧slot |