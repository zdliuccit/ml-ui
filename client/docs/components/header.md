# Header

顶部导航栏
<hr>

### 引入
```js
import { Header } from 'ml-ui

Vue.component(Header.name, Header)
```
### Demo

默认
```html
<ml-header title="默认标题"> </ml-header>
```
设置 left 或 right slot

```html
<ml-header title="这里的标题太长会变...">
  <div slot="left">
    <ml-icon icon="back"></ml-icon>
    <span>返回</span>
  </div>
  <div slot="right">
    <ml-icon icon="sigh"></ml-icon>
  </div>
</ml-header>
```
### Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| fix         | 	固定在页面顶部		  |  Boolean | - | false |
| title         | 标题			  |  String | - | - |

### Slot
| name | 描述 |
| -- | --- | 
| left | 左边元素 | 
| right | 右边元素 | 