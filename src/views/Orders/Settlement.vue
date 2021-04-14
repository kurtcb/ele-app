<template>
  <div class="settlement">
      <Header title='确认订单' :isLeft=true></Header>
     <div class="content">
          <div class="address">
          <p>订单配送至</p>
            <div class="add-select" >
              <span v-if="haveAddress==true" @click.stop="$router.push('/myAddress')">选择收获地址</span>
        <span v-else @click.stop="$router.push('/myAddress')">新增收获地址</span>
            </div>
      <div class="user-address">
          <p>{{selectAddress.address}}</p>
        <span> {{selectAddress.name}} {{selectAddress.sex}} {{selectAddress.phone}}</span>
      </div>
        <i class="iconfont icon-youjiantou"></i>
      </div>
      <!-- <div>
        {{orderInof}}
      </div> -->
      <Delivery :orderInof="orderInof"></Delivery>
      <CartGroup :orderInof="orderInof"></CartGroup>
      <CartItem @selectWare="selectWare"> </CartItem>
     </div>
     <TableWare v-show="isWare" @closeWare="closeWare" ></TableWare>
     <div class="foot">
      <span> ￥{{totalPrice}}</span>
      <p @click="$router.push('/pay')">去结算</p>
     </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from '../../components/Header'
import Delivery from '../../components/Orders/Delivery'
import CartGroup from '../../components/Orders/CartGroup'
import CartItem from '../../components/Orders/CartItem'
import TableWare from '../../components/Orders/TableWare'
export default {
    data(){
        return{
            haveAddress:false,
            isWare:false,
        }
    },
    computed:{
        ...mapGetters(['selectAddress','orderInof','totalPrice'])
    },
components:{
    Header,
    Delivery,
    CartGroup,
    CartItem,
    TableWare,
},
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (!vm.userInfo) {
        vm.getData();
      }
    });
  },
methods:{
       getData() {
      this.$axios(`/api/user/user_info/${localStorage.ele_login}`).then(res => {
        console.log(res.data);
        if (res.data.myAddress.length > 0) {
          this.haveAddress = true;
        } else {
          this.haveAddress = false;
        }
      });
    },
    selectWare(){
      this.isWare=true
    },
    closeWare(){
      this.isWare=false
    }
}
}
</script>

<style lang="scss" scoped>
.settlement{
  // height: 100%;
  //   position: fixed;
  //   left: 0;
  //   right: 0;
  //   top: 0;
  //   bottom: 0;
    // background-color: #DCDCDC;
          background-image: linear-gradient(
      0deg,
      #f5f5f5,
      #f5f5f5 65%,
      hsla(0, 0%, 96%, 0.3) 75%,
      hsla(0, 0%, 96%, 0)
    ),
    linear-gradient(270deg, #009eef, #009eef);
    padding-bottom: 50px;
    .content{
        // height: 300px;
        .address{
            color: #fff;
            font-size: 12px;
            i{
              position: fixed;
              right: 10px;
              top: 90px;
            }
                p{
                margin: 10px ;
            }
         .add-select{
          
            span{
                font-size: 16px;
                font-weight: bold;
                margin-left: 10px;
             
            }
         }
            .user-address{
              p{
                font-weight: bold;
                font-size: 14px;
                width: 90%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
              span{
                margin: 10px;
              }
            }
        }
    }
    .foot{
      height: 50px;
  background-color: #3c3c3c;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  span{
    margin-left: 20px;
  }
  p{
    background-color: #00e067;
    height: 50px;
    width: 100px;
    text-align: center;
    line-height: 50px;
  }
    }
}
</style>