const express = require('express')
const URLRouter = require('./routes/url')
const {connectMongo} = require('./connection')
const app = express()

connectMongo('mongodb://localhost:27017/url')
app.use(express.urlencoded({ extended: false }))
app.use('/url', URLRouter);

app.get('/',(req,res)=>{
    return res.send('Homepage')
})


app.listen(3000,(e)=>{
    if (e) console.log(e);
    console.log("server running");
    
})