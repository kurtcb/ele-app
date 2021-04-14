<template>
  <div class="address">
    <Header title="选择收获地址" :isLeft="true"></Header>
    <!-- titlt不要加冒号 -->
 <div class="search-wrap">
        <div class="search">
      <div class="search-left" @click="$router.push('/city')">
       <span v-if="(location.city)"> {{ location.city }}</span>
       <span v-else> {{ location.name }}</span>
        <i class="iconfont icon-arrow-down"></i>
      </div>
      <div class="search-right">
          <i class="iconfont icon-i-search"></i>
        <input type="text" v-model="search_val" placeholder="小区/写字楼/学校等" />
      </div>
    </div>
  <Location :address="address"  @click.native="$router.push('/home')"></Location>
  <!-- 子组件点击事件无效加native -->
    <div class="search-list">
        <ul>
            <li v-for="(item,index) in positionList" :key="index" @click="setPosition(item)">
                <p>{{item.name}}</p>
                <span>{{item.district}} {{item.address}}</span>
            </li>
        </ul>
    </div>
  </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Header from "../components/Header";
import Location from '../components/Location.vue';
export default {
    data(){
        return{
            search_val:"",
            positionList:[]
        }
    },
  computed: {
    ...mapGetters(["address", "location"]),
  },
  components: {
    Header,
    Location,
  },
  watch: {
    search_val() {
      this.searchPlace();
    }
    // watch监听的数据记得写道data里
  },
  methods:{
      ...mapActions(['setAddress',]),
      setPosition(item){
          this.$router.push('/home')
          this.setAddress( item.district+item.address)
   
   console.log(this.location);
      },
      searchPlace(){
          let self= this
          AMap.plugin('AMap.Autocomplete', function(){
  // 实例化Autocomplete
  var autoOptions = {
    //city 限定城市，默认全国
    city: self.city
  }
  var autoComplete= new AMap.Autocomplete(autoOptions);
  autoComplete.search(self.search_val, function(status, result) {
    // 搜索成功时，result即是对应的匹配数据
    console.log(result);
    console.log(result.tips);
    console.log(self.positionList);
    
    self.positionList=result.tips
  })
})
      }
  }
};
</script>

<style lang="scss" scoped>
.address {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #ccc;
  .search-wrap{
      position: fixed;
      top: 50px;
      background-color: #fff;
      width: 100%;
      height: 120px;
      margin-top: 0;
      .search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 40px;
    background-color: #ccc;
    margin: 5px auto;
    border-radius: 10px;
    .search-left {
      margin-left: 10px;
      display: flex;
      justify-content: space-around;
      span{
          width: 50px;
          overflow: hidden;
          text-overflow: ellipsis;
      }
    }
    .search-right {
      width: 100%;
      position: relative;
    .icon-i-search{
        position: absolute;
        left: 10px;
        line-height: 40px;
    }
      input {
        background-color: #ccc;
        width: 70%;
        height: 40px;
        border: none;
        margin-left: 25px;
        outline: none;
      }
    }
  }

  }
  .search-list{
      width: 100%;
      position: fixed;
      top: 180px;
      background-color: #fff;
      li{
          border:1px solid #ccc;
          padding: 5px;
          p{
              font-weight: bold;
          }
          span{
              color: #333;
              font-size: 14px;
          }
      }
  }
}
</style>