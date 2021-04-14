<template>
  <div class="nav">
      <div class="nav-head">
          <router-link to='/goods' class="item">点餐</router-link>
          <router-link to='/comments' class="item">评价</router-link>
          <router-link to='/sellers' class="item">商家</router-link>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav{
    .nav-head{
        display: flex;
        justify-content: space-around;
       .item{
           color: #000;
           width: 30%;
           text-align: center;
           height: 30px;
       }
       .router-link-active{
           color: #009eef;
           border-bottom: 3px solid #009eef;
           
       }
    }
}
</style>>

</style>