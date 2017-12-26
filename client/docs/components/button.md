# Button

按钮
```js
import { Button } from 'ml-ui'

Vue.component(Layout.name, Layout)
```

Demo


```html
// 样式
<ml-button type="default">default</ml-button>
<ml-button type="primary">primary</ml-button>
<ml-button type="danger">danger</ml-button>

// Size大小
<ml-button type="small">default</ml-button>
<ml-button >primary</ml-button>
<ml-button type="big">danger</ml-button>

// 禁用
<ml-button disabled>disabled</ml-button>

// 带图标
<ml-button>
  <i class="iconfont icon-info" slot="icon"></i>默认按钮
</ml-button>

// 事件绑定
<ml-button @click.native="handleClick">点击触发 handleClick</ml-button>


```
Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| disabled         | 禁用状态	  | Boolean  | - | false |
| type         | 按钮样式		  |   | - | default |
| size         | 尺寸			  |   | - |  |
| className         |  自定义class名称			  |   | - |  |

Slot
| name | 描述 |
| -- | --- | 
| - | 默认文字 | 
| icon | 图标icon | 