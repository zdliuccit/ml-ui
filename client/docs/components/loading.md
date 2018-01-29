# Loading

正在加载 绝对居中显示  注:外层`position`css属性值必须设置为`relative`
<hr>

### 引入
```js
import { Loading } from 'ml-ui'

Vue.component(Loading.name, Loading)
```

### Demo
```html
<ml-loading v-model="load"></ml-icon>
```
### Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| v-model         | 是否显示   | Boolean  | - | false |
| type         | 类型   | String  | one、two | one |
| width       |  宽度  | Number  |  [20,100] |  60| 
| height      |  高度  | Number  |  [20,100] |  60| 

注:width与height最好保持一致，最大不会超过100