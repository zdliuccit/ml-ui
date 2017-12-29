# Model

弹层

```
<ml-model v-model="show">
  <div>测试</div>
</ml-model>
```
Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|------------- |---------------- |---------------- |---------------------- |-------- |
| v-model       | 绑定值   | Boolean  | true、false | - |
| mask    | 是否需要遮罩层   | Boolean  | true、false | true |
| maskClass    | 自定义遮罩层的class名称   | String  | - | - |
| prevent    | 点击外层是否关闭   | Boolean  | true、false | false |
| onClose    | 关闭执行事件   | Function  | - | - |
