<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>
## Button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo Button 组件默认提供7种主题，由`type`属性来定义，默认为`default`。

```html
<ml-button >默认按钮</ml-button>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   large,small,mini            |    —     |
| type     | 类型   | string    |   primary,success,warning,danger,info,text |     —    |
| plain     | 是否朴素按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
| native-type | 原生 type 属性 | string | button,submit,reset | button |

<!--| loading     | 是否加载中状态   | Boolean    | — | false   |-->
