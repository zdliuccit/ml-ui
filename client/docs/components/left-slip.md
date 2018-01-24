# LeftSlip

左滑

<strong>注:外层必须定高</strong>
 
```js
import { LeftSlip } from 'ml-ui'

Vue.component(`ml-${LeftSlip.name}`, Icon)
```
Demo
```html
<ul class="slip-ul ml-border">
  <li class=" ml-border" v-for="(ii,$index) in list" :key="`slip-${ii}`">
     <ml-left-slip>
       <div class="address-info">
         <div class="name">{{ii.name}}<span>{{ii.iphone}}</span></div>
         <div class="address">{{ii.address}}</div>
       </div>
       <div slot="right" class="btn-del" @click="doClick($index)">删除</div>
     </ml-left-slip>
   </li>
</ul>
<script type="text/babel">
  export default {
    data() {
      return {
        list: [
          {
            address: '浙江省杭州市滨江区长河缤纷北苑',
            iphone: 12345678910,
            name: '张无忌',
          },
          {
            address: '江苏省南京市六合区',
            iphone: 12345678910,
            name: '田二妞',
          }
        ],
      }
    },
    methods: {
      doClick($index) {
        this.list.splice($index, 1)
        this.$message.success({ message: '成功删除了' })
      },
    }
  }
</script>
```
Slot
| name | 描述 |
| -- | --- | 
| - | 默认 | 
| right | 右侧 | 