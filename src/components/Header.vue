<template>
  <div class="header" >
      <div class="header-left" v-show="isLeft" @click="$router.go(-1)">
          <i class="iconfont icon-backicon1"></i>
          <span >返回</span>
      </div>
      <span>{{title}}</span>
      <div class="header-right"></div>
  </div>
</template>

<script>
export default {
    props:{
        title:String,
        isLeft:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style lang="scss" scoped>
.header{
    width: 100%;
    height: 50px;
    background-color: #009eef;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-left{
    color: #fff;  
    display: flex;
    align-items: center;  
    }
    .icon-backicon1{
        font-size: 22px;
    }
    span{
        font-weight: bold;
        color: #fff;
    }
}
</style>