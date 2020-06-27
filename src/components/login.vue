<template>
  <div class="login_total" >

    <div class="login_lr">
      <div class="login">
        <h1 style="margin-left: 50px">please login</h1>
        <div class="login-container">
          <div class="login-password">用户名：</div>
          <el-input v-model="userName" placeholder="请输入内容" class="input-login"></el-input>
        </div>
        <div  class="login-container">
          <div class="login-password">密码：</div>
          <el-input v-model="passWord" placeholder="请输入密码" show-password class="input-login"></el-input>
        </div>
        <button type="submit" name="submit" value="true" class="setsize" @click="loginClick" ><strong >登录</strong></button>
        <router-link to='/'> <button type="submit" name="submit" value="true" class="setsize" ><strong >取消</strong></button></router-link>
        <div>
          <router-link to='/logon'> <button type="submit" name="submit" value="true" class="setsize" >注册</button></router-link>
        </div>
      </div>
      <div class="image">
        <img src="../assets/music-1.jpg" style="height: 380px;width: 550px">

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: '无人组音乐论坛',
        userName:'',
        passWord:''

      }
    },
    mounted(){

    },
    methods:{
      loginClick(){
        this.$axios({
          method: "post",
          url: '/login',
          data: {
            passWord: this.passWord,
            userName:this.userName,
          }
        })
          .then(res=>{
            // if(res.data.code)
            console.log('res',res)
            if(res.data.code!='1'){
              alert('您已登陆成功！')
              this.$router.push({path:'/',query:{username:this.userName}})
            }
            else {
              alert("用户名或密码错误")
            }
            //location.reload();
          })
      }
    }
  }
</script>





<style scoped>
  .login_total{
    height: 650px;
  }
  .login_lr{
    position: relative;
    top: 50px;
    height: 550px;
    width: 1000px;
    align-content: center;
    margin: 0 auto;
  }
  .login{
    position: relative;
    float: right;
    width: 400px;
    margin-right: 50px;
  }
  .setsize{
    margin-left: 75px;
    margin-top: 15px;
    height: 40px;
    width:200px;
    font-size: 25px;
    background: aqua;
    align:center;
  }
.image{
  width: 500px;
  position: relative;
  float: left;
  margin-top: 30px;
  margin-left: 0px;
}
  .login-container{
    display: flex;
    margin: 0 auto;
    width: 300px;
    margin-top: 30px;
  }
  .login-password{
    width: 80px;
    line-height: 40px;
    text-align: right;
  }
  .input-login{
    width: 220px;
  }

</style>
