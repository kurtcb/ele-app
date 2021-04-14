<template>
  <div class="remark">
    <Header title="订单备注" :isLeft="true"></Header>
    <div class="content">
      <textarea
        name=""
        id=""
        cols="30"
        rows="5"
        placeholder="填写额外对餐厅或骑手小哥备注的信息"
        v-model="val"
      ></textarea>
      <div class="switch">
        <div class="hot" v-for="(item,index) in hot" :key="index" @click="selectHot(item)" :class="{'selectHot':item.select==true}">
          {{item.name}}
        </div>
        <div class="swichItem" v-for="(item,index) in swichItem" :key="index" @click="selectItem(item)" :class="{'selectItems':item.select==true}">
          {{item.name}}
        </div>
      </div>
    </div>
    <div class="pull" @click="submit">
      确定
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from "../../components/Header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      hot: [
        { select: false, name: "不要辣" },
        { select: false, name: "少点辣" },
        { select: false, name: "多点辣" },
      ],
      swichItem: [
        { select: false, name: "不要香菜" },
        { select: false, name: "多加醋" },
        { select: false, name: "不要葱" },
        { select: false, name: "多加屎" },
      ],
      // curItem:'',
      val:''
    };
  },
  methods:{
    ...mapActions(['setRemark']),
    selectHot(item){
      this.hot.forEach(ele => {
        ele.select=false
      });
      item.select=true
    },
    selectItem(item){
      item.select=!item.select
    },
    submit(){
      let selectItem=''
          this.hot.forEach(ele => {
        if(ele.select==true){
          selectItem+=ele.name
        }
      });

          this.swichItem.forEach(eles=>{
          if(eles.select==true){
            selectItem+=eles.name
          }
          })
          selectItem+= this.val
          console.log(selectItem);
            this.setRemark(selectItem)
            this.$router.push('/settlement')
    }
  
  }
};
</script>

<style lang="scss" scoped>
.remark {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #dcdcdc;
  .content{
    background-color: #fff;
    padding: 10px;
    textarea{
      width: 100%;
      background-color: #DCDCDC;
      font-size: 12px;
    }
    .switch{
      display: flex;
      flex-wrap: wrap;
      .hot{
        border: 1px solid #ccc;
        font-size: 13px;
        text-align: center;
          padding: 4px 5px;
          // margin: 5px;
          margin: 5px 0;
      }
      .selectHot{
        background-color: #009eef;
      }
      .swichItem{
        border: 1px solid #ccc;
        font-size: 13px;
        margin: 5px;
        padding: 4px 5px;
        text-align: center;
      }
      .selectItems{
         background-color: #009eef;
      }
    }
  }
  .pull{
    // width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background-color: #00e067;
    margin: 10px;
    color: #fff;
  }
}
</style>>

</styles>