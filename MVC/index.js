const express = require('express')
const userRouter = require('./routes/user')
const {connectMongo} = require('./connection')
const { log } = require('./middlewares')



const app = express()

connectMongo('mongodb://localhost:27017/Demo')

app.use(express.urlencoded({extended:false}))
app.use('/user',userRouter);
app.use(log())

app.get('/',(req,res)=>{
    res.send("Homepage")
})

app.listen(3000,(e)=>{
    console.log("Server running on http://localhost:3000");
})