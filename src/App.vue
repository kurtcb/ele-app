<template>
  <div id="app">
    <!-- 验证阿门226244 -->
  	<Loading v-show="loading"></Loading>
    <keep-alive>
      <router-view></router-view>
      </keep-alive>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
import Loading from './components/Loading'
export default {
  created(){
    this.getLocation()
  },
  components:{
    Loading
  },
  computed:{
     ...mapState([
                'loading'
            ])

  },
  methods:{
    ...mapActions(['setAddress','setLocation']),
    getLocation(){
      let self= this
      AMap.plugin('AMap.Geolocation', function() {
  var geolocation = new AMap.Geolocation({
    // 是否使用高精度定位，默认：true
    enableHighAccuracy: true,
    // 设置定位超时时间，默认：无穷大
    timeout: 10000,
    // 关于定位 谷歌不好使 edg好使
  })

  geolocation.getCurrentPosition(function(status,result){
        if(status=='complete'){
            onComplete(result)
        }else{
            onError(result)
        }
  });

  function onComplete (data) {
    // data是具体的定位信息
    self.setAddress(data.formattedAddress)
    // self.$store.dispatch("setAddress",data.formattedAddress)
    self.setLocation(data.addressComponent)
    console.log(data);

  }

  function onError (data) {
    // 定位出错
    console.log(data);
  }
})
    }
  }
}
</script>
<style lang="scss">

*{
   margin: 0;
  padding: 0;
}
#app{
  width: 100%;
  // height: 100%;
  background-color: #ddd;
  list-style: none;
}
html{
  width: 100%;
    height: 100%;
}
</style>
