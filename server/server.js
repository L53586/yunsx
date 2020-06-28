const express = require('express')
const multer = require('multer')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
// work with express
const server = require('http').Server(app)
const connection = require('./db')

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  if (req.method === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
})

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, './dist')))

//例子：get方法的例子
app.get('/123',function(req,res){
  console.log('teste',req.query)
  return res.json(questions)
})


//上传登录的用户名并判断是否存在
app.post('/login', function (req, res) {
  console.log('12345678')
  // return res.json({code:1})
  const {userName,passWord}=req.body
  console.log('param',userName,passWord)
  const sql=`select * from user_info where username='${userName}'`
  connection.query(sql,function (error,results) {
    if (error) throw error
    console.log('results',results)
    if(results.length!=0){
      if (results[0].password === passWord) {
        return res.json({code: 0, data: results})
      }
    }
    return res.json({code: 1, msg: 'Wrong EmailAddress or Wrong PassWord'})
  })
})

//上传注册的信息
app.post('/logon', function (req, res) {
  const {userName,passWord,email}=req.body
  console.log('userName,passWord,email',userName,passWord,email)
  const sql1=`select * from user_info where username= '${userName}'`
  connection.query(sql1,function (error,results) {
    if (error) {
      console.log('查找时出错')
      throw error
    }
    console.log('results',results)
    if(results.length!=0){
      return res.json({code:0,msg:"Your username has logon yet"})
    }
    const sql=`insert into user_info (username, password, email) values ('${userName}', '${passWord}', '${email}')`
    connection.query(sql,function (err,rest) {
      if(err){
        console.log('插入时出错')
        throw err
      }
      console.log('result',rest)
      return res.json({code:1,msg:"You have logon succeed!"})
    })
  })
})


//创建上传帖子
app.post('/commention', function (req, res) {
  const {title,text,category}=req.body
  console.log('title,context,category',title,text,category)
    const sql=`insert into blog (title, text, category) values ('${title}', '${text}', '${category}')`
    connection.query(sql,function (err,rest) {
      if(err){
        console.log('创建时出错')
        throw err
      }
      console.log('result',rest)
      return res.json({code:1,msg:"You creat blog succeed!"})
    })
})

//上传评论
app.post('/comment',function (req,res) {
  const {title,comment}=req.body
  console.log('title,comment',title,comment)
  const sql=`insert into comment (title, commention) values ('${title}', '${comment}')`
  connection.query(sql,function (err,rest) {
    if(err){
      console.log("评论出错")
      throw err
    }
    console.log('result',rest)
    return res.json({code:1,msg:"You creat blog succeed!"})
  })
})

//获取回复内容
app.get('/get-comment-list', function (req, res) {
  const {title} = req.query
  console.log('category', title)
  const sql =`select * from comment where title='${title}'`
  connection.query(sql,  function (error, results, f) {
    if (error) throw error
    console.log('results', results[0], typeof (results[0]))
    return res.json({code: 1, data: results})
  })
})


//获取类别一致的帖子
app.get('/category', function (req, res) {
  const {category} = req.query
  console.log('category', category)
  const sql =`select * from blog where category='${category}'`
  connection.query(sql, ['category', category], function (error, results, f) {
    if (error) throw error
    console.log('results', results[0], typeof (results[0]))
    return res.json({code: 1, data: results})
  })
})

//获取帖子的内容
app.get('/blog',function (req,res) {
  const {musicTitle}=req.query
  console.log('musicTitle',musicTitle)
  console.log('blog',musicTitle)
  const sql=`select * from blog where title='${musicTitle}'`
  connection.query(sql,function (error,results) {
    if(error){
      throw error
    }
    console.log('results',results[0])
    return res.json({code:1,data:results})
  })
})

var upload = multer({ dest: 'uploads/'}) // 文件储存路径
app.post('/uploader', upload.single('musicMp3'), function(req, res, next) {
  let file = req.file;
  console.log(file)
  res.json({message: "ok"});
});

app.get('/', (req, res) => res.send('Hello World!'))

//app.listen(3000, () => console.log('app listening on port 3000!'))

server.listen(3000, function () {
  console.log('Node app start at port 3000')
})
