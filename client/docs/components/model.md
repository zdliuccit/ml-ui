# Model

提供弹层
<hr>

### 引入

```js
import { Model } from 'ml-ui'

Vue.component(Model.name, Model)
```
### Demo

默认`middle`效果，其余(`top``right``bottom``left`)
```html
<ml-model v-model="show" transition="right">
  <div class="test">默认middle效果</div>
</ml-model>
```
支持自定义效果 `transition`和默认效果名不一致即可
```html
<ml-model v-model="custom"   transition="dd-custom">
  <transition name="dd-custom">
    <div class="test-cc" v-show="custom">
      自定义效果
    </div>
  </transition>
</ml-model>
```

阻止点击外层关闭
```html
<ml-model v-model="show" :prevent="true">
  <div class="test">默认middle效果</div>
</ml-model>
```
事件绑定
```html
<ml-model v-model="show2" @on-close="doClose" :prevent="false" transition="top">
  <div class="test-ww">top效果</div>
</ml-model>
```
### Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|------------- |---------------- |---------------- |---------------------- |-------- |
| v-model       | 绑定值   | Boolean  | - | - |
| transition       | 动效   | String | middle、top、right、bottom、left| middle |
| speed       | 动效时间(ms)   | Number | -| 300 |
| mask    | 是否需要遮罩层   | Boolean  | - | true |
| through    | 针对IOS，是否禁止touch穿透   | Boolean  | - | true |
| maskClass    | 自定义遮罩层的class名称   | String  | - | - |
| prevent    | 是否阻止点击外层关闭   | Boolean  |  - | false |
| onClose    | 关闭执行事件   | Function  | - | - |

<strong>注: </strong>
 * `speed`参数必须与`transition`设置的时间一样
 * 内部有滚动的话，需`through`设为false

### Events
| 事件名称          | 说明            | 返回值 |
|-------------  |---------------- | ---- |
|on-close	  | 关闭执行事件	 | - |

