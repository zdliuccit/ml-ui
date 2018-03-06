<template>
  <div class="dd-body">
    <d-head :back="true" title="IView"></d-head>
    <div class="dd-warp">
      <div class="warp-content">
        <div class="dd-ii-img"><img @click="srcClick(url1)" :src="url1"/></div>
        <div class="dd-ii-img2"><img @click="srcClick(url2)" :src="url2"/></div>
        <div class="dd-ii-img"><img @click="srcClick(url3)" :src="url3"/></div>
      </div>
      <ml-i-view v-model="imgShow" :url="showUrl"></ml-i-view>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showUrl: '',
        url1: 'https://img-np.xkeshi.cn/dev/crm/1f/08/8243bb1371ce6e155c09260b7c3d.jpeg',
        url2: 'https://img-np.xkeshi.cn/dev/crm/28/c0/780d017b31de80bcad69d5403fda.jpeg',
        url3: 'https://img-np.xkeshi.cn/dev/crm/32/02/37457b4e4053f3d635e0d4a3e6d7.png',
        imgShow: false,
      }
    },
    methods: {
      /**
       * 切换图片src
       * @param url
       */
      srcClick(url) {
        this.showUrl = url
        this.imgShow = true
      }
    },
  }
</script>