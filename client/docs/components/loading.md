# Loading

正在加载 居中显示
 
注:外层`position`css属性值必须设置为`relative`
```js
import { Loading } from 'ml-ui'

Vue.component(`ml-${Loading.name}`, Icon)
```

Demo
```html
<ml-loading v-model="load"></ml-icon>
<script type="text/babel">
  export default {
    data() {
      return {
        loading: true,
      }
    }
  }
</script>
```
Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| v-model         | 是否显示   | Boolean  | - | false |
| type         | 类型   | String  | one | one |
