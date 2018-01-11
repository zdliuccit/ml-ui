# Slide

幻灯片
```js
import { Slide } from 'ml-ui'

Vue.component(`ml-${Slide.name}`, Slide)
```
Demo
```html
<div class="slide-demo">
  <ml-slide :defaultIndex="1">
    <ml-slide-item>
      <div class="slide-dbg gbg1">第一页</div>
    </ml-slide-item>
    <ml-slide-item>
      <div class="slide-dbg gbg2">第二页</div>
    </ml-slide-item>
    <ml-slide-item>
      <div class="slide-dbg gbg3">第三页</div>
    </ml-slide-item>
    <ml-slide-item>
      <div class="slide-dbg gbg4">第四页</div>
    </ml-slide-item>
  </ml-slide>
</div>
<div class="slide-demo">
  <ml-slide :speed="1000" :autoInterval="3500" :showDots="true" :loop="false">
    <ml-slide-item>
      <div class="slide-dbg gbg1">第一页</div>
    </ml-slide-item>
    <ml-slide-item>
      <div class="slide-dbg gbg2">第二页</div>
    </ml-slide-item>
  </ml-slide>
</div>
```

Props

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| speed         | 动画持时（毫秒）   | Number  | - | 300 |
| autoInterval         | 自动播放的时间间隔（毫秒）  | Number  | - | 3000 |
| defaultIndex         | 初始显示的轮播图的索引   | Number  | -  |  0| 
| showDots        | 是否显示dots   | Boolean  | -  |  true| 
| loop        | 是否可以循环播放	   | Boolean  | -  |  true| 