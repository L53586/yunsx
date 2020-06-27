<template >
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="table-container" style="margin-top: 10px">
      <div class="table-top">
        <div class="table-top-frist" @click="National_style">
          <div class="table-top-first-top">
            <img src="../assets/5.jpg" style="width: 330px;height: 240px">
          </div>
          <div class="table-top-first-bottom">
            <h1 style="align-content: center">国风</h1>
          </div>
        </div>
        <div class="table-top-frist" @click="ballad">
          <div class="table-top-first-top" >
            <img src="../assets/10.jpg" style="width: 330px;height: 240px">
          </div>
          <div class="table-top-first-bottom" >
            <h1 style="align-content: center">民谣</h1>
          </div>
        </div>
        <div class="table-top-frist" @click="jazz">
          <div class="table-top-first-top">
            <img src="../assets/11.jpg" style="width: 330px;height: 240px">
          </div>
          <div class="table-top-first-bottom">
            <h1 style="align-content: center">爵士</h1>
          </div>
        </div>
      </div>
      <div class="table-bottom" style="margin-top:10px">
        <div class="table-top-frist" @click="J_K">
          <div class="table-top-first-top">
            <img src="../assets/13.jpg" style="width: 330px;height: 240px">
          </div>
          <div class="table-top-first-bottom">
            <h1 style="align-content: center">日韩</h1>
          </div>
        </div>
        <div class="table-top-frist" @click="E_A">
          <div class="table-top-first-top">
            <img src="../assets/14.jpg" style="width: 330px;height: 240px">
          </div>
          <div class="table-top-first-bottom">
            <h1 style="align-content: center">欧美</h1>
          </div>
        </div>
        <div class="table-top-frist" @click="DJ">
          <div class="table-top-first-top">
            <img src="../assets/15.jpg" style="width: 330px;height: 240px">
          </div>
          <div class="table-top-first-bottom">
            <h1 style="align-content: center" >DJ曲</h1>
          </div>
        </div>
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
      }
    },
    methods:{
      ballad(){
        this.$router.push({
          path: '/blog',
          query: {
            id: '民谣'
          }
        })
      },
      National_style(){
        this.$router.push({
          path: '/blog',
          query: {
            id: '国风'
          }
        })
      },
      jazz(){
        this.$router.push({
          path: '/blog',
          query: {
            id: '爵士'
          }
        })
      },
      J_K(){
        this.$router.push({
          path: '/blog',
          query: {
            id: '日韩'
          }
        })
      },
      E_A(){
        this.$router.push({
          path: '/blog',
          query: {
            id: '欧美'
          }
        })
      },
      DJ(){
        this.$router.push({
          path: '/blog',
          query: {
            id: 'DJ'
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .table-top-frist{
    display: inline-block;
    width: 330px;
    height: 330px;
    border: 1px solid;
    margin-top: 15px;
    cursor:pointer;
  }
  .table-top-first-top{
    //display: inline-block;
    width: 330px;
    height: 240px;
    margin-top: 4px;
  }
  .table-top-first-bottom{
    width: 330px;
    height: 80px;
    border: 1px solid;
    margin-top: 4px;
  }
</style>
