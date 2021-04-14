<template>
  <div class="cart-shop" >
      <div class="cart-bg" v-show="isList" @click.self="isList=false">
          <div class="list">
              <div class="list-top">
                  <p>已选商品</p>
                  <p @click="clearList">清空</p>
              </div>
              <div class="list-item">
                 <div class="content">
                      <ul>
                      <li v-for="(item,index) in selectFoods" :key="index" >
                         <div class="txt">
                              <h4>
                              {{item.name}}
                          </h4>
                          <p>￥{{item.activity.fixed_price}}</p>
                         </div>
                          <CartCtrl :food="item" class="cartCtrl"></CartCtrl>
                      </li>
                  </ul>
                 </div>
              </div>
          </div>
      </div>
      <div class="cart-body">
           <div class="cart">
      <div class="totalCount">
        {{ totalCount }}
      </div>
      <i class="iconfont icon-gouwucheman" @click='showList'></i>
    </div>

    <div class="left-txt">
      <div class="left">
        <span v-if="isEmpty">未选购商品</span>
        <span v-else>￥{{totalPrice.toFixed(2)}}</span>
      </div>

      <p>另需配送费{{ shop.rst.float_minimum_order_amount }}元</p>
    </div>
    <div class="btn" @click="settle">￥{{ shop.rst.float_minimum_order_amount }}起送</div>


    <div class="shop-list" v-show="isList">
        
    </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import CartCtrl from '../../components/Shops/CartCtrl'
// import BScroll from 'better-scroll'
export default {
  data() {
    return {
      // isEmpty:false
      totalCount: 0,
      totalPrice: 0,
      isList:false,
      selectFoods:[],
      scroll:null,
    };
  },
  computed: {
    isEmpty() {
      let isEmpty = true;
      this.totalCount = 0;
      this.totalPrice = 0;
      this.selectFoods=[],
      this.shop.recommend.forEach((ele) => {
        ele.items.forEach((eles) => {
        //   console.log(eles.count)
          this.totalCount += eles.count;
           this.totalPrice +=eles.activity.fixed_price * eles.count;
          if (eles.count) {
            isEmpty = false;
             this.selectFoods.push(eles)
    
          }
        });
      });
      this.shop.menu.forEach((ele) => {
        ele.foods.forEach((eles) => {
        //   console.log(eles.count);
          this.totalCount += eles.count;
          this.totalPrice +=eles.activity.fixed_price * eles.count;
          if (eles.count) {
            isEmpty = false;
            this.selectFoods.push(eles)
         
          }
        });
      });

      // console.log(this.totalCount);
       
      return isEmpty;
    },
  },
//   created() {
// this.initScroll()
//   },
  // watch:{
  //     count(n,o){
  //         if(n){
  //             this.isEmpty=false
  //         }
  //     }
  // },
  props: {
    shop: Object,
  },
  components:{
      CartCtrl
  },
  methods:{
    //     initScroll() {
    //   this.scroll = new BScroll(this.$refs.scroll, {
    //     click: true,
    //   });                             
    // },
    showList(){
        this.isList=true
        // this.initScroll()
    },
    clearList(){
        this.selectFoods.forEach((ele)=>{
            ele.count=0
            this.isList=false
        })
        // console.log(this.selectFoods);
        },
        ...mapActions(['setOrderInfo']),
        settle(){
          this.$router.push('/settlement')
          // console.log(this.selectFoods);
          this.setOrderInfo({selectFoods:this.selectFoods,shop:this.shop.rst})
        }
  }
};

</script>

<style lang="scss" scoped>
.cart-shop {
       width: 100%;
      height: 100%;
  .cart-bg{
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
    //   z-index: 9999;
      .list{
          width: 100%;
        //   height: 200px;
          background-color: #fff;
          position: fixed;
          bottom: 100px;
          .list-top{
              display: flex;
              justify-content: space-between;
              background-color: #DCDCDC;
              height: 40px;
              line-height: 40px;
          }
          .list-item{
              height: 250px;
            // //   position: relative;
            //   left: 0;
            //   top: 0;
            //   bottom: 130px;
              overflow: hidden;
          .content{
                  li{
                      display: flex;
                  justify-content: space-between;
                  border: 1px solid #f1f1f1;
                  margin: 10px;
                  .txt{
                      display: flex;
                      justify-content: space-between;
                      width: 60%;
                      h4{
                      font-size: 16px;
                  }
                  p{
                      color: #f00;
                  }
                  }
                  
              }
          }
          }
      }
  }
      .cart-body{
      position: fixed;
  left: 0;
  bottom: 50px;
  background-color: rgba(61, 61, 63, 0.9);
  height: 50px;
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: space-between;
        .cart {
    position: relative;
    left: 20px;
    bottom: 10px;
    width: 40px;
    height: 40px;
    background-color: #009eef;
    border-radius: 50%;
    border: 5px solid rgba(61, 61, 63, 0.9);
    text-align: center;
    line-height: 40px;

    i {
      color: #fff;
      font-size: 20px;
      position: relative;
      top: -20px;
    }
    .totalCount {
      position: relative;
      left: 30px;
      top: -10px;
      background-color: #f00;
      font-size: 12px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      text-align: center;
      line-height: 20px;
    }
  }
  .left-txt {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    .left {
      margin-left: 30px;
      font-size: 12px;
      font-weight: bold;
    }
    p {
      font-size: 12px;
      color: #ccc;
      margin-left: 20px;
    }
  }
  .btn {
    width: 100px;
    height: 100%;
    background-color: #38ca73;
    color: #fff;
    text-align: center;
    line-height: 50px;
  }
  }
}
</style>

</style>