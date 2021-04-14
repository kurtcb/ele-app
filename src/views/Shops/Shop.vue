<template>
  <div class="shop" >
      <div class="content">
        <div class="bg" v-show="isBg">
          
      </div>
    <div class="shop-head"  >
      <div class="head-top">
        <img :src="shop.rst.scheme" alt="" />
        <i class="iconfont icon-backicon1" @click="$router.go(-1)" ></i>
      </div>

      <div class="head-bottom">
        <img :src="shop.rst.image_path" alt="" />
        <div class="head-title" @click="popShow">
          <p>{{ shop.rst.name }}</p> <i class="iconfont icon-arrow_right_fat"></i>
         
        </div>
        <span>
         评分{{ shop.rst.rating }}月售{{ shop.rst.recent_order_num
          }}蜂鸟专送约{{ shop.rst.order_lead_time }}
        </span>
      </div>
    <Favour :shop="shop" :isFavour="isFavour" @favourShow="favourShow" @favourHide="favourHide" ></Favour>
    </div>
    <Pop :shop="shop" v-show="isPop" style="z-index:999" @hidePop="hidePop" :isPop="isPop" :isBg="isBg" ></Pop>
    <Nav></Nav>
 
 <keep-alive>   <router-view/></keep-alive>
      </div>
  </div>
</template>

<script>
// import BScroll from "better-scroll";
import Pop from '../../components/Pop'
import Favour from '../../components/Shops/Favour'
import Nav from '../../components/Shops/Nav'
export default {
  data() {
    return {
      shop: [],
      isPop:false,
      isBg:false,
      favour:[],
      isFavour:false,

    };
  },
  created() {
    this.getShop();
  },
  components:{
      Pop,
      Favour,
      Nav,
  },
  methods: {
    //    initScroll() {
    //   this.scroll = new BScroll(this.$refs.shop, {
    //     click: true,
    //   });
    // },
    getShop() {
      this.$axios("/api/profile/batch_shop").then((res) => {
        console.log(res.data);
        this.shop = res.data;
      
        // console.log(this.favour);
      });
    },
    popShow(){
        this.isPop=true,
        this.isBg=true
        // console.log(this.isBg);
    },
    hidePop(){
        this.isBg=false,
        this.isPop=false
        console.log(1);
    },
    favourShow(){
    //   this.$emit('favourShow')
      this.isFavour=true,
       this.isBg=true;
    },
      favourHide(){
        this.$emit('favourHide')
      this.isFavour=false,
       this.isBg=false;
    },

  },
};
</script>

<style lang="scss" scoped>
.shop {
    // background-color: #f00;
    height:100%;
    // .content{
    //   // height: 100%;
    //   // height: 2000px;
    // }
    .bg{
        position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
//   transition: all 0.3s ease-in-out;
  z-index: 99;
    }
  background-color: #fff;
  .shop-head {
    .head-top {
      img {
        width: 100%;
        height: 100px;
      }
      i {
        position: absolute;
        left: 10px;
        top: 10px;
        color: #fff;
        font-size: 20px;
      }
   
    }
    .head-bottom {
      img {
        width: 70px;
        height: 70px;
        position: absolute;
        //   top: 50%;
        top: 50px;
        left: 50%;
        transform: translate(-50%);
      }
        .head-title {
        display: flex;
        justify-content: flex-start;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 80%;
        // margin-top: 25px;
        font-size: 16px;
        font-weight: bold;
        margin: 0 auto;
        margin-top: 20px;
        i{
            line-height: 24px;
        }
      }
       span{
           display: flex;
           justify-content: center;
           font-size: 13px;
           color: #494949;
           text-align: center;
       }
    }
  }
}
</style>