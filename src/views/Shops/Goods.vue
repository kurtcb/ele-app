<template>
  <div class="goods">
    <!-- 推荐 -->
    <div class="goods-top">
      <h4>{{ shopInfo[0].name }}</h4>
      <ul>
        <li v-for="(item, index) in shopInfo[0].items" :key="index">
          <img :src="item.image_path" alt="" />
          <p>{{ item.name }}</p>
          <span>
            月售{{ item.month_sales }} 好评率{{ item.satisfy_rate }}
          </span>
          <p class="prince">￥{{ item.specfoods[0].price }}</p>
          <CartCtrl class="count" :food="item"></CartCtrl>
        </li>
      </ul>
    </div>
    <!-- 左侧分类 -->
    <div class="goods-collect">
      <div class="goods-left" ref="menu">
        <div class="left-content">
          <ul>
            <li
              v-for="(item, index) in foods"
              :key="index"
              @click="selectCol(index)"
              :class="{ selectLeft: curIndex == index }"
            >
              <img :src="item.icon_url" alt="" v-if="item.icon_url" />
              <p>{{ item.name }}</p>
            </li>
          </ul>
        </div>
      </div>
      <!-- 右侧分类 -->
      <div class="goods-right" ref="food">
        <div class="right-content">
          <div v-for="(item, index) in foods" :key="index" class="foodList">
            <div class="title">
              <p>{{ item.name }}</p>
              <span>{{ item.description }}</span>
            </div>
            <li v-for="(items, i) in item.foods" :key="i"  @click="handelFood(items)">
              
              <img :src="items.image_path" alt="" />
              <div class="txt">
                <p>{{ items.name }}</p>
                <span> {{ items.description }} </span>
                <p class="sell">
                  月售{{ items.month_sales }} 好评率{{ items.satisfy_rate }}
                </p>
                <p class="prince">￥{{ items.specfoods[0].price }}</p>
                <CartCtrl
                  :foods="foods"
                  class="gcount"
                  :food="items"
                ></CartCtrl>
              </div>
            </li>
          </div>
        </div>
      </div>
       
        <Food v-show="isMsg" @hide="hide"  :food="selectFoods"></Food>
    </div>
     <CartShop :shop="shop"></CartShop>

  </div>
</template>

<script>
import BScroll from "better-scroll";
import CartCtrl from "../../components/Shops/CartCtrl";
import CartShop from "../../components/Shops/ShopCart";
import Food from '../../views/Shops/Food'
export default {
  data() {
    return {
      // list:[],
      shopInfo: [],
      foods: [],
      shop: [],
      scroll: null,
      menu: {},
      foodL: {},
      // curIndex:0,
      scrollY: 0,
      listHeight: [],
      isMsg:false,
      selectFoods:[]
      // food:[],
    };
  },
  created() {
    this.getData();
  },
  computed: {
    curIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];

        // 判断是否在两个高度之间
        if (this.scrollY >= height1 && this.scrollY < height2) {
          return i;
        }
      }

      return 0;
    },
  },
  components: {
    CartCtrl,
    CartShop,
    Food,
  },
  methods: {
    initScroll() {
      this.menu = new BScroll(this.$refs.menu, {
        click: true,
      });
      this.food = new BScroll(this.$refs.food, {
        click: true,
        probeType: 3,
      });
      this.food.on("scroll", (pos) => {
        // console.log(pos.y);
        this.scrollY = Math.abs(Math.round(pos.y));
        // console.log(this.scrollY);
      });
    },
    // 左侧跳转
    selectCol(index) {
      // console.log(index);
      let foodLi = this.$refs.food.getElementsByClassName("title");
      // console.log(foodLi);
      let el = foodLi[index];
      //  console.log(el);
      this.food.scrollToElement(el, 250);
      //  this.curIndex=index
    },
    calculateHeight() {
      let foodlist = this.$refs.food.getElementsByClassName("foodList");
      // console.log(foodlist);
      let height = 0;
      this.listHeight.push(height);

      for (let i = 0; i < foodlist.length - 1; i++) {
        let item = foodlist[i];
        // console.log(item);
        // 累加
        height += item.clientHeight;
        // console.log(height);
        this.listHeight.push(height);
      }
      // console.log(this.listHeight);
    },
    hide(){
      this.isMsg=false
    },
    handelFood(items){
      this.isMsg=true;
      this.selectFoods=items
    },
    getData() {
      this.$axios("/api/profile/batch_shop").then((res) => {
        console.log(res);
        // (this.list = res.data),
        // console.log(this.list);
      

        res.data.recommend.forEach((ele) => {
          ele.items.forEach((eles) => {
            eles.count = 0;
          });
        });
        this.shopInfo = res.data.recommend;

        
        this.$nextTick(() => {
          this.initScroll();
          this.calculateHeight();
        });
        // this.food=res.data.menu
       res.data.menu.forEach((ele) => {
          ele.foods.forEach((eles) => {
            eles.count = 0;
          });
        });
         this.foods = res.data.menu;
      // console.log(this.foods);
        this.shop = res.data;
        console.log(this.shop);
      });
     
      // console.log(this.listHeight);
      //    setTimeout(()=>{
      // this.$nextTick(()=>{
      //       this.initScroll()
      //     })
      //    },2000)
    },
  },
};
</script>

