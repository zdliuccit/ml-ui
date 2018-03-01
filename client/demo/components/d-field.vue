<template>
  <div class="dd-body">
    <d-head :back="true" title="Field"></d-head>
    <div class="dd-warp">
      <video ref="video" width="400" height="300"></video>
      <button ref='tack'> snap shot</button>
      <canvas ref='canvas' width='400' height='300'></canvas>
      <img ref='img' src=''>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        field: {
          text: '',
        },
      }
    },
    methods: {},
    mounted() {
      const video = this.$refs.video
      const canvas = this.$refs.canvas
      const snap = this.$refs.tack
      const img = this.$refs.img
      const vendorUrl = window.URL || window.webkitURL
      // 媒体对象
      navigator.getMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia
      navigator.getMedia({
        video: true, // 使用摄像头对象
        audio: false  // 不适用音频
      }, (strem) => {
        video.src = vendorUrl.createObjectURL(strem)
        video.play()
      }, (error) => {
        // error.code
      });
      snap.addEventListener('click', () => {
        // 绘制canvas图形
        canvas.getContext('2d').drawImage(video, 0, 0, 400, 300)
        // 把canvas图像转为img图片
        img.src = canvas.toDataURL('image/png')
      })
    },
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped></style>