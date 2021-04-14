<template>
  <div class="s">
    <!-- 幕布 -->
    <div
      class="sort-background"
      v-show="isSort || isScreen"
      @click.self="hideFilter"
    >
      <!-- nav筛选 -->
    </div>
    <div class="filte" :class="{ 'filte-top': isSort == true }">
      <span
        v-for="(item, index) in navTab"
        :key="index"
        :class="{ 'filter-bold': currentFilter == index }"
        @click="filterSort(item, index)"
      >
        {{ item.name }}
        <!-- <i :class="icon+item.icon"></i> -->
      </span>
    </div>
    <!-- nav列表 -->
    <div class="sort-by" v-show="isSort">
      <li
        v-for="(item, index) in sortBy"
        :key="index"
        @click.stop="selectSort(item, index)"
        :class="{ selectList: currentFilterTwo == index }"
      >
        {{ item.name }}
        <i class="iconfont icon-duihao" v-show="currentFilterTwo == index"></i>
      </li>
    </div>
    <!-- 筛选列表 -->
    <div class="sort-by-sort" v-show="isScreen">
      <li v-for="(item, i) in screenBy" :key="i" >
       <p> {{ item.title }}</p>
        <div class="sort-list" >
          <span v-for="(items, index) in item.data" :key="index" :class="{'select':items.select}" @click="selectScreem(items,item)">
          {{ items.name }}
          <img :src="items.icon" alt="" />
        </span>
        </div>
      </li>
      <div class="btn">
        <button @click="clearSort"  >清空</button>
        <button>确定</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      currentFilter: 0,
      currentFilterTwo: 0,
      // edit:false
    };
  },
computed: {
    // edit() {
    //   let edit = false;
    //   this.screenBy.forEach(screen => {
    //     screen.data.forEach(item => {
    //       if (item.select) {
    //         edit = true;
    //       }
    //     });
    //   });
    //   return edit;
    // }
  },
  props: {
    navTab: Array,
    sortBy: Array,
    screenBy: Array,
  },
  computed: {
    ...mapGetters(["isSort", "isScreen"]),
  },
  methods: {
    ...mapActions(["setSort", "setScreen"]),
    filterSort(item, index) {
      this.currentFilter = index;
      if (index == 0) {
        this.setSort(true);
        // console.log(item.code);
      }
      if (index == 1) {
        // console.log(item.condition);
        this.setSort(false);
                this.$emit("update", {
            condition: this.navTab[1].condition
          });
          // console.log(this.navTab[1].condition);
      }
      if (index == 2) {
        // console.log(item.condition);
        this.setSort(false);
         this.$emit("update", {
            condition: this.navTab[2].condition 
          });
          // console.log(condition);
      }
      if (index == 3) {
        this.setScreen(true);
      }
    },
    hideFilter() {
      this.setSort(false);
      this.setScreen(false);
      console.log(123);
    },
    selectSort(item, index) {
      (this.currentFilterTwo = index),
        // console.log(this.currentFilter);
        this.setSort(false);
      this.navTab[0].name = item.name;
      console.log(item.code);
            this.$emit("update", { condition: item.code });
    },
    selectScreem(items,item){
      if(item.id!=='MPI'){
        
        item.data.forEach(element => {
          if( items.select==false){
  element.select=false
          }
        

          // element.select=!element.select6
          //  items.select=!items.select
        });
        // items.select=!items.select
      }
     items.select=!items.select
    },
    clearSort(){
     this.screenBy.forEach(ele=>{
       ele.data.forEach(eles=>{
         eles.select=false
       })
     })
    }
  },
};
</script>

<style lang="scss" scoped>
.filte {
  // position: fixed;
  top: 430px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  height: 30px;
  align-items: center;
  .filter-bold {
    font-weight: bold;
  }
}
.sort-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  z-index: 3;
}
.filte-top {
  position: fixed;
  top: 64px;
  z-index: 999;
  // background-color: #f00;
}
.sort-by {
  position: fixed;
  top: 94px;
  width: 100%;
  z-index: 99;
  li {
    background-color: #fff;
    border: 1px solid #ccc;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
  }
  .selectList {
    color: #009eef;
    display: flex;
    justify-content: space-between;
    i {
      margin-right: 20px;
    }
  }
  
}
.sort-by-sort {
    position: fixed;
    top: 80px;
    width: 100%;
    z-index: 99;
    // height: 700px;
    background-color: #fff;
    li{
      // background-color: #fff;
      width: 100%;
      .sort-list{
        // display: flex;
        // justify-content: space-around;
        // flex-wrap: wrap;
        float: left;
        overflow: hidden;
        span{
          background-color: #fafafa;
          float: left;
          overflow: hidden;
          width: 25%;
          height: 30px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          font-size: 10px;
          margin:5px 15px;
          img{
            width: 20px;
            height: 20px;
          }
        }
      }
    }
    .btn{
      // background-color: #f00;
      width: 100%;
      height: 50px;
      
      :nth-of-type(1){
        width: 50%;
        height: 100%;
        background-color: #fff;
        border:1px solid #fafafa;
        color:#ccc;
      }
       :nth-of-type(2){
         width: 50%;
         height: 100%;
        background-color: #00d762;
        border:1px solid #fafafa;
        color: #fff;
      }
    }
  }
.select{
    color: #3190e8 ;
  background-color: #3190e8 ;
}
.edit{
  color: #333 !important;
}
</style>