# DatePater

日期、时间选择器
<hr>

### 引入
```js
import { DatePater } from 'ml-ui'

Vue.prototype[`ml-${DatePater.name}`]= $popup
```
打开选择器
```js
this.$refs.datePater.doOpen()
```
### Demo

默认
```html
<ml-date-pater ref="datePater" v-model="date"></ml-date-pater>
```

时间格式 默认`yyyy-MM-dd`，支持另外`hh:mm``hh:mm:ss``yyyy``yyyy-MM``MM-dd``yyyy-MM-dd hh:mm``yyyy-MM-dd hh:mm:ss`7种格式
```html
<ml-date-pater format="hh:mm" ref="datePater" v-model="date"></ml-date-pater>
```
事件绑定
```html
<ml-date-pater @on-confirm="doConfirm" @on-close="doClose" ref="datePater" v-model="date">
</ml-date-pater>
```
### Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| v-model         | 绑定值   | String  | - | - |
| format         | 格式   | String  | yyyy-MM-dd hh:mm:ss  |  yyyy-MM-dd| 
| prevent    | 是否阻止点击外层关闭   | Boolean  | true、false | false |

### Events
| 事件名称          | 说明            | 返回值 |
|-------------  |---------------- | ---- |
|on-confirm	  |确定事件	 | 当前值 |
|on-close	  | 取消事件	 | - |
