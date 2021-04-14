<template>
  <div class="delivery">
    <div class="top">
      <div class="left">
            <p class="title">送达时间</p>
        <span>{{orderInof.shop.delivery_mode.text}}</span>
      </div>
        <p>尽快送达({{deliveryTime(orderInof.shop.order_lead_time)}})送达<i class="iconfont icon-youjiantou"></i></p>
        
    </div>
    <div class="bottom">
        <p>支付方式</p>
        <p class="pay">在线支付</p>
    </div>
  </div>
</template>

<script>
export default {
props:{
    orderInof:Object
},
created(){
    console.log(this.orderInof);
},
methods:{
     deliveryTime(time) {
      let date = new Date();
      date.setMinutes(date.getMinutes() + time);
      return date.getHours() + ":" + date.getMinutes();
    }
}
}
</script>


<style lang="scss" scoped>
.delivery{
    background-color: #fff;
    margin: 10px;
    padding: 10px;
    .top{
        height: 40px;
        border: 1px solid #f1f1f1;
        display: flex;
        justify-content: space-between;
        align-items: center;
      .left{
            .title{
            font-weight: bold;
            font-size: 14px;
        }
        span{
            color: #fff;
            background-color: #009eef;
            font-size: 12px;
        }
      }
        p{
            font-size: 12px;
            color:#009eef;
            font-weight: bold;
            i{
                color: #000;
                font-weight: normal;
            }
        }
    }
    .bottom{
        height: 40px;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        font-weight: bold;
        align-items: center;
        .pay{
            color: #009eef;
        }
    }
}
</style>>

</styless>