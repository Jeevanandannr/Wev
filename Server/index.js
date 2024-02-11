const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.post('/api/register',(req,res)=>{
    res.json({status:'success'})
})

app.listen(1337,()=>{
    console.log('Server Started on 1337')
})