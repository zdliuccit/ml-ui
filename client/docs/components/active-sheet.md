# ActiveSheet

活动表，支持IOS、Android主题
<hr>

### 引入
```js
import { $activeSheet } from 'ml-ui'

Vue.prototype.$activeSheet = $activeSheet
```
### Demo
```js
this.$activeSheet({
  data: this.options,
  onSelect: obj => {
    this.$message.success({ message: `选择了${obj.label}` })
  },
  onCancel: () => {
  this.$message.warning({ message: '取消了' })
  }
})
```
### Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| mode        | 活动表主题 | String  | ISO、Android |  IOS| 
| data       | 数据  | Array  | - |  -| 
| label       |  显示的字段  | String  | - |  label| 
| title       |  标题  | String  | - | 标题 | 
| cancelText       |  取消按钮文字  | String  | - |  取消| 
| prevent    | 是否阻止点击外层关闭   | Boolean  | - | false |
| onSelect       |  选中事件  | Function  | - |  -| 
| onCancel       |  取消事件  | Function  | - |  -| 

### Events
| 事件名称          | 说明            | 返回值 |
|-------------  |---------------- | ---- |
|onSelect	  | 选中事件	 | 当前选中的对象 |
|onCancel	  | 取消事件	 | - |
