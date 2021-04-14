<template>
  <div class="cart-ctrl">
      <span class="dele"  @click.stop="Dele" v-show="food.count>0">
          -
      </span>
      <span>
          {{food.count}}
      </span>
      <span  @click.stop="Add" class="add">
          +
      </span>
  </div>
</template>

<script>
// import {mapGetters,mapActions}from 'vuex'
export default {
    // data(){
    //     return{
    //         counts:this.count
    //     }
    // },
    props:{
        // shopInfo:{},
        food:Object
    },
computed:{
    // ...mapGetters(['shopCounts'])
},

methods:{

 Add(){
    this.food.count++
    // console.log(this.food.count);
 },
 Dele(){
    this.food.count--
 }
    // ...mapActions(['setShopCounts']),
    // countAdd(){
    //     this.setShopCounts(this.shopCounts+1)
    // },
    // countDele(){
    //      this.setShopCounts(this.shopCounts-1)
    // }
}
}
</script>

<style lang="scss" scoped>
.cart-ctrl{
    .add{
        display: inline-block;
        width: 15px;
        height: 15px;
        background-color: #009eef;
        color: #fff;
        // font-weight: bold;
        // font-size: 16px;
        border-radius: 50%;
        text-align: center;
        line-height: 15px;
    }
    .dele{
         display: inline-block;
        width: 15px;
        height: 15px;
        background-color: #009eef;
        color: #fff;
        // font-weight: bold;
        // font-size: 16px;
        border-radius: 50%;
        text-align: center;
        line-height: 15px;
    }
}
</style>

</style>