<template>
  <div class="dd-body">
    <d-head :back="true" title="Left-slip"></d-head>
    <div class="dd-warp">
      <ul class="slip-ul ml-border">
        <li class=" ml-border" v-for="(ii,$index) in list" :key="`slip-${ii.iphone}`">
          <ml-left-slip>
            <div class="address-info">
              <div class="name">{{ii.name}}<span>{{ii.iphone}}</span></div>
              <div class="address">{{ii.address}}</div>
            </div>
            <div slot="right" class="btn-del" @click="doClick($index)">删除</div>
          </ml-left-slip>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        list: [
          {
            address: '浙江省杭州市滨江区长河缤纷北苑',
            iphone: 12345672910,
            name: '张无忌',
          },
          {
            address: '江苏省南京市六合区',
            iphone: 12345678922,
            name: '田二妞',
          },
          {
            address: '浙江省杭州市滨江区长河缤纷北苑',
            iphone: 12345673310,
            name: '张无忌',
          },
          {
            address: '江苏省南京市六合区',
            iphone: 12355678910,
            name: '田二妞',
          },
          {
            address: '江苏省南京市六合区',
            iphone: 12345655910,
            name: '田二妞',
          },
          {
            address: '浙江省杭州市滨江区长河缤纷北苑',
            iphone: 12345668910,
            name: '张无忌',
          },
          {
            address: '江苏省南京市六合区',
            iphone: 12345711210,
            name: '田二妞',
          },
          {
            address: '江苏省南京市六合区',
            iphone: 12346438910,
            name: '田二妞',
          },
          {
            address: '浙江省杭州市滨江区长河缤纷北苑',
            iphone: 12345988910,
            name: '张无忌',
          },
          {
            address: '江苏省南京市六合区',
            iphone: 12345671230,
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
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .slip-ul {
    border-top-color: #ccc;
    li {
      font-size: 16px;
      border-bottom-color: #ccc;
      .address-info {
        padding: 20px 20px;
      }
      .name, .address {
        color: #000;
        span {
          margin-left: 20px;
        }
      }
      .address {
        padding-top: 10px;
        color: #999;
        font-size: 14px;
      }
      .btn-del {
        background-color: #f0534c;
        color: #fff;
        width: 100px;
        height: 100%;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>