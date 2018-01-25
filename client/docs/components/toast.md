# Toast

Toast提示
<hr>

### 引入
```js
import { $toast } from 'ml-ui'

Vue.prototype[$toast.name]= $toast
```

### Demo
```js
this.$toast({ message: '消息在top', place: 'top' })
this.$toast({ message: '消息在middle' })
this.$toast({ message: '消息在bottom', place: 'bottom' })
```
### Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| message         | 内容   | String  | - | - |
| place         | 显示位置   | String  | top、middle、bottom  | middle |
| duration         | 显示多久消失(ms)   | Number  | - | 3000 |
