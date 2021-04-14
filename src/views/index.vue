<template>
  <div class="index">
      <router-view></router-view>
      <Tabbar :data="tabbarData"></Tabbar>
      
   
  </div>
</template>

<script>
import Tabbar from '../components/Tabbar'
import Header from '../components/Header'
export default {
    data(){
        return{
            tabbarData:[
                {title:"首页",icon:"home",path:'/home'},
                 {title:"订单",icon:"file-text-o",path:'/order'},
                  {title:"我的",icon:"user",path:'/me'}
            ]
        }
    },
components:{
Tabbar,
}
}
</script>

<style lang="scss" scoped>
.index{
    width: 100%;
    height: 100%;
    // background-color: #c00;
}
</style>>

</style>