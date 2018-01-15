# DatePater

日期、时间选择器
```js
import { DatePater } from 'ml-ui'

Vue.prototype[`ml-${DatePater.name}`]= $popup
```
打开选择器
```js
this.$refs.datePater.doOpen()
```
Demo
```html
<div class="dd-label">
  <ml-button @click="doClick(0)">默认(yyyy-MM-dd) 值 {{date}}</ml-button>
  <ml-date-pater ref="datePater0" v-model="date"></ml-date-pater>
</div>
<div class="dd-label">
  <ml-button @click="doClick(1)">格式 hh:mm 值 {{date1}}</ml-button>
  <ml-date-pater format="hh:mm" ref="datePater1" v-model="date1"></ml-date-pater>
</div>
<div class="dd-label">
  <ml-button @click="doClick(2)">格式 hh:mm:ss 值 {{date2}}</ml-button>
  <ml-date-pater format="hh:mm:ss" ref="datePater2" v-model="date2"></ml-date-pater>
</div>
<div class="dd-label">
  <ml-button @click="doClick(3)">格式 yyyy 值 {{date3}}</ml-button>
  <ml-date-pater format="yyyy" ref="datePater3" v-model="date3"></ml-date-pater>
</div>
<div class="dd-label">
  <ml-button @click="doClick(4)">格式 yyyy-MM 值 {{date4}}</ml-button>
  <ml-date-pater format="yyyy-MM" ref="datePater4" v-model="date4"></ml-date-pater>
</div>
<div class="dd-label">
  <ml-button @click="doClick(5)">格式 MM-dd 值 {{date5}}</ml-button>
  <ml-date-pater format="MM-dd" ref="datePater5" v-model="date5"></ml-date-pater>
</div>
<div class="dd-label">
  <ml-button @click="doClick(6)">格式 yyyy-MM-dd hh:mm</ml-button>
  <div class="dd-label" @click="doClick(6)">值 {{date7}}</div>
  <ml-date-pater format="yyyy-MM-dd hh:mm" ref="datePater6" v-model="date6"></ml-date-pater>
</div>
<div class="dd-label">
  <ml-button @click="doClick(7)">格式 yyyy-MM-dd hh:mm:ss</ml-button>
  <div class="dd-label">值 {{date7}}</div>
  <ml-date-pater format="yyyy-MM-dd hh:mm:ss" ref="datePater7" v-model="date7"></ml-date-pater>
</div>
<script type="text/babel">
  export default {
    data() {
      return {
        date: '',
        date1: '12:59',
        date2: '12:23:33',
        date3: '2018',
        date4: '2018-04',
        date5: '01-15',
        date6: '2018-01-15 12:22',
        date7: '2018-01-15 15:33:44',
      }
    },
    methods: {
      doClick(index) {
        this.$refs[`datePater${index}`].doOpen()
      }
    }
  }
</script>
```
Props
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| v-model         | 绑定值   | String  | - | - |
| format         | 格式   | String  | yyyy-MM-dd hh:mm:ss  |  alert| 
| onConfirm        | 确定事件   | Function  | - |  -| 
| onClose         | 取消事件   | Function  | - | - |
| prevent    | 点击外层是否关闭   | Boolean  | true、false | true |

Events
| 事件名称          | 说明            | 返回值 |
|-------------  |---------------- | ---- |
|onConfirm	  |确定事件	 | 当前值 |
|onClose	  | 取消事件	 | - |
