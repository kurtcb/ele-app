<template>
  <div class="me">
    <div class="header">
      <div class="img"></div>
      <div class="txt">
        <div class="user-id" v-if="this.userInfo"> {{userInfo._id}} </div>
        <p class="login" v-else @click="handleLogin">登陆/注册</p>
        <p v-if="userInfo">手机号{{userInfo.phone}}</p>
        <p v-else>登陆后享受更多特权</p>
      </div>
      <i class="iconfont icon-youjiantou"></i>
    </div>
    <div class="my-address" @click="$router.push('/myAddress')">
      <i class="iconfont icon-map" ></i>
      我的地址
    </div>
    <div class="log-out" @click="logOut">
      退出登录
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      userInfo:''
    }
  },
  created(){
    this.getData()
  },
  methods: {
    getData() {
      const user_id = localStorage.ele_login;
      this.$axios(`/api/user/user_info/${user_id}`).then((res) => {
        console.log(res.data);
        this.userInfo = res.data;
      });
    },
    handleLogin(){
      this.$router.push('/login')
    },
    logOut(){
      // this.localStorage.ele_login=''
    localStorage.removeItem('ele_login')
    }
  },
};
</script>

<style lang="scss" scoped>
.me {
  // width: 100%;
  // height: 100%;
  background-color: #DCDCDC;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  .header {
    background-image: linear-gradient(90deg, #0af, #0085ff);
    height: 120px;
    // width: 100%;
    // background-color: #f00;
    display: flex;
    align-items: center;
    .img {
      background-image: url(https://shadow.elemecdn.com/faas/h5/static/sprite.3ffb5d8.png);
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-position: 50px 50px;
      margin: 20px;
    }
    .icon-youjiantou {
      position: fixed;
      right: 20px;
      color: #fff;
    }
    .txt {
      color: #fff;
      font-size: 12px;
      .user-id{
       font-weight: bold;
        font-size: 16px;
        margin-bottom: 10px;
        width: 70%;
        overflow: hidden;;
      }
      .login {
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 10px;
      }
    }
  }
  .my-address{
    margin: 15px 0;
    width: 100%;
    height: 50px;
    background-color: #fff;
    // text-align: center;
    padding: 10px;
    box-sizing: border-box;
    line-height: 30px;
    .icon-map{
      color: #009eef;
    }
  }
  .log-out{
    background-color: #fff;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #c00;
    font-weight: bold;
  }
}
</style>