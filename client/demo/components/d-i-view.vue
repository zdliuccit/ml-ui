<template>
  <div class="dd-body">
    <d-head :back="true" title="IView"></d-head>
    <div class="dd-warp">
      <img @click="imgShow=true" class="dd-ii-img" :src="url"/>
      <ml-i-view v-model="imgShow" :url="url"></ml-i-view>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        url: 'https://img-np.xkeshi.cn/dev/crm/d3/59/2ab0f61a73309bc4ee16c09e40fe.jpeg',
        imgShow: false,
      }
    }
  }
</script>