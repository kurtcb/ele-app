<template>
  <div class="alphabel" ref="alphbelScroll" v-if="cityInfo">
    <div class="content">
      <div class="hotCities list">
        <p>热门城市</p>
        <ul>
          <li v-for="(item, index) in hotCities" :key="index" @click="selectCity(item)">
            {{ item.name }}                                      
          </li>
        </ul>
      </div>
      <div class="city">
        <div class="city-key list" v-for="(item, index) in keys" :key="index">
          <li>
            {{ item }}
          </li>
          <li
            class="cityList "
            v-for="(city,index) in cityInfo[item]"
            :key="index"
          
            @click="selectCity(city)"
          >
            {{ city.name }}
          </li>
        </div>
      </div>
    </div>
    <div class="alphabel-key">
        <li @click="selectKey(0)">#</li>
        <li @click="selectKey(index+1)" v-for="(item,index) in keys" :key="index">{{item}}</li>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    keys: Array,
    cityInfo: {},
    hotCities: Array,
  },
  methods: {
      ...mapActions(['setLocation']),
    
    initScroll() {
      this.scroll = new BScroll(this.$refs.alphbelScroll, {
        click: true,
      });
    },
   
  selectCity(item){ 
      this.setLocation(item)
      console.log(item);
      this.$router.push('/address')
  },
  
    selectKey(index) {
    //   console.log(index);
    //   console.log(this.$refs.alphbelScroll.getElementsByClassName("list"));
      const list=this.$refs.alphbelScroll.getElementsByClassName("list")
      let el = list[index];
      this.scroll.scrollToElement(el,250)
  }
}
}
</script>

<style lang="scss" scoped>
.alphabel {
  height: 2000px;
  overflow: hidden;
  background-color: #fff;
  .content {
    // height: 100%;
    .hotCities {
      p {
        color: #aaa;
        margin-top: 10px;
      }
      ul {
        display: flex;
        //   justify-content: space-around;
        flex-wrap: wrap;

        li {
          width: 100px;
          height: 50px;
          background-color: #f1f1f1;
          margin: 10px;
          border-radius: 2px;
          text-align: center;
          line-height: 50px;
        }
      }
    }
    .city {
      .city-key {
        li {
          height: 40px;
          line-height: 40px;
        }
        .cityList {
          height: 40px;
          border: 1px solid #ccc;
          line-height: 40px;
        }
      }
    }
  }
  .alphabel-key {
    position: fixed;
    right: 0;
    top: 150px;
    z-index: 999;
    li {
      font-size: 14px;
      color: #aaa;
    }
  }
}
li {
  list-style: none;
}
</style>