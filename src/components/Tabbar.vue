<template>
  <div class="tabbar">
    <router-link
      class="tab-item"
      v-for="(item, index) in data"
      :key="index"
      :to="item.path"
      active-class="is-selected"
    >
      <div class="tab-item-icon">
        <i :class="'fa fa-' + item.icon"></i>
      </div>
      <div class="tab-item-label">
        {{ item.title }}
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
};
</script>

<style lang="scss" scoped>
.tabbar{
  // margin-top: 50px;
    width: 100%;
    height: 50px;
   position: fixed;
    bottom: 0;
      display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    
   .tab-item{
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   color: rgba(0,0,0,0.5);
   i{
      font-size: 20px;
   }
   .tab-item-label{
       font-size: 10px;
   }
   }
   a{
       text-decoration: none;
   }
   .is-selected {
  color: #009eef;
}
}
</style> 