<template>
  <div class="food">
      <div class="back">
       <i class="iconfont icon-backicon1" @click="hide"></i>
      </div>
      <div class="content">
        <img :src="food.image_path" alt="">
        <p class="title">{{ food.name }}</p>
                <span> {{ food.description }} </span>
                <p class="sell">
                  月售{{ food.month_sales }} 好评率{{ food.satisfy_rate }}
                </p>
                <p class="prince">￥{{ food.specfoods[0].price }}</p>
                <CartCtrl :food="food" class="cart-ctrl"> </CartCtrl>
                <!-- <div>
                  {{food.count}}
                </div> -->
      </div>
     </div>
</template>

<script>
import CartCtrl from '../../components/Shops/CartCtrl'
export default {
  props: {
    isMsg: Boolean,
    food: {}
  },

  methods: {
    hide() {
      this.$emit("hide");
    },
  },
  components:{
    CartCtrl,
  }
};
</script>

<style lang="scss" scoped>
.food {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #fff;
  .back {
        margin-left: 5px;
        margin-top: 5px;
      .icon-backicon1 {
        font-size: 30px;
        
    
      }
    
  }
  .content {
    img {
      width: 90%;
      height: 300px;
    }
    .title {
      font-weight: bold;
      margin: 30px 0;
    }
    span {
      color: #494949;
    }
    .sell {
      color: #494949;
      font-size: 14px;
      margin-top: 20px;
    }
    .prince {
      color: #f00;
      font-weight: bold;
      margin-top: 20px;
    }
    .cart-ctrl{
      position: fixed;
      right: 50px;
      bottom: 150px;
    }
  }
}
</style>