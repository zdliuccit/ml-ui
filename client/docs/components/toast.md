# Toast

基础布局
```js
import { $toast } from 'ml-ui'

Vue.prototype[$toast.name]= $toast
```

例子
```js
this.$toast({ message: '消息在top', place: 'top' })
this.$toast({ message: '消息在middle' })
this.$toast({ message: '消息在bottom', place: 'bottom' })
```
API
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| message         | 内容   | String  | - | - |
| className         | 自定义class名称   | String  | - | - |
| place         | 显示位置   | String  | top、middle、bottom  | middle |
| duration         | 显示多久消失(ms)   | Number  | - | 3000 |
