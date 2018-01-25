# Popup

提示框弹窗
<hr>

### 引入
```js
import { $popup } from 'ml-ui'

Vue.prototype[$popup.name]= $popup
```
### Demo-1
```js
this.$popup.alert({message: '这是alert' }) 

this.$popup.confirm({
       message: '这是confirm',
       cancelText: 'No',
       confirmText: 'Yes',
       onConfirm: () => {
         this.$message.success({ message: 'confirm确定了' })
       },
       onClose: () => {
         this.$message.warning({ message: 'confirm取消了' })
       }
     })
```
### Demo-2 
```js
this.$popup({type:'alert',message: '这是alert' }) 

this.$popup({type:'confirm', message: '这是confirm' }) 
```
Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| title         | 标题   | String  | - | - |
| message         | 内容(支持html片段)   | String  | - | - |
| type         | 类型   | String  | alert、confirm  |  alert| 
| onConfirm        | 确定事件   | Function  | - |  -| 
| onCancel         | 取消事件   | Function  | - | - |
| cancelText    | 取消按钮文字   | String  | - | 取消 |
| confirmText    | 确定按钮文字   | String  | - | 确定 |
| prevent    | 是否阻止点击外层关闭   | Boolean  | - | true |
