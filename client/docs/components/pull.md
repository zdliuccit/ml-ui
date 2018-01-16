# Pull

上拉加载更多、下拉刷新
```js
import { Pull } from 'ml-ui'

Vue.prototype[`ml-${Pull.name}`]= Pull
```
Demo
```html
<ml-pull :loading="doLoad" :refresh="doRefresh" v-model="paging">
  <ul class="test-ul ml-border">
    <li class="ml-border" v-for="ii in dataList">{{ii}}</li>
    <li class="ml-border">paging: {{paging}}</li>
  </ul>
</ml-pull>
<script type="text/babel">
  export default {
    data() {
      return {
        dataList: 20,
        paging: false,
      }
    },
    mounted() {
      this.paging = true
    },
    methods: {
      doLoad(resolve) {
        setTimeout(() => {
          this.dataList += 10
          if (this.dataList >= 50) this.paging = false
          resolve()
        }, 1000)
      },
      doRefresh(resolve) {
        setTimeout(() => {
          this.dataList = 20
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
| v-model        |绑定值 是否执行底部自动加载(内容高度小于外层高度时无法上拉加载) | Boolean  | - |  true| 
| pullUp         | 是否开启上拉刷新   | Boolean  | - | true |
| pullDown         |  是否开启下拉刷新  | Boolean  | - | true |
| loading         | 上拉加载event  | Function  | - |  -| 
| refresh        | 下拉刷新event   | Function  | - |  -| 
| showTop       |  回到顶部按钮开关  | Boolean  | true、false |  true| 


Event

| 名称          |  参数值  |  说明|
|-------------  |------ |----- |
| loading         | (resolve,reject)   | 内部执行promise函数，外部需要resolve `or` reject  |
| refresh         | (resolve,reject)   | 内部执行promise函数，外部需要resolve `or` reject  |
