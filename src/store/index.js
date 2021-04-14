import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    address: "",
    location: "",
    loading: false,
    isSort:false,
    isScreen:false,
    orderInof:{},
    selectAddress:{},
    totalPrice:null,
    tableWare:null,
    remark:''
    // shopCounts:0,

  },
  mutations: {
    changeAddress(state, flag) {
      state.address = flag
      // console.log(state.address);
    },
    changeLocation(state, flag) {
      state.location = flag
      // console.log(state.location);
    },
    showLoading(state) {
      state.loading = true
    },
    hideLoading(state) {
      state.loading = false
    },
    changeSort(state, flag) {
      state.isSort = flag
      // console.log(state.isSort);
    },
    changeScreen(state, flag) {
      state.isScreen = flag
      // console.log(state.isSort);
    },
    // changeShopCounts(state, flag) {
    //   state.shopCounts = flag
    //   // console.log(state.isSort);
    // },
    changeOrderInfo(state,flag) {
      state.orderInof = flag
      // console.log(state.orderInof);
    },
    changeSelectAddress(state,flag) {
      state.selectAddress = flag
    },
    changeTableWare(state,flag) {
      state.tableWare = flag
    },
    changeRemark(state,flag) {
      state.remark = flag
    },
  },
  actions: {
    setAddress({ commit }, flag) {
      commit('changeAddress', flag)
    },
    setLocation({ commit }, flag) {
      commit('changeLocation', flag)
    },
    setSort({ commit }, flag) {
      commit('changeSort', flag)
    },
    setScreen({ commit }, flag) {
      commit('changeScreen', flag)
    },
    setOrderInfo({ commit }, flag) {
      commit('changeOrderInfo', flag)
    },
    setSelectAddress({ commit }, flag) {
      commit('changeSelectAddress', flag)
    },
    setTableWare({ commit }, flag) {
      commit('changeTableWare', flag)
    },
    setRemark({ commit }, flag) {
      commit('changeRemark', flag)
    },
    // setShopCounts({ commit }, flag) {
    //   commit('changeShopCounts', flag)
    // },
  },
  getters: {
    address(state) {
      return state.address
    },
    location(state) {
      return state.location
    },
    isSort(state) {
      return state.isSort
    },
    isScreen(state) {
      return state.isScreen
    },
    orderInof(state) {
      return state.orderInof
    },
    selectAddress(state) {
      return state.selectAddress
    },
    // totalPrice(state){
    //   let price=0;
    //   if(state.orderInof){
    //     const selectFoods=state.orderInof.selectFoods
    //     selectFoods.forEach((ele)=>{
    //       price+= ele.activity.fixed_price*ele.count
    //       // console.log(price);
    //     });
    //     price+=state.orderInof.shop.float_delivery_fee;
    //     // console.log(price);
    //   }
    //   return price
    // },
    totalPrice: state => {
      let price = 0;
      if (state.orderInof.selectFoods) {
        const selectFoods = state.orderInof.selectFoods;
        selectFoods.forEach(ele => {
          price+= ele.activity.fixed_price*ele.count
        });
        price+=state.orderInof.shop.float_delivery_fee;
      }
      return price;
    },

    tableWare(state) {
      return state.tableWare
    },
    remark(state) {
      return state.remark
    },
    // shopCounts(state) {
    //   return state.shopCounts
    // },
  },
  modules: {
  }
})