<style lang="scss" scoped>
.goods {
  width: 100%;
  // height: 100%;
  // background-color: #f00;
  // position: fixed;
  right: 0;
  top: 260px;
  bottom: 0;
  left: 0;
  .goods-top {
    ::-webkit-scrollbar {
      width: 0 !important;
    }
    h4 {
      margin-top: 20px;
      margin-left: 20px;
    }
    ul {
      // height: 100%;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      overflow-x: scroll;

      li {
        position: relative;
        // width: 30%;
        height: 200px;
        margin: 10px;
        // margin: 15px;
        img {
          width: 130px;
          height: 130px;
        }
        p {
          font-size: 10px;
          font-weight: bold;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        span {
          color: #494949;
          font-size: 12px;
        }
        .prince {
          color: #f00;
        }
        .count {
          position: absolute;
          right: 10px;
          bottom: 10px;
        }
      }
    }
  }
  .goods-collect {
    width: 100%;
    height: 100%;
    // height: 700px;
    // height: 600px;
    display: flex;
    // justify-content: flex-start;
    
    .goods-left {
      width: 20%;
      // height: 60%;
      height: 600px;
      // overflow-y: hidden;
      background-color: #dfdfdf;
      position: relative;
      left: 0;
      overflow: hidden;
      .left-content {
        width: 100%;
        // height: 1000px;

        ul {
          .selectLeft {
            background-color: #fff;
          }
          li {
            display: flex;
            justify-content: flex-start;
            width: 80%;
            margin: 0 auto;
            // text-align: center;
            align-items: center;
            height: 50px;
            padding: 10px;
            img {
              width: 15px;
              height: 15px;
              margin-right: 10px;
            }
            p {
              font-size: 12px;
            }
          }
        }
      }
    }
    .goods-right {
      overflow-y: hidden;
      // height: 60%;
      width: 80%;
      position: relative;
      right: 0;
      // bottom: 0;
      height: 600px;
      .right-content {
        // height: 30000px;
        .title {
          font-size: 12px;
          display: flex;
          justify-content: flex-start;

          p {
            color: #000;
            margin-right: 20px;
            margin-left: 20px;
          }
          span {
            color: #494949;
          }
        }
        li {
          margin: 50px 0;
          position: relative;
          display: flex;
          justify-content: space-around;
          img {
            width: 80px;
            height: 80px;
            margin-right: 20px;
          }
          .txt {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            p {
              font-size: 16px;
              font-weight: bold;
            }
            span {
              font-size: 12px;
              color: #494949;
            }
            .sell {
              font-weight: normal;
              font-size: 12px;
              color: #494949;
            }
            .prince {
              font-weight: bold;
              color: #f00;
              font-size: 16px;
              margin-top: 5px;
            }
            .gcount {
              position: absolute;
              right: 5px;
              bottom: 20px;
            }
          }
        }
      }
    }
  }
}
</style>>

</styls>