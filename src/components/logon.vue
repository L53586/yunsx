<template>
  <div class="login_total" >

    <div class="login_lr">
      <div class="login">
        <h1 style="margin-left: 50px">please logon</h1>
        <div class="login-container">
          <div class="login-password">用户名：</div>
          <el-input v-model="userName" placeholder="请输入内容" class="input-login"></el-input>
        </div>

        <div  class="login-container">
          <div class="login-password">邮箱：</div>
          <el-input v-model="email" placeholder="请输入邮箱"  class="input-login"></el-input>
        </div>
        <div class="login-container">
          <div class="login-password">密码：</div>
          <el-input v-model="passWord" placeholder="请输入密码" show-password class="input-login"></el-input>
        </div>
        <div class="login-container">
          <div class="login-password">新密码：</div>
          <el-input v-model="newpassWord" placeholder="请再次输入密码" show-password class="input-login"></el-input>
        </div>
        <div>
          <button type="submit" name="submit" value="true" class="setsize" @click="logonClick" ><strong >注册</strong></button>
          </br>
          </br>
          <div >
            新用户请阅读<a href="#">《隐私保护说明》</a>
          </div>
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
        email:'',
        passWord:'',
        newpassWord:''
      }
    },
    methods:{
      logonClick(){
        this.$axios({
          method: "post",
          url: '/logon',
          data: {
            passWord: this.passWord,
            userName:this.userName,
            email:this.email,
          }
        })
          .then(res=>{
            console.log(res)
            if(res.data.code=='0'){
               alert("该用户名已经存在")
            }
            else {
              alert("注册成功")
            }
        })
        if(this.passWord!=this.newpassWord){
              alert('两次密码不相同');
            }
       // location.reload();
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
    margin-top: 20px;
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
    margin-top: 20px;
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
