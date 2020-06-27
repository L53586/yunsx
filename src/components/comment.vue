<template>

  <div  class="comment" >
    <div class="comment_body">
      <div class="comment_title">
        {{musicTitle}}
      </div>
      <div class="comment_context">
        {{musicDetail}}
      </div>
      <div >
        <el-input  v-model="comment" placeholder="请输入内容" maxlength="100" show-word-limit type="textarea"
                   :autosize="{ minRows: 3, maxRows: 3}" class="input-title"></el-input>
        <button type="submit" name="submit" value="true" style="margin-bottom: 0px" @click="respond"><strong >回复</strong></button>
      </div>
    </div>
    <div class="comment_comment">
      <div v-for="data in showDataList" :key="data.commention" class="comment_design" >{{data.commention}}</div>
    </div>
    <span class="demonstration">显示总数：{{totalData}}</span>
    <div class="span-row-container">
      <span v-for="index of totalData" :key="index" class="span-row" @click="getCurrentPage(index)">{{index}}</span>
    </div>
  </div>

</template>



<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        id: '',
        comment:'',
        musicTitle:'',
        musicDetail:'',
        commentList:[],
        showDataList:[],
        totalData:0
      }
    },
    methods:{
      respond(){
        this.$axios({
          method: "post",
          url: '/comment',
          data: {
            title: this.musicTitle,
            comment:this.comment,
          }
        })
          .then(res=>{
            // if(res.data.code)
            console.log(res)
            if(res.data.code=='1'){
              alert('您已发表成功！')
              this.showDataList.unshift({commention:this.comment,title:this.musicTitle})
            }
            // location.reload();
          })
      },
      getCurrentPage(index){
        console.log('index',index,this.commentList)
        this.showDataList=[]
        for(let i=(index-1)*8;i<this.commentList.length;i++){
          if(i==index*8){
            break
          }
          this.showDataList.unshift(this.commentList[i])
          console.log(this.commentList[i])
        }
        // for(let i=this.commentList.length-(index-1)*8;i>=0;i--){
        //   if(i==this.commentList.length-index*8){
        //     break
        //   }
        //   this.showDataList.unshift(this.commentList[i])
        //   console.log(this.commentList[i])
        // }
      }
    },
    mounted(){
      const musicTitle=this.$route.query.music_title
      this.musicTitle=musicTitle
      this.$axios({
        method: 'get',
        url:'/blog',
        params: {
          musicTitle: musicTitle,
        }
      })
        .then(res=>{
          console.log('res',res.data.data)
          this.musicDetail=res.data.data[0].text
          this.$axios({
            method: 'get',
            url:'/get-comment-list',
            params: {
              title: musicTitle,
            }
          })
            .then(res=>{
              console.log('res',res.data.data)
              this.commentList=res.data.data
              this.totalData=parseInt(res.data.data.length/8)+1
              this.showDataList=res.data.data.slice(0,8)
            })
        })
    },
    // watch:{
    //   "$route":'routerChange'
    // }

  }
</script>

<style scoped>
  .comment{
    width: 50%;
    margin: 0 auto;
    align-content: center;
  }
  .comment_body{
    height: 350px;
    align-content: center;
    margin: 0 auto;
    border: black 3px solid;
  }
  .comment_title{
    height: 50px;
    font-size:25px;
    align-content: center;
    margin: 10px auto;
    border: #ffc456 3px solid;
  }
  .comment_context{
    height: 300px;
    text-align: left;
    padding-left: 20px;
  }
  .input-title{
    width: 60%;
    height: 70px;
    border: 5px;
  }
  .comment_design {
    width: 50%;
    font-size: 25px;
    background: #42b983;
    border:  lime 3px solid;
    margin: 10px auto;
    line-height: 60px;
  }
  .comment_comment{
    margin-top: 120px;
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
