const express = require('express')

const app = express()

app.get('/api/list',(req,res) => {
  res.json({
    code: 200,
    msg:'success'
  })
})

app.listen(3001,() => {
  console.log('ok');
})