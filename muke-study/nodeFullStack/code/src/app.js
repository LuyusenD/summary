const express = require('express')

const app = express()

const modules = require('../models')

app.get('/create',async (req,res)=>{
  let {name} = req.query;
  //新增数据
  let data = await modules.User.create({
    name
  })

  res.json({
    message: 'create is ok',
    data
  })
})

app.get('/list',async (req,res) => {
  //查询user表 所有数据
  let data = await modules.User.findAll()
  res.json({
    message: 'search is ok',
    data,
    total:data.length
  })
})

app.get('/list_search/:name/:page',async (req,res) => {
  let {name,page} = req.params
  let limit = 10,
      offset = (page - 1) * limit
  //查询user表 筛选 分页
  let data = await modules.User.findAndContentAll({
    where: {
      name
    },
    limit,
    offset
  })
  res.json({
    message: 'search is ok',
    data,
    total:data.length
  })
})

app.get('/detail/:id',async (req,res)=>{
  let {id} = req.params
  //查询user表 根据条件查询一个数据
  let data = await modules.User.findOne({
    where:{
      id
    }
  })

  res.json({
    message: 'search is ok',
    data
  })
})

// try catch
app.get('/update/:id',async (req,res,next)=>{
  try {
    let {id} = req.params
    let {name} = req.query
    //查询user表 根据条件查询一个数据
    let data = await modules.User.findOne({
      where:{
        id
      }
    })
    //if search data length > 0 ,run code
    // send updated end  params
    if (data) {
      data = await data.update({
        name
      })
    }

    res.json({
      message: 'search is ok',
      data
    })
  }catch(err) {
    next(new Error('error'))
  }
})
//modules.User  访问user模型
//modules.Sequlize
//modules.sequlize
app.use((err,req,res,next)=>{
  if (err)
    res.status(500)
       .json({
         message: err
       })
})

app.listen(3000, ()=> {
  console.log('host localhost  port 9999  start web server')
})
/*
  配置nodemon
  nodemon 提供自动更新服务: 修改代码自动检测更新
  npm install nodemon -D
  update package.json config 
  package.json --> scripts --> "start": "nodemon src/app.js"

  nodemon.json  is nodemon config
  nodemon.json --> watch 
    watch type is Array  --> [".\/src\/**\/*.js"]
*/

/*
  配置404 or 异常处理
  no_found_handler
  error_handler

  
  app.get('/demo',(req,res)=>{
    throw new Error('测试异常')
  })

  function error_handler (err,req,res,next) {
    if (err) 
      res.status(500)
      .json({
        message: '服务异常'
      })
  }

  function no_found_handler (req,res,next) {
    res.json({
      uri: req.path,
      message: 'api is not defined'
    })
  }

  app.use(no_found_handler)
  app.use(error_handler)
*/

/*
  sequelize node 集成 

  1. install "sequelize" and "sequelize-cli"
  2. use sequelize-cli init proect , database config info
        code: npx sequelize init
  3. generate model file
        code: npx sequelize model:generate --name demo_databases --attributes name:string,deadline:data,content:string
  4. model file move generate databases
        code: npx sequelize db:migrate

  ps： if unwanted createAt and updatedAt, move file "models/user.js" add code "timestamps:false"
       if no pass params , can add default value . 
          config code:
            name: {
              type: DataTypes.STRING,
              defaultValue: 'TOM_default'
            }
*/