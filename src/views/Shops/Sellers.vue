<template>
  <div class="sellers">
     <div class="content">
        <img :src="sellerInfo.header_image" alt="">
      <p class="title">{{sellerInfo.title}}</p>
      <p>{{sellerInfo.brand_intros[0].brief}}</p>
     </div>
     <div class="msg" @click="msg">
       查看品牌故事
     </div>
     <SellersMsg v-show="showMsg" @hide="hide" :sellerInfo="sellerInfo"></SellersMsg>
  </div>
</template>

<script>
import SellersMsg from './SellersMsg';
export default {
  data(){
    return{
      sellerInfo:[],
      showMsg:false
    }
  },
  components:{
    SellersMsg
  },
created(){
  this.getData()
},
methods:{
      getData() {
      this.$axios("/api/profile/seller").then(res => {
        console.log(res.data);
        this.sellerInfo = res.data;
      });
    },
    msg(){
      this.showMsg=true
    },
    hide(){
      this.showMsg=false
    }
  
}
}
</script>


<style lang="scss" scoped>
.sellers{
  width: 90%;
  margin: 10px auto;
.content{

  img{
  width: 100%;
  height: 200px;
}
.title{
  font-size: 14px;
  font-weight: bold;
}
p{
  font-size: 12px;
  color: #494949;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
}
.msg{
  font-size: 13px;
  color: #494949;
  text-align: center;
  height: 30px;
  line-height: 30px;
  margin-top: 15px;
}
}
</style>>

</styless>