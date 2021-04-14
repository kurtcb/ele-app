<template>
  <div class="loading">
    <img src="http://img.lanrentuku.com/img/allimg/1212/5-121204193R0-50.gif" alt="">
    <van-loading class="loadingVant" vertical type="spinner">加载中...</van-loading>
  </div>
</template>
 
<script>
  export default {
    name: 'loading',
    data () {
      return {}
    },
  }
</script>
<style scoped>
  .loading{
    position: fixed;
    top:0;
    left:0;
    z-index:121;
    width: 100%;
    height: 100%;
    /* background: rgba(0,0,0,0.3); */
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  .loading img{
  	width: 50px;
  	height: 50px;
    margin:300px auto;
  }
</style>