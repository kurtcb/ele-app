<template>
  <div class="search-shop">
    <Hearder :isLeft="true" title="搜索商家"></Hearder>
    <div class="search-wrap">
      <i class="iconfont icon-i-search"></i>
      <input
        type="text"
        placeholder="请输入要搜索的商家，商品"
        v-model="shop_val"
      />
      <span @click="search">搜索</span>
    </div>
    <div class="search-list" v-show="shop_val">
      <li v-for="(item, index) in shops" :key="index" @click="$router.push('/shop')">
        <img :src="item.image_path" alt="" />
        <div>
          <p>{{ item.name }}</p>
        </div>
        <span>评分{{ item.rating }}</span>
      </li>
      <div class="suggest">
        <li v-for="(item, index) in suggest" :key="index">
          <i class="iconfont icon-i-search"></i>
          <span>
            {{ item }}
          </span>
        </li>
      </div>
    </div>
    <div class="no-res" v-if="empty">
      <p>附近没有搜索内容</p>
      <img
        src="https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import Hearder from "../components/Header";
export default {
  data() {
    return {
      shop_val: "",
      shops: [],
      suggest: [],
      empty: false,
    };
  },
  created() {
    this.searchMsg();

  },
  methods: {
    searchMsg() {
    
      if (this.shop_val) {
        this.$axios(`/api/profile/typeahead/${this.shop_val}`).then((res) => {
          // console.log(res);
          this.shops = res.data.restaurants;
          this.suggest = res.data.words;
          // console.log(this.shops.length);
        });
      }
    },
    search(){
        if(!this.shop_val)return
        if(this.shops.length>0||this.suggest.length>0){
            // console.log('h');
            this. searchMsg()
            this.empty=false
        }else{
            this.empty=true
        }
    }
  },
  watch: {
    shop_val() {
      // console.log(this.shop_val);
      this.searchMsg();
    },
  },
  components: {
    Hearder,
  },
};
</script>

<style lang="scss" scoped>
.search-shop {
  width: 100%;
  background-color: #fff;
  .search-wrap {
    height: 50px;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
    .icon-i-search {
      position: absolute;
      left: 15px;
      bottom: 10px;
      // line-height: 50px;
      font-size: 20px;
      z-index: 99;
    }
    input {
      background-color: #ccc;
      width: 100%;
      height: 40px;
      border: none;
      outline: none;
      border-radius: 10px;
      text-indent: 40px;
    }
    span{
        position: absolute;
        color: #009eef;
        right: 20px;
        top: 19px;
    }
  }
  .search-list {
    font-size: 12px;
    padding: 10px;
    li {
      margin: 0 auto;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      height: 40px;
      img {
        width: 30px;
        height: 30px;
        margin-right: 20px;
        margin-left: 20px;
      }
      div {
        width: 50%;
        p {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    .suggest {
      li {
        flex-direction: row;
        display: flex;
        justify-content: flex-start;
        padding-left: 20px;
        i {
          margin-right: 20px;
        }
      }
    }
  }
  .no-res{
      text-align: center;
      margin-top: 200px;
  }
}
</style>