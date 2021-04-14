<template>
  <div class="position">
        <p>当前定位</p>
        <i class="iconfont icon-position"></i>
        <span>{{address}}</span>
    </div>
</template>

<script>
export default {
props:{
    address:String
}
}
</script>

<style lang="scss" scoped>
  .position{
      font-size: 14px;
      p{
          margin-left: 20px;
      }
      span{
          margin-left: 10px;
          
      }
      .icon-position{
          color: #009eef;
          margin-left: 20px;
          line-height: 30px;
       
      }
  }
</style>>

</styles>