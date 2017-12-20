# Slide

幻灯片
```js
import { Slide } from 'ml-ui'

Vue.component(Slide.name, Slide)
```


API

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| speed         | 动画持时（毫秒）   | Number  | - | 300 |
| autoInterval         | 自动播放的时间间隔（毫秒）  | Number  | - | 3000 |
| animation         | 动画类型  | String  |  opacity、left  |left |
| defaultIndex         | 初始显示的轮播图的索引   | Number  | -  |  0| 
| showDots        | 是否显示dots   | Boolean  | -  |  true| 
| loop        | 是否可以循环播放	   | Boolean  | -  |  true| 