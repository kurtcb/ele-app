<template>
  <div class="city">
    <div class="header">
      <div class="header-top">
        <div class="top-wrap">
          <i class="iconfont icon-i-search"></i>
          <input type="text" placeholder="请输入城市名" v-model="city_val"  >
          
          <span @click="$router.go(-1)">取消</span>
        </div>
      </div>   
    </div>
     <div class="search-list" v-if="(city_val)">
        <li v-for="(item,index) in searchList" :key="index" @click="selectCity(item)">
          {{item.name}}
        </li>
      </div>
    <div class="bottom" v-else>
       <Location :address="location.name"></Location>
    <Alphabel ref="allCity" :cityInfo="cityInfo" :keys="keys" :hotCities="hotCities" ></Alphabel>
    </div>
  </div>
</template>

<script>
import Location from "../components/Location";
import Alphabel from "../components/Alphabel";
import { mapGetters,mapActions } from "vuex";
export default {
    data(){
        return{
            cityInfo:[],
        keys:[],
        hotCities:[],
        allCities:[],
        searchList:[],
        city_val:""
        }
    },
  created(){
      this.getCityInfo()
  },
  watch:{
    city_val(){
      this.citySearch()
      console.log(this.city_val);
    }
  },
  methods:{
    ...mapActions(['setLocation']),
      getCityInfo(){
          this.$axios('/api/posts/cities')
          .then((res)=>{
              
              this.cityInfo=res.data
              let keys=Object.keys(res.data)
              keys.pop(),
              keys.sort(),
              // console.log(keys);
              console.log(this.cityInfo);
              this.keys=keys
              this.hotCities=res.data.hotCities
              this.$nextTick(()=>{
                 this.$refs.allCity.initScroll()
                 this.keys.forEach(key => {
                  //  console.log(key);
                   this.cityInfo[key].forEach(city=>{
                    //  console.log(city);
                      this.allCities.push(city)
                   });
                  
                 });
              });
              // console.log(this.location);
          }).catch((err)=>{
              console.log(err);
          })
      },
      citySearch(){
        if(!this.city_val){
          this.serchList=[]
        }else{
          this.searchList=this.allCities.filter(item=>{
            return item.name.indexOf(this.city_val)!=-1
          })
          console.log(this.searchList);
        }
      },
       selectCity(item){ 
      this.setLocation(item)
      console.log(item);
      this.$router.push('/address')
  },
      
  },
  computed: {
    ...mapGetters(["location"]),
  },
  components: {
    Location,
    Alphabel,
  },
};
</script>

<style lang="scss" scoped>
.city {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  .header {
    background-color: #fff;
    height: 70px;
    .header-top {
      padding-top: 10px;
      margin-bottom: 20px;
      .top-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .icon-i-search {
          font-size: 20px;
          position: absolute;
          left: 50px;
        }
        input {
          background-color: #ccc;
          width: 70%;
          height: 40px;
          border: none;
          outline: none;
          border-radius: 10px;
          text-indent: 40px;
        }
        span {
          margin-left: 15px;
          color: #009eef;
        }
      }
    }
  }
  .search-list{
    li{
      border: 1px solid #ccc;
      height: 40px;
      background-color: #fff;
      line-height: 40px;
      
    }
  }
  .bottom{
     background-color: #fff;
  }
}
</style>