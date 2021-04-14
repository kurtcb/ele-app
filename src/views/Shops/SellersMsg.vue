<template>
  <div class="msgs">
      <div class="back">
           <i class="iconfont icon-backicon1" @click="hide"></i>
      </div>

<div class="content">
            <img :src="sellerInfo.header_image" alt="">
      <div class="title">{{sellerInfo.title}}</div>
      <p>{{sellerInfo.brand_intros[0].brief}}</p>
</div>
  </div>
</template>

<script>
export default {
    props:{
        sellerInfo:{}
    },
    methods:{
        // msg(){
        //     this.$emit('msg')
        // }
        hide(){
            this.$emit('hide')
        }
    }
}
</script>


<style lang="scss" scoped>
.msgs{
 position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #fff;
  .back{
      .icon-backicon1{
          font-size: 25px;
          position: fixed;
          left: 15px;
          top: 10px;
          color: #fff;
      }
  }
.content{
    width: 90%;
        margin: 0 auto;
  img{
      width:100%;
      height: 150px;
      margin-top: 12px;
  }
  .title{
      font-style: 15px;
      font-weight: bold;
      margin-bottom: 20px;
      margin: 20px;
  }
  p{
      font-style: 14px;
  }
}
}
</style>