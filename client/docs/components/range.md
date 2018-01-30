# Range

范围，可设置间隔
<hr>


### 引入
```js
import { Range } from 'ml-ui'

Vue.component(Range.name, Range)
```

### Demo

### Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value         | 值	  | Number  | - | - |
| min         | 最小值	  | Number  | - | 0 |
| max         | 最大值	  | Number  | - | 100 |
| step         | 步长	  | Number  | - | 1 |
| height         | 线条高度	  | Number  | - | 1 |
| disabled         | 禁用状态	  | Boolean  | - | false |

### Slot
| name | 描述 |
| -- | --- | 
| left | 滑块左侧 DOM | 
| right | 滑块右侧 DOM | 