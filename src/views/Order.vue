<template>
  <div class="order">
      <div class="order-item" v-for="(item,index) in orderList" :key="index">
       <div class="header" v-if="item.orderInfo">
         <img :src="item.orderInfo.shop.image_path" alt="">
      <div class="header-right">
            <div class="header-top">
          <p> {{item.orderInfo.shop.name}}</p>
        <!-- <p> {{item.orderInfo.selectFoods[0].name}} </p> -->
        <span>订单已完成</span>
        </div>
        <p>{{item.date}}</p>
      </div>
       </div>
       <div class="middle"  v-if="item.orderInfo">
         <li v-for="(items,i) in item.orderInfo.selectFoods" :key="i" >
           
         <div >
           {{items.name}}
         </div>
         
         </li>
        <p>￥{{item.totalPrice}}</p>
       </div>
       <div class="bottom">
        <p>再来一单</p>
       </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      orderList:[]
    }
  },
  beforeRouteEnter(to,from,next){
    next(
      vm=>{
        vm.getData()
      }
    )
  },
  methods:{
    getData(){
      this.$axios(`/api/user/orders/${localStorage.ele_login}`)
      .then((res)=>{
        console.log(res);
        this.orderList=res.data.orderlist
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.order{
  .order-item{
    background-color: #fff;
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    .header{
      display: flex;
        align-items: center;
        .header-right{
          .header-top{
            width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          p{
            width:200px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #000;
            font-size: 15px;
          }
          span{
            font-size: 13px;
            margin-left: 50px;
          }
         
        }
        }
      img{
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
       p{
            font-size: 13px;
            color: #ccc;
          }
    }
  }
  .middle{
    li{
      border-bottom: 1px solid #ccc;
      padding: 5px;
      display: flex;
      margin-left: 30px;
    }
    p{
      font-weight: bold;
      font-size: 14px;
      margin-left: 85%;
    }
  }
  .bottom{
    p{
      width: 80px;
      height: 25px;
      border: 1px solid #ccc;
      font-size: 14px;
      text-align: center;
      line-height: 25px;
      margin-left: 78%;
      margin-top: 10px;
    }
  }
}
</style>>

</style>