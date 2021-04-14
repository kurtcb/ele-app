import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/font/iconfont.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.use(Vant)  
import { Loading } from 'vant';
Vue.use(Loading);
Vue.config.productionTip = false
Vue.prototype.$axios=axios


axios.interceptors.request.use(
  config => {
     store.state.loading=true
     return config;
  },error=>{
    return Promise.error(error)
  })
  axios.interceptors.response.use(
    response => {
      if(response.status===200)
      {
        store.state.loading=false
        return  Promise.resolve(response);
      }else{
        return Promise.reject(response)
      }
    },error=>{
    if(error.response.status){
      return Promise.reject(error.esponse)
    }
    })



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
