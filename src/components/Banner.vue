<template>
    <div class="swiper">
      <van-swipe :autoplay="2000" :loop="true" indicator-color="#fff">
        <van-swipe-item v-for="(image, index) in swipeImgs" :key="index">
          <img :src="image">
        </van-swipe-item>      
      </van-swipe>
    </div>
</template>

<script>
// import { Toast } from 'vant';

export default {
//   methods: {
//     onChange(index) {
//       Toast('当前 Swipe 索引：' + index);
//     },
//   },
data(){
    return{
        SwiperImg:[],
        entries:[],
    }
},
props:{
    swipeImgs:Array,
    entries:Array
}
};
</script>

<style lang="scss" scoped>
   .swiper {
     width: 100%;
     height: 100px;
    .van-swipe{
      width: 100%;height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      background: #fff;
    }
    .food{
        width: 30px;
        display: flex;
           flex-direction: row;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
     

        img{
            width: 20px;
            height: 20px;
        }
    }
  }
</style>