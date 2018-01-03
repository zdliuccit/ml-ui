# Pull

上拉加载更多、下拉刷新
```js
import { Pull } from 'ml-ui'

Vue.prototype[Pull.name]= Pull
```
Demo
```html
<ml-pull :loading="doLoad" :refresh="doLoad">
  <ul class="test-ul ml-border">
    <li class="ml-border" v-for="ii in dataList">{{ii}}</li>
  </ul>
</ml-pull>
<script type="text/babel">
  export default {
    methods: {
      doLoad(resolve, reject) {
        setTimeout(() => {
          this.dataList += 10
          resolve()
        }, 1000)
      }
    }
  }
</script>
```
Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| pullUp         | 是否开启上拉刷新   | Boolean  | - | true |
| pullDown         |  是否开启下拉刷新  | Boolean  | - | true |
| loading         | 上拉加载event  | Function  | - |  -| 
| refresh        | 下拉刷新event   | Function  | - |  -| 

Event

| 名称          |  参数值  |  说明|
|-------------  |------ |----- |
| loading         | (resolve,reject)   | 内部执行promise函数，外部需要resolve `or` reject  |
| refresh         | (resolve,reject)   | 内部执行promise函数，外部需要resolve `or` reject  |
