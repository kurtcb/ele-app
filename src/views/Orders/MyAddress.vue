<template>
  <div class="my-address">
    <Header title="我的地址" :isLeft="true"></Header>
    <div class="address">
      <div class="item" v-for="(item, index) in addressList" :key="index"  @click.stop="select(item,index)">
        <i class="iconfont icon-duihaoyuan" v-show="curIndex==index"></i>
        <div class="item-top">
          <p>{{ item.name }}</p>
          <span> {{ item.sex }} </span>
          <span> {{ item.phone }} </span>
        </div>
        <div class="item-right">
          <i class="iconfont icon-bianji" @click.stop="edit(item)"></i>
          <i class="iconfont icon-chahao" @click.stop="delet(item, index)"></i>
        </div>
        <div class="item-bottom">
          <span class="tag">{{ item.tag }}</span>
          <p>{{ item.address }} {{ item.bottom }}</p>
        </div>
      </div>
    </div>

    <div class="bottom" @click="addAddress">
      <p class="add">+</p>
      <p>新增收货地址</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from "../../components/Header";
export default {
  data() {
    return {
      addressList: [],
      // selected:false,
      curIndex:0
    };
  },
  components: {
    Header,
  },
  methods: {
    ...mapActions(['setSelectAddress']),
      select(item,index){
    this.curIndex=index
    this.setSelectAddress(item)
    // this.$router.push('/settlement')
    // console.log(1);
    // console.log(index);
    // console.log(this.curIndex);
  },
    edit(item) {
      this.$router.push({
        name: "addAddress",
        // 路由传参必须用name
        params: {
          title: "编辑地址",
          AddressInfo: item,
        },
      });
      //   console.log(this.params);
    },
    delet(item, index) {
      this.$axios
        .delete(`/api/user/address/${localStorage.ele_login}/${item._id}`)
        .then((res) => {
          this.addressList.splice(index, 1);
        });
    },
    addAddress() {
    this.$router.push({
      name: 'addAddress',
      params: {
        title: "新增收货地址",
        AddressInfo: {
          name: "",
          phone: null,
          bottom: "",
          tag: "",
          sex: "",
          address: "",
        },
      },
    });
  },
  getData(){
        this.$axios(`/api/user/user_info/${localStorage.ele_login}`).then((res) => {
      // console.log(res);
      this.addressList = res.data.myAddress;
        })
  }
  },
    beforeRouteEnter(to, from, next) {
    next(vm => vm.getData());
  },
//     created() {
// // this.getData()
//         console.log(this.addressList);
   
//      this.addAddress()
//   },
  // watch:{
  //   addressList(n,o){
  //      deep:true
  //     if(n){
       
  //       this.getData()
  //     }
  //   }
  // },
  

 
};
</script>


<style lang="scss" scoped>
.my-address {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #dcdcdc;
  .address {
    .item {
      background-color: #fff;
      height: 100px;
      padding: 0 50px;
      border: 1px solid #ccc;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      .icon-duihaoyuan{
        background-color: #4cd964;
        color: #fff;
        border-radius: 50%;
        position: absolute;
        top: 30px;
        font-weight: bold;
        font-size: 20px;
        left: 10px;
      }
      .item-top {
        display: flex;
        align-items: center;
        p {
          font-weight: bold;
          margin-right: 5px;
          font-size: 14px;
        }
        span {
          margin-right: 5px;
          color: #494949;
          font-size: 12px;
        }
      }
      .item-right {
        position: fixed;
        right: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 60px;
        i {
          font-size: 20px;
        }
      }
      .item-bottom {
        display: flex;
        align-items: center;
        .tag {
          border: 1px solid #ff5722;
          color: #ff5722;
          font-size: 12px;
          line-height: 12px;
          width: 28px;
          margin-right: 5px;
          text-align: center;
        }
        p {
          color: #494949;
          font-size: 12px;
          width: 100%;
        }
      }
    }
  }
  .bottom {
    height: 50px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      color: #009eef;
    }
    .add {
      color: #fff;
      font-weight: bold;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #009eef;
      line-height: 20px;
      text-align: center;
      margin-right: 10px;
      font-size: 25px;
    }
  }
}
</style>