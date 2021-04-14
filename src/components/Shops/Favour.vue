<template>
  <div class="favour">
    <div class="favour-top">
      <div class="top-one">
        <span :style="{ background: '#' + shop.rst.activities[0].icon_color }">
          {{ shop.rst.activities[0].icon_name }}
        </span>
        <p>{{ shop.rst.activities[0].description }}</p>
      </div>
      <div class="top-two">
        <p>{{ shop.rst.activities.length }}个优惠</p>
        <i class="iconfont icon-arrow-down" @click="favourShow"></i>
      </div>
    </div>
   <div class="favour-bottom">
      <p>公告{{ shop.rst.promotion_info }}</p>
   </div>
   <div class="favour-list" v-show="isFavour">
    <div class="title">
       <p>优惠活动</p>
       <i class="iconfont icon-chahao" @click="favourHide"></i>
    </div>
     <ul>
       <li v-for="(item,index) in shop.rst.activities" :key="index" >
         <span :style="{background:'#'+item.icon_color}">
           {{item.icon_name}}
         </span>
         <p>{{item.description}}</p>
       </li>
     </ul>
   </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {},
    isFavour:Boolean
  },
  methods:{
    favourShow(){
      this.$emit('favourShow')
      // this.favourShow=true
    },
    favourHide(){
        this.$emit('favourHide')
      // this.favourShow=false
    }
  }
};
</script>

<style lang="scss" scoped>
.favour {
   font-size: 12px;
   color: #494949;
  .favour-top {
    width: 80%;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
    .top-one{
      
      display: flex;
      justify-content: flex-start;
      span{
        color: #fff;
        margin-right: 10px;
      }
      p{
        color: #333;
      }
    }
    .top-two{
     display: flex;
      justify-content: flex-start;
    }
  }
  .favour-bottom{
    width: 80%;
    margin: 10px auto;
  }
  .favour-list{
    z-index: 999;
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    height: 200px;
    .title{
      margin-top: 20px;
      text-align: center;
      font-size: 14px;
      font-weight: bold;
      i{
        position: absolute;
        right: 5px;
        top: 5px;
      }
    }
    ul{
      width: 80%;
      margin: 5px auto;
      li{
        display: flex;
        justify-content: flex-start;
        margin: 10px;
      }
    }
  }
}
</style>