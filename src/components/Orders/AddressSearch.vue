<template>
  <div class="address-search" v-if="showSearch">
    <Header title="选择收获地址" :isLeft="true"></Header>
    <div class="input-content">
      <i class="iconfont icon-i-search"></i>
      <input type="text" placeholder="请输入学校/小区" v-model="search_val" />
    </div>
    <div class="search-list" v-show="search_val">
        <ul>
            <li v-for="(item,index) in areaList.tips" :key="index" @click="selectAddress(item)">
                <p class="title">{{item.name}}</p>
                <p> {{item.district}} {{item.address}}</p>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from "../../components/Header";
export default {
    data(){
        return{
            search_val:'',
            areaList:[],
        }
    },
    computed:{
        ...mapGetters(['location'])
    },
  props: {
    showSearch: Boolean,
    AddressInfo:Object
  },
  components: {
    Header,
  },
  watch:{
      search_val(n,o){
          console.log(n);
          this.searchMsg(n)
        //   console.log(this.location);
        //   console.log(this.location.city);
      }
  },
  methods:{
      selectAddress(item){
        //   console.log(item);
         this.AddressInfo.address = item.name + item.district + item.address;
         this.$emit('close')
        // console.log(this.AddressInfo);
      },
    //   找不到数据看看是不是没用箭头函数
      searchMsg(n){
          AMap.plugin('AMap.Autocomplete', ()=>{
  // 实例化Autocomplete
  var autoOptions = {
    //city 限定城市，默认全国
    city:this.location.city
  }
  var autoComplete= new AMap.Autocomplete(autoOptions);
  autoComplete.search(n, (status, result)=> {
    // 搜索成功时，result即是对应的匹配数据
    // console.log(result);
    this.areaList=result
    // console.log(this.address);
  })
})

     
      }
  }
};
</script>

<style lang="scss" scoped>
.address-search {
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background-color: #dcdcdc;
  .input-content {
    padding: 10px;
    line-height: 30px;
    .icon-i-search{
        position: fixed;
        left: 20px;
    }
    input {
        // margin: 0 auto;
      width: 100%;
      background-color: #fff;
      border: none;
      height: 30px;
      border-radius: 10px;
      text-indent: 30px;
    }
  }
  .search-list{
      background-color: #fff;
      width: 100%;
     padding: 10px;
      ul{
          li{
              border-bottom: 1px solid #f1f1f1;
              margin: 5px;
              .title{
                  font-size: 14px;
                  font-weight: bold;
              }
              p{
                  color: #494949;
                  font-size: 12px;
              }
          }
      }
  }
}
</style>