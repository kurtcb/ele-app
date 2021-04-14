<template>
  <div class="home">
    <div class="header">
      <div class="header-top">
        <i class="iconfont icon-map"></i>
        <span @click="$router.push('/address')">
          {{ address }}
        </span>
        <i class="iconfont icon-arrow-down"></i>
      </div>
      <div
        class="bottom-wrap"
        :class="{ 'header-bottom-active': isSort == true || isScreen == true }"
      >
        <div class="header-bottom" @click="$router.push('/searchShop')">
          <i class="iconfont icon-i-search"></i>
          <span>搜索商家 商品名称</span>
        </div>
      </div>
    </div>
    <div class="swiper">
      <van-swipe
        :autoplay="2000"
        :loop="true"
        indicator-color="#fff"
        style="height: 100px"
      >
        <van-swipe-item v-for="(image, index) in swipeImgs" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
      <!-- l -->
      <van-swipe
        :autoplay="0"
        :loop="true"
        indicator-color="#fff"
        style="height: 180px"
      >
        <van-swipe-item
          v-for="(entry, i) in entries"
          :key="i"
          style="padding-top: 20px"
        >
          <div v-for="(item, index) in entry" :key="index">
            <div class="food">
              <img :src="item.image" />
              <span>
                {{ item.name }}
              </span>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="recommend-title">--- 推荐商家 ---</div>
    <Filte :navTab="navTab" :sortBy="sortBy" :screenBy="screenBy" @update="update"></Filte>

    <!-- <mt-loadmore
      :top-method="loadData"
      :bottom-method="loadMore"
      :bottom-all-loaded="allLoaded"
      :auto-fill="false"
      :bottomPullText="bottomPullText"
      ref="loadmore"
    >
      <div class="shoplist"> -->
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
<IndexShop :restaurants="restaurants" ></IndexShop>
  </van-list>
</van-pull-refresh>
      <!-- </div> -->
    <!-- </mt-loadmore> -->
    <!-- <van-list
  v-model="loading"
  :error.sync="error"
  error-text="请求失败，点击重新加载"
  @load="onLoad"
>
  
</van-list> -->
  </div>
</template>

<script>
import Banner from "../components/Banner";
import Filte from "../components/Filte";
import IndexShop from "../components/indexShop";
// import { Loadmore } from 'mint-ui';
// import { Loadmore  } from "mint-ui";
// import{} from 'vant';
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      swipeImgs: [],
      entries: [],
      navTab: [],
      sortBy: [],
      screenBy: [],
      data:null,
      page: 1,
      size: 5,
      restaurants: [], 
        loading: false,
      finished: false,
      refreshing: false,
      // 存放所有商家容器
      // allLoaded: false,
      // bottomPullText: "上拉加载更多",
    };
  },
  computed: {
    ...mapGetters(["address", "isSort", "isScreen"]),
    // address(){
    //     return this.$store.getters.address;

    // }
  },
  components: {
    Banner,
    Filte,
    IndexShop,
  },
  created() {
    this.getData();
  },
  methods: {
    ...mapActions(["setSort"]),
    getData() {
      // page = this.page;
      this.$axios.get("/api/profile/shopping").then((res) => {
        // console.log(res);
        this.swipeImgs = res.data.swipeImgs;
        this.entries = res.data.entries;
        // console.log(this.entries);
      });
      this.$axios.get("/api/profile/filter").then((res) => {
        // console.log(res);
        this.navTab = res.data.navTab;
        this.sortBy = res.data.sortBy;
        // this.navTab.push['s']
        this.screenBy = res.data.screenBy;
      });
      // this.$axios.post(`/api/profile/restaurants/${this.page}/${this.size}`,this.data).then((res)=>{
      //   console.log(res);
      //   this.restaurants=res.data
      //   console.log(this.restaurants);
      // })
           this.onRefresh();
    },
      update(condation) {
      // console.log(condation);
      this.data = condation;
      this.getData();
    },
     onRefresh() {
      this.page = 1;
      this.finished = false;
    //   this.bottomPullText = "上拉加载更多";
    //   // 拉取商家信息
          // this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
    
      this.$axios
        .post(`/api/profile/restaurants/${this.page}/${this.size}`, this.data)
        .then(res => {
          // console.log(res.data);
          // this.$refs.loadmore.onTopLoaded();
          this.restaurants = res.data;
        });
        this.loading = true;
        this.onLoad()
        // this.finished=true
          
    },
    onLoad() {
       this.page++;
         if (this.refreshing) {
          this.restaurants = [];
          this.refreshing = false;
        }
      if (!this.finished) {
        
        // 拉取商家信息
        this.$axios
          .post(`/api/profile/restaurants/${this.page}/${this.size}`)
          .then(res => {
            //  加载完之后重新渲染
            // this.$refs.loadmore.onBottomLoaded();

            if (res.data.length > 0) {
              res.data.forEach(item => {
                this.restaurants.push(item);
              });
              console.log(this.restaurants);
              this.loading=false;
             console.log(res.data);
            // this.finished=true;
              if (res.data==0) {
                this.finished = true;
                // this.bottomPullText = "没有更多了哦";
              }
         } else {
    //           // 数据为空
             this.finished = true;
    // //           this.bottomPullText = "没有更多了哦";
           }
           
          });
         
      }
    },
    // shopMsg(){
    //   this.$router.push('/shop')
    // }
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  margin-bottom: 50px;
  // position: fixed;
  // top: 0;
  // right: 0;
  // bottom: 0;
  // left: 0;
  .header {
    margin-top: -10px;
    width: 100%;
    height: 110px;
    background-color: #009eef;
    // position: fixed;
    top: 0;

    .header-top {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      // position: relative;
      .icon-map {
        color: #fff;
        font-size: 30px;
        margin-left: 10px;
      }
      .icon-arrow-down {
        color: #fff;
        font-size: 30px;
        margin-right: 10px;
      }
      span {
        width: 70%;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #fff;
        overflow: hidden;
        font-weight: bold;
        position: absolute;
        left: 12%;
      }
    }
    .bottom-wrap {
      // width: 100%;
      background-color: #009eef;
      height: 50px;
      padding: 15px;
      .header-bottom {
        width: 92%;
        background-color: #fff;
        // margin: 15px;
        height: 35px;
        border-radius: 5px;
        text-align: center;
        line-height: 35px;
        .icon-i-search {
          color: #ccc;
        }
        span {
          margin-left: 5px;
          color: #ccc;
          font-size: 12px;
        }
      }
    }
    .header-bottom-active {
      // position: fixed;
      // top: 0;
      width: 100%;
      // position: fixed;
      position: fixed;
      top: 0px;
      z-index: 999;
      // background-color: #f00;
      // left: 50%;
      // transform: translate(-50%);
      // margin: 10px auto;
      // position: relative;
      // z-index: 999;
      // position: sticky;
    }
  }
  .swiper {
    // position: fixed;
    top: 110px;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .van-swipe-item {
    background-color: #fff;
  }
  // .van-swipe-item :nth-of-type(1){
  //   height: 100px;
  // }
  .food {
    float: left;
    width: 20%;
    display: flex;
    align-items: center;
    flex-direction: column;
    // justify-content: space-around;
    // margin: 12px;
    overflow: hidden;
    img {
      width: 40px;
      height: 40px;
    }
    span {
      font-size: 8px;
    }
  }
  .recommend-title {
    width: 100%;
    background-color: #fff;
    text-align: center;
    height: 40px;
    // position: fixed;
    // top: 390px;
    line-height: 40px;
  }
}
</style>