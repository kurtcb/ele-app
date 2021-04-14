<template>
  <div class="index-shop">
    <div >
      <div v-for="(item, index) in restaurants" :key="index" class="shop-left" @click="$router.push('/shop')">
        <img :src="item.restaurant.image_path" alt="" />
      <div class="right">
          <div class="top">
                <i v-if="item.restaurant.is_premium">品牌</i>
        <p>{{ item.restaurant.name }}</p>
          </div>
        <!--  -->
        <Rating :rating="item.restaurant.rating"></Rating>
        <div class="middle">
              <span class="rate">{{item.restaurant.rating}}</span>
        <span>月售{{ item.restaurant.recent_order_num }}单</span>
        </div>
        <!--  -->
        
        
          <div v-if="item.restaurant.delivery_mode" class="delivery">
            <span class="icon-hollow">{{item.restaurant.delivery_mode.text}}</span>
          </div>
       <div class="bottom">
       <div>
                <span>¥{{ item.restaurant.float_minimum_order_amount }}起送</span>
        |
        <span>配送费¥{{ item.restaurant.float_delivery_fee }}</span>
       </div>
   
            <div class="righte">
                 <span>{{(item.restaurant.distance/1000).toFixed(2)}}km</span>
            |
            <span>{{item.restaurant.order_lead_time}}分钟</span>
            </div>

       </div>
           
      </div>
      </div>
    </div>
    <!-- <div class="shop-right" >
         <div class="right-list"  v-for="(item,index) in restaurants" :key="index">
             <p>{{item.restaurant.name}}</p>
             <p></p>
             <p></p>
         </div>
     </div> -->
  </div>
</template>

<script>
import Rating from '../components/Rating'
export default {
  props: {
    restaurants: Array,
  },
  components:{
      Rating,
  },
  methods:{
    // shopMsg(){
    //   this.$emit('shop')
    // }
  }
};
</script>

<style lang="scss" scoped>
.index-shop {
    // width: 100%;
  .shop-left {
    //   width: 100%;
      height: 100px;
      padding: 10px;
      border: 1px solid #ccc;
      background-color: #fff;
      position: relative;
    img {
        float: left;
      width: 100px;
      height: 100px;
    }
    .right{
        width: 100%;
        height: 80px;
        font-size: 10px;
        color: #494949;
        .top{
            display: flex;
            // justify-content: start;
            i{
                width: 30px;
                height: 20px;
                line-height: 20px;
                background-color: yellow;
                font-style: normal;
                margin: 5px;
                font-weight: 700;
                text-align: center;
            }
            p{ margin: 5px 0;
                font-weight: 700;
                font-size: 14px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
        .middle{
            // width: 300px;
            margin-top: 10px;
           span {
               margin-left: 10px;
           }
           
        }
        .bottom{
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
           
            .righte{
                margin-right: 5px;
            }
          //    span{
          //     //  margin-left: 10px;
          //  }
     
             
        }
        .delivery{
            width: 48px;
            height: 15px;
            line-height: 15px;
            background-color: #009eef;
            color: #fff;
            position: absolute;
            right: 50px;
            bottom: 30px;
            font-size: 10px;
        }
    }
  }
}
</style>