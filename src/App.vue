<template >
  <div id="app">
   <div id="head">
     <div class="image-top" >
       <div class="logo">
         <router-link to='/'>
           <img src="./assets/3654.png" style="float: left;margin-top:10px;width: 110px;height: 110px">
         </router-link>
       </div>
       <div class="search">
         <el-input v-model="search"  placeholder="请输入内容" style="height: 30px;width:300px;background: #ffcc99 ;border: none;float: left" ></el-input>
<!--         <input type="text" value="网站搜索" style="height: 30px;background: #ffcc99 ;border: none;float: left">-->
         <button type="submit" name="searchsubmit"  style="height: 38px;background: #ffcc99;border: none;float: left"@click="serchClick">搜索</button>
       </div>
       <router-link to='/login' v-if="!userName"><button id="button" style="margin-right: 50px" >登录</button></router-link>
       <router-link to='/login' v-else><button id="button" style="margin-right: 50px;width: 50px;height: 30px" >{{userName}}</button></router-link>

       <router-link to='/logon' v-if="!userName"><button id="button" >立即注册</button></router-link>
       <router-link to='/' v-else><button id="button" style="width: 50px;height: 30px"  @click="exit">退出</button></router-link>

     </div>
   </div>


    <router-view/>

    <hr style="width: 60%;align-content: center ;margin-top: 60px"/>
    <div id="footer">
      <h2 style="margin-left: 450px;float: left;background-color: #ffcc99"> 无人组制作</h2>
      <br>
        <h5 style="margin-right: 450px; height:100px;float: right;"><strong>team: </strong>成员1 ，成员2 ，成员3，成员4，成员5</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      search:'',
      userName:''
    }
  },
  methods:{
    serchClick(){
      console.log('test',this.search)
      //有后端，发起http请求

    },
    exit(){
      this.userName=''
      console.log('123',this.userName)
    },
    hasLogin(){
      if(!this.userName)
      {
        console.log('test',this.$route.query.username)
        this.userName=this.$route.query.username
      }
    }
  },
  watch:{
    "$route":'hasLogin'
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color: #ffcc99;
  //margin-top: 60px;
}
#head{
  //margin-top: 20px;
  height: 150px;
  background-color: #ffcc99;
}

.image-top{
  background-image: url("./assets/kuang.gif");
  background-position: center;
  width: 60%;
  height: 131px;
  margin: 0 auto;
  }
.search{
  position: absolute;
  top: 45px;
  width: 350px;
  margin:0 400px;
  height: 30px;
}
#button {
  margin-top: 50px;

  float: right;

}

#footer{
  height: 70px;
  margin-bottom: 20px;
  background-color: #ffcc99;
}
</style>
