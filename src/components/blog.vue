<template>
  <div >
      <h1>{{id}}</h1>
    <div style="height: 60px">
      <router-link to='/creat'> <button type="submit" name="submit" value="true" class="creat_blog" ><strong >创建帖子</strong></button></router-link>
    </div>
    <div v-for="data in showDataList" :key="data.title" class="blog_size"  @click="clickToDetail(data.title)">{{data.title}}</div>
    <span class="demonstration">显示总数：{{totalData}}</span>
    <div class="span-row-container">
      <span v-for="index of totalData" :key="index" class="span-row" @click="getCurrentPage(index)">{{index}}</span>
    </div>
  </div>

</template>



<script>
  export default {
    // name: 'HelloWorld',
    data () {
      return {
        id: '',
        dataList:[],
        showDataList:[],
        totalData:0
      }
    },
    methods:{
      routerChange(){
        console.log('当前在blog文件中，routerChange')
        console.log("this.route",this.$route.query.id)
        // this.id=this.$route.query.id

      },
      clickToDetail(title){
        this.$router.push({path:'/comment',query:{music_title:title}})
      },
      getCurrentPage(index){
        console.log('index',index)
        this.showDataList=[]
        for(let i=(index-1)*8;i<this.dataList.length;i++){
          if(i==index*8){
            break
          }
          this.showDataList.push(this.dataList[i])
        }
      }
    },
    mounted(){
      console.log(this.$route.query.id,'mounted 函数')
      this.id=this.$route.query.id
      this.$axios({
        method: 'get',
        url:'/category',
        params: {
          category:this.$route.query.id,
        }
      })
        .then(res=>{
          console.log('res',res)
          this.dataList=res.data.data
          this.totalData=parseInt(res.data.data.length/8)+1
          this.showDataList=res.data.data.slice(0,8)
        })
    },
    watch:{
      "$route":'routerChange'
    }

  }
</script>

<style scoped>
  .creat_blog{
    width: 100px;
    height: 40px;
    margin-right: 400px;
    float: right;
  }
  .blog_size{
    width: 50%;
    font-size: 25px;
    background: beige;
    border: black 3px solid;
    margin: 10px auto;
    line-height: 60px;
    cursor: pointer;
  }
  .span-row-container{
    margin-top: 10px;
  }
  .span-row{
    background: #ffffff;
    border: 1px solid #000;
    width: 30px;
    height: 30px;
    display: inline-block;
    line-height: 30px;
    text-align: center;
    margin-left: 5px;
    cursor: pointer;
  }

</style>
