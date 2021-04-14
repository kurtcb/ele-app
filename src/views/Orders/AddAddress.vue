<template>
  <div class="add-address">
    <!-- input绑定无效 在后面加@click.native -->
    <!-- 双向绑定无效 在input里添加@inout="$emit(input,$event.taget.value)" -->
    <Header :title='title' :isLeft="true"></Header>
    <FormBlock
      label="联系人"
      :placeholder="'姓名'"
      :tags="sex"
      @checkSex="checkSex"
      :sex="AddressInfo.sex"
      v-model="AddressInfo.name"
    ></FormBlock>
    <FormBlock label="电话" :placeholder="'手机号码'" v-model="AddressInfo.phone"></FormBlock>
    <FormBlock
      @click.native="search"
      label="地址"
      :placeholder="'小区/写字楼/学校等'"
      textarea="textarea"
      icon="icon-youjiantou"
      v-model="AddressInfo.address"
      
    ></FormBlock>
    <FormBlock
      label="门牌号"
      :placeholder="'10号楼五单元161'"
      icon="icon-bianji"
      v-model="AddressInfo.bottom"
    ></FormBlock>
    <Tags
      :tags="tags"
      label="标签"
      @checkTag="checkTag"
      :selectTag="AddressInfo.tag"
    ></Tags>
    <div class="pull" @click="handelSave">
      确定
    </div>
    <!-- <Tags :sex="sex" @checkTag="checkTag" :tagsInfo="tagsInfo"></Tags> -->
    <AddressSearch @close="showSearch=false" :showSearch="showSearch" :AddressInfo="AddressInfo"></AddressSearch>
  </div>
</template>

<script>
import { Toast } from 'vant';
import Header from "../../components/Header";
import FormBlock from "../../components/Orders/FormBlock";
import Tags from "../../components/Orders/Tags";
import AddressSearch from "../../components/Orders/AddressSearch";
export default {
 
  data() {
    return {
      title:'',
      tags: ["家", "学校", "公司"],
      sex: ["男士", "女士"],
      AddressInfo: {
     
      },
      // SexInfo:'',
      showSearch: false,
    };
  },
//   created(){
// console.log(this.AddressInfo);
//   },
  beforeRouteEnter(to,from,next){
    next(vm=>{
      vm.AddressInfo=to.params.AddressInfo;
      vm.title=to.params.title
      console.log(to);
    })
  },
  //   beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     vm.AddressInfo = to.params.AddressInfo;
  //     vm.title = to.params.title;
  //     console.log(to);
  //   });
  // },
  components: {
    Header,
    FormBlock,
    Tags,
    AddressSearch,
  },
  methods: {
    checkTag(item) {
      // console.log(item);
      this.AddressInfo.tag = item;
      // console.log(item);
    },
    checkSex(item) {
      this.AddressInfo.sex = item;
      console.log(item);
    },
    search() {
      this.showSearch = true;
      // console.log("123");
    },
    handelSave(){
      console.log(this.AddressInfo);
      if(!this.AddressInfo.name){
        Toast('请输入姓名');
        return
      }
      if(!this.AddressInfo.sex){
        Toast('请选择性别');
        return
      }
      if(!this.AddressInfo.phone){
        Toast('请输入手机号');
        return
      }
      if(!this.AddressInfo.address){
        Toast('请选择地址');
        return
      }
      if(!this.AddressInfo.bottom){
        Toast('请输入门牌号');
        return
      }
      if(!this.AddressInfo.tag){
        Toast('请选择标签');
        return
      }
      if(this.title=="编辑地址"){
        this.editAddress()
      }else{
        this.addAddress()
      }
    },
    addAddress(){
      this.$axios.post(`/api/user/add_address/${localStorage.ele_login}`,this.AddressInfo)
      .then((res)=>{
        // console.log(res);
        this.$router.push('/myAddress')
      })
      .catch((err)=>{
        console.log(err);
      })
    },
    editAddress(){
      this.$axios.post(`/api//user/edit_address/${localStorage.ele_login}/${this.AddressInfo._id}`,this.AddressInfo)
      .then((res)=>{
        this.$router.push('/myAddress')
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.add-address {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #dcdcdc;
  .pull{
    height: 50px;
    background-color: #00d762;
    color: #fff;
    text-align: center;
    line-height: 50px;
    width: 95%;
    margin: 10px auto;
  }
}
</style>