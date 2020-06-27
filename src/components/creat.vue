<template>
  <div class="creat_blog_head" >
    <div style="margin-top: 50px">
      <el-select v-model="category" placeholder="请选择风格" style="float: right;">
        <el-option
          v-for="item in options"
          :key="item.category"
          :label="item.label"
          :value="item.category">
        </el-option>
      </el-select>
    </div>

    <div class="creat_blog_body_head">
      <h3>title</h3>
      <el-input  v-model="title" placeholder="请输入内容" maxlength="15" show-word-limit class="input-title"></el-input>
    </div>
    <div class="creat_blog_body_body">
      <h3>context</h3>
      <el-input  v-model="text" placeholder="请输入内容"  maxlength="350" show-word-limit type="textarea"
                 :autosize="{ minRows: 5, maxRows: 5}" class="input-title"></el-input>
    </div>
    <div style="margin-top: 20px">
      <h3>上传音乐</h3>
      <el-upload
        class="upload-demo"
        ref="upload"
        :limit="1"
        name="musicMp3">
<!--        :file-list="fileList"-->
<!--        :on-success="onSuccessData"-->
<!--        action="http://127.0.0.1:3000/uploader"-->
<!--        :before-upload="beforeUpload"-->

        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <div slot="tip" class="el-upload__tip">只能上传mp3文件，且不超过10MB</div>
        <div slot="tip" class="el-upload-list__item-name">{{fileName}}</div>
      </el-upload>

    </div>
    <button class="creat_blog" style="font-size: 25px" @click="submit" >提交</button>
  </div>

</template>


<script>
  export default {
    name: 'creat',
    data () {
      return {
        title:'',
        text:'',
        fileName:'',
        options: [{
          category: '国风',
          label: '国风'
        }, {
          category: '民谣',
          label: '民谣'
        }, {
          category: '欧美',
          label: '欧美'
        }, {
          category: '爵士',
          label: '爵士'
        }, {
          category: '日韩',
          label: '日韩'
        }, {
          category: 'DJ',
          label: 'DJ'
        }],
        category: ''
      }
    },
    methods:{
      serchClick(){
        // console.log('test',this.title)
        //有后端，发起http请求

      },
      submit(){
        this.$axios({
          method: "post",
          url: '/commention',
          data: {
            title: this.title,
            text:this.text,
            category:this.category,
          }
        })
          .then(res=>{
            // if(res.data.code)
            console.log(res)
            if(res.data.code=='1'){
              alert('您已发表成功！')
              this.$router.push({path:'/blog',query:{id:this.category}})
            }
           // location.reload();
          })
      }
      // onSuccessData(response, file, fileList) {
      //   console.log(response)
      //   console.log(file)
      //   console.log(fileList)
      // },
      // beforeUpload(file){
      //   console.log('testefasjdfkasfjksajf')
      //   console.log(file,'文件');
      //   this.files = file;
      //   const extension = file.name.split('.')[1] === 'mp3'
      //   const isLt2M = file.size / 1024 / 1024 < 10
      //   if (!extension && !extension2) {
      //     this.$message.warning('上传模板只能是mp3格式!')
      //     return
      //   }
      //   if (!isLt2M) {
      //     this.$message.warning('上传模板大小不能超过 10MB!')
      //     return
      //   }
      //   this.fileName = file.name;
      // }
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
  .input-title{
    width: 60%;
    height: 100px;
    border: 5px;
  }
  .creat_blog_head{
    width: 60%;
    align-content: center;
    margin: 0 auto;
    border: #ffcc99 5px;
  }
  .creat_blog_body_head{
    width: 100%;
    height: 100px;
    align-content: center;
    margin-top: 10px;
    border: #ffcc99 5px;
  }
  .creat_blog_body_body{
    width: 100%;
    height: 150px;
    align-content: center;
    margin-top: 10px;
    border: #ffcc99 5px;
  }


</style>
