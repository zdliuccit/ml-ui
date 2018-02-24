# AutoLoad

滚动到底部自动加载
<hr>

### 引入
```js
import { AutoLoad } from 'ml-ui'

Vue.component(AutoLoad.name, AutoLoad)
```
### Demo
```html
<ml-auto-load :loading="doLoad" v-model="paging">
  <ul class="test-ul ml-border">
    <li class="ml-border" v-for="ii in dataList">{{ii}}</li>
  </ul>
</ml-auto-load>
```
### Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| v-model        |绑定值 是否执行底部自动加载(内容高度小于外层高度时无加载) | Boolean  | - |  true| 
| loading       | 底部自动加载event  | Function  | - |  -| 
| showTop       |  回到顶部按钮开关  | Boolean  | - |  true| 

### Event
| 名称          |  参数值  |  说明|
|-------------  |------ |----- |
| loading         | (resolve)   | 内部执行promise函数，外部需要resolve |
