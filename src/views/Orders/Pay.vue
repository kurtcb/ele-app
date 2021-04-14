<template>
  <div class="pay">
      <button @click="pay"  class="btn-submit">确认支付</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "Pay",
  data() {
    return {
    };
  },
  beforeRouteEnter(to,from,next){
    next(vm=>{
      vm.addOrder()
    })
  },
  computed: {
    ...mapGetters(['orderInof','remark','tableWare','totalPrice'])
    // orderInof() {
    //   return this.$store.getters.orderInof;
    // },
    // totalPrice() {
    //   return this.$store.getters.totalPrice;
    // },
    // userInfo() {
    //   return this.$store.getters.userInfo;
    // },
    // remarkInfo() {
    //   return this.$store.getters.remarkInfo;
    // }
  },
  methods: {

    pay() {
      // const data = {
      //   body: "123",
      //   // out_trade_no: new Date().getTime().toString(),
      //   total_fee: 1000
      // };
      // // alert("进入到pay方法中");
      // // 请求 http://www.thenewstep.cn/wxzf/example/jsapi.php
      // fetch("https://www.thenewstep.cn", {
      //   method: "POST",
      //   headers: {
      //     "Content-type": "application/json"
      //   },
      //   body: JSON.stringify(data)
      // })
      //   .then(res => res.json())
      //   .then(data => {
      //     this.onBridgeReady(data);
      //   })
      //   .catch(err => {
      //     alert(err);
          this.addOrder();
      //   });
    },
    onBridgeReady(data) {
      WeixinJSBridge.invoke("getBrandWCPayRequest", data, res => {
        if (res.err_msg == "get_brand_wcpay_request:ok") {
          // 使用以上方式判断前端返回,微信团队郑重提示：
          //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
          // alert("支付成功");
          // 生成订单
          this.addOrder();
        }
      });
    },
    addOrder() {
      let orderlist = {
        orderInfo: this.orderInof,
        // userInfo: this.userInfo,
        totalPrice: this.totalPrice,
        remark: this.remark,
        tableWare:this.tableWare,
        // image_path: this.orderInfo.shopInfo.image_path,
        // shopInfoName: this.orderInfo.shopInfo.name,
        // selectFoodsName: this.orderInfo.selectFoods[0].name
      };
      // alert(JSON.stringify(orderlist));
      console.log(orderlist);
      this.$axios
        .post(`/api/user/add_order/${localStorage.ele_login}`, orderlist)
        .then(res => {
          console.log(res);
          this.$router.push("/order");
        });
    }
  
  }

};
</script>

<style scoped>

</style>

