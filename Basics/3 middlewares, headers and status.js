const express = require('express')

const app = express();

// Middlewares are created by app.use
app.use((req,res,next)=>{
    console.log("middleware 1");
    req.message = "message 1"
    next()
})

app.use((req, res, next) => {
    console.log("middleware 2");
    console.log(req.message);
    req.message = "message 2";
    next()
})

app.get('/',(req,res)=>{
    console.log(req.message);
    res.setHeader("X-MyName","Harsh") // custom header good practice to use X- in custom header
    res.status(201).json({msg : "Hello world !"}); // set status code
})

app.listen(3000,(e)=>{
    (e)?console.log(e):console.log('server running on http://localhost:3000');;
})