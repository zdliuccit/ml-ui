# IView

图片预览组件，支持双手指放大/缩小，双击放大/缩小。

<strong>注:touch事件请手机预览</strong>
<hr>

### 引入
```js
import { IView } from 'ml-ui'

Vue.component(IView.name, IView)
```

### Demo
```html
<ml-i-view v-model="imgShow" :url="url"></ml-i-view>
```
### Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| v-model         | 是否显示   | Boolean  | - | false |
| url         | 图片地址   | String  | - | - |
