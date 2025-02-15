const express = require('express')
const URLRouter = require('./routes/user')
const staticRouter = require('./routes/staticRouter')
const cookieParser = require('cookie-parser')
const { connectMongo } = require('./connection')
const path = require('path')

const app = express()

connectMongo('mongodb://localhost:27017/Auth')

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cookieParser());

app.set('view engine','ejs')
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


app.use('/',staticRouter)
app.use('/user', URLRouter);


app.listen(3000, (e) => {
    if (e) console.log(e);
    console.log("server running");
})