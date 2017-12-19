# Message

消息提示
```js
import { $message } from 'ml-ui'

Vue.prototype[$message.name]= $message
```

方式1
```js
this.$message({ message: '测试消息' }) 
or 
this.$message.info({ message: '测试消息' }) 

this.$message.warning({ message: '警告消息' })

this.$message.success({ message: '成功消息'})

this.$message.error({ message: '错误消息'})

```
方式2 
```js
this.$message({ message: '测试消息',type:'info' }) 

this.$message({ message: '警告消息',type:'warning' }) 

this.$message({ message: '成功消息',type:'success' }) 

this.$message({ message: '错误消息',type:'error' }) 

```


API
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| message         | 内容   | String  | - | - |
| type         | 类型   | String  | `info` `warning` `error` `success` |  `info`| 
| showIcon         | 是否显示icon   | Boolean  | `true` `false` |  `true`| 
| className         | 自定义class名称   | String  | - | - |
| place         | 显示位置   | String  | `top` `middle` `bottom`  | `middle` |
| duration         | 显示多久消失(ms)   | Number  | - | 3000 |
