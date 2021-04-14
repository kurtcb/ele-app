<template>
  <div class="table-ware">
      <div class="title">
          <p>---选择餐具份数---</p>
          <i class="iconfont icon-chahao" @click="closeWare"></i>
      </div>
      <li v-for="(item,index) in list" :key="index" class="item" :class="{'selectIem':curIndex==index}" @click="selectItems(index)">
          {{item}}
      </li>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
data(){
    return{
        list:[1,2,3,4,5,6],
        curIndex:0,
    }
},
methods:{
    ...mapActions(['setTableWare']),
    selectItems(index){
        this.curIndex=index,
        this.setTableWare(index+1)
        this.closeWare()
        // console.log(1);
    },
    closeWare(){
        this.$emit('closeWare')
    }
}
}
</script>

<style lang="scss" scoped>
.table-ware{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 300px;
    background-color: #fff;
    z-index: 999;
    margin-bottom: 50px;
    .title{
        
       p{
           font-weight: bold;
           text-align: center;
           margin: 10px;
       }
       i{
           position: absolute;
           right: 10px;
           top: 10px;
       }
    }
    .item{
        height: 15px;
        text-align: center;
        line-height: 15px;
        margin: 20px;
    }
    .selectIem{
        color: #009eef;
    }
}

</style>