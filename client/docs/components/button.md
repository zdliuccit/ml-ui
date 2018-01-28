# Button

按钮，提供几种默认样式和尺寸
<hr>

### 引入
```js
import { Button } from 'ml-ui

Vue.component(Button.name, Button)
```

### Demo
样式
```html
<ml-button type="default">default</ml-button>
<ml-button type="primary">primary</ml-button>
<ml-button type="danger">danger</ml-button>

```
Size
```html
<ml-button type="small">default</ml-button>
<ml-button>primary</ml-button>
<ml-button type="big">danger</ml-button>

```
禁用
```html
<ml-button disabled>disabled</ml-button>
```
带图标
```html
<ml-button>
  <i class="iconfont icon-info" slot="icon"></i>默认按钮
</ml-button>
```
事件绑定
```html
<ml-button @click="onClick">点击触发onClick</ml-button>
```
### Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| disabled         | 禁用状态	  | Boolean  | - | false |
| type         | 按钮样式		  |   | - | default |
| size         | 尺寸			  |   | - |  |

### Slot
| name | 描述 |
| -- | --- | 
| - | 默认文字 | 
| icon | 图标icon | 