<template>
  <div class="dd-body">
    <d-head :back="true" title="IView"></d-head>
    <div class="dd-warp">
      <div class="warp-content">
        <div class="dd-ii-img"><img @click="imgShow=true" :src="url"/></div>
        <div class="dd-ii-img2"><img @click="imgShow1=true" :src="url1"/></div>
        <div class="dd-ii-img"><img @click="imgShow2=true" :src="url2"/></div>
      </div>
      <ml-i-view v-model="imgShow" :url="url"></ml-i-view>
      <ml-i-view v-model="imgShow1" :url="url1"></ml-i-view>
      <ml-i-view v-model="imgShow2" :url="url2"></ml-i-view>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        url: 'https://img-np.xkeshi.cn/dev/crm/1f/08/8243bb1371ce6e155c09260b7c3d.jpeg',
        url1: 'https://img-np.xkeshi.cn/dev/crm/28/c0/780d017b31de80bcad69d5403fda.jpeg',
        url2: 'https://img-np.xkeshi.cn/dev/crm/32/02/37457b4e4053f3d635e0d4a3e6d7.png',
        imgShow: false,
        imgShow1: false,
        imgShow2: false,
      }
    }
  }
</script>