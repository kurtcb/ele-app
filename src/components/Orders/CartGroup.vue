<template>
  <div class="cart-group">
      <div class="title">
          {{orderInof.shop.name}}
      </div>
      <div class="foods" v-for="(item,index) in orderInof.selectFoods" :key="index">
          <img :src="item.image_path" alt="">
         <p> {{item.name}}</p>
          <p>x{{item.count}}</p>
        <p>
              ￥{{item.specfoods[0].price}}
        </p>
      </div>
      <div class="pay-price">
          <p>配送费</p>
          <p>{{orderInof.shop.float_delivery_fee}}</p>
      </div>
      <div class="total">
          小计￥{{totalPrice}}
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
props:{
    orderInof:Object
},
computed:{
    ...mapGetters(['totalPrice'])
}

    

}
</script>

<style lang="scss" scoped>
.cart-group{
    background-color: #fff;
    margin: 10px;
    padding: 10px;
    .title{
        font-weight: bold;
        margin-bottom: 15px;
    }
    .foods{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        border-bottom: 1px solid #f1f1f1;
        img{
            width: 30px;
            height: 30px;
        }
        font-size: 13px;
    }
    .pay-price{
        font-size: 13px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
    }
    .total{
    margin-left: 70%;
    }
}

</style>>

</styles>