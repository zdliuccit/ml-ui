# AutoLoad

滚动到底部自动加载
```js
import { Pull } from 'ml-ui'

Vue.prototype[`ml-${Pull.name}`]= Pull
```
Demo
```html
<ml-auto-load :loading="doLoad" :paging="paging">
  <ul class="test-ul ml-border">
    <li class="ml-border" v-for="ii in dataList">{{ii}}</li>
  </ul>
</ml-auto-load>
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
          if (this.dataList === 50) this.paging = false
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
| v-model        |绑定值 是否执行底部自动加载(内容高度小于外层高度时无加载) | Boolean  | - |  true| 
| loading       | 底部自动加载event  | Function  | - |  -| 

Event

| 名称          |  参数值  |  说明|
|-------------  |------ |----- |
| loading         | (resolve,reject)   | 内部执行promise函数，外部需要resolve `or` reject  |
