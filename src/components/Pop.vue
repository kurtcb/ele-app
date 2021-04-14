<template>
  <div class="pop">
     <div class="pop-title">
         <span>品牌</span>
         <p> {{shop.rst.name}} </p>
     </div>
    <ul>
         <li>
         <p> {{shop.rst.rating}}</p>
         <span>评分</span>
     </li>
       <li>
         <p> {{shop.rst.recent_order_num}}</p>
         <span>月售</span>
     </li>
       <li>
         <p>蜂鸟专送</p>
         <span>约{{shop.rst.order_lead_time}}分钟</span>
     </li>
       <li>
         <p>{{shop.rst.float_delivery_fee}}</p>
         <span>配送费</span>
     </li>
       <li>
         <p> {{shop.rst.distance}}</p>
         <span>距离</span>
     </li>
    </ul>
      <div class="pop-bottom">
          <p>——公告——</p>
          <span>
              {{shop.rst.promotion_info}}
          </span>
      </div>
      <i class="iconfont icon-chahao" @click="hidePop"></i>
  </div>
</template>

<script>
export default {
props:{
    shop:{},
    isPop:Boolean,
     isBg:Boolean
},
methods:{
    hidePop(){
        this.$emit('hidePop')
    }
}
}
</script>

<style lang="scss" scoped>
.pop{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-60%);
    z-index: 999;
    width: 80%;
    height: 250px;
    
    background-color: #fff;
    .pop-title{
        display: flex;
        justify-content: center;
        padding: 20px;
        align-items: stretch;
        
       span{
           width: 40px;
           height: 20px;
           background-color: yellow;
           font-size: 10px;
           margin-right: 10px;
           text-align: center;
           line-height: 20pxs;
           font-weight: bold;
        }
        p{
            font-size: 20px;
            font-weight: bold;
        }
    }
    ul{
        margin-top: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        li{
              text-align: center;
           p{
               font-weight: bold;
               font-size: 16px;
           }
           span{
               color: #494949;
               font-size: 12px;
           }
        }
    }
    .pop-bottom{
        margin-top: 10px;
        text-align: center;
        color: #494949;
        p{
            
            font-size: 12px;
        }
        span{
            font-size: 16px;
            font-weight: bold;

        }
    }
    .icon-chahao{
        font-size: 20px;
       position: fixed;
       left: 50%;
      transform: translate(-50%);
      margin-top: 80px;
      color: #fff;
    }
}

</style>