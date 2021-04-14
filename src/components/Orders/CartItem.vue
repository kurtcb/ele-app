<template>
  <div class="cart-item">
      <ul>
          <li @click="selectWare">
              <p>餐具份数</p>
               <span v-if="tableWare">{{tableWare}}份餐具 <i class="iconfont icon-youjiantou"></i></span>
              <span v-else>未选择 <i class="iconfont icon-youjiantou"></i></span>
              
              
          </li>
             <li @click="$router.push('/remark')">
              <p>订单备注</p>
               <span v-if="remark">{{remark}} <i class="iconfont icon-youjiantou"></i></span>
              <span v-else>口味偏好 <i class="iconfont icon-youjiantou"></i></span>
          </li>
             <li>
              <p>发票信息</p>
              <span v-if="ticket" @click="ticket=false">不需要开发票 <i class="iconfont icon-youjiantou"></i></span>
              <span v-else @click="ticket=true">需要开发票 <i class="iconfont icon-youjiantou"></i></span>
          </li>
          
      </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return{
            ticket:true
        }
    },
methods:{
    selectWare(){
        this.$emit('selectWare')
    }
},
computed:{
    ...mapGetters(['tableWare','remark'])
}
}
</script>

<style lang="scss" scoped>
.cart-item{
    background-color: #fff;
    margin: 10px;
    padding: 10px;
    ul{
        // display: flex;
       li{
           display: flex;
           justify-content: space-between;
           align-items: center;
           height: 40px;
           border-bottom: 1px solid #f1f1f1;
           p{
               font-weight: bold;
               font-size: 14px;
           }
           span{
               font-size: 13px;
               color: #c9c9c9;
           }
       }
    }
}
</style>>

</styles>