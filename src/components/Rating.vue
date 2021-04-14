<template>
  <div class="rating">
    <i v-for="(item,index) in itemClasses" :key="index"  :class="item"></i>
       
  </div>

</template>

<script>
const LENGTH = 5;
// 星星对应的class
const CLS_ON = "iconfont icon-xingxing";
const CLS_HALF = "iconfont icon-star-half";
const CLS_OFF = "iconfont icon-xingxing1";
export default {
    props:{
        rating:Number
    },
    
computed:{
     itemClasses() {
      // 4.8 四个全星 1个半星
      let result = [];
        // console.log(this.rating);
      // 对分数进行处理, 向下取0.5的倍数
      let score = Math.floor(this.rating * 2) / 2;
    //   console.log(score);
      // 控制半星
      let hasDecimal = score % 1 !== 0;
      // console.log(hasDecimal);
      // 全星
      let integer = Math.floor(score);
// console.log(integer);
      // 全星放入到数组中
      for (let i = 0; i < integer; i++) {
        result.push(CLS_ON);
      }

      // 半星
      if (hasDecimal) {
        result.push(CLS_HALF);
      }

      // 补齐
      while (result.length < LENGTH) {
        result.push(CLS_OFF);
      }
// console.log(result);
      return result;
    }
  
}
}
</script>

<style lang="scss" scoped>
.rating{
    color: #ffbe00;
    font-size: 10px;
}
</style>