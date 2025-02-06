# node-express

## initialize node folder
> npm init

## to run the file index.js
> npm start

## install express
> npm i express

## install nodemon globally for auto restarting the server
> npm i -g nodemon
## in package.json
```
{
    "name": "node-learnings",
    "version": "1.0.0",
    "description": "node js with backend",
    "homepage": "https://github.com/virtualharsh/node-express#readme",
    "bugs": {
        "url": "https://github.com/virtualharsh/node-express/issues"
    },
    "repository": {
        "type": "git",
        "url": "git+https://github.com/virtualharsh/node-express.git"
    },
    "license": "ISC",
    "author": "Harsh",
    "type": "commonjs",
    "main": "index.js",

    // 🔥 Scripts section
    "scripts": {
        "start": "nodemon index.js"
    },

    "dependencies": {
        "express": "^4.21.2"
    }
}

```

# Database notes

> ### show dbs 

> ### use Database-name

> ### db - Displays current working database

> ### use newDatabase 

> ### db.createCollection("name")

> ### db.collection.insertOne() 

> ### db.users.updateOne({ name: "Alice" }, { $set: { age: 26 } })

> ### db.users.deleteOne({ name: "Alice" })

> ### db.users.drop()

> ### db.users.find({ age: { $gt: 20 } })


# Installing mongoose
> npm i mongoose

## Connecting with database
```
const mongoose = require('mongoose')
```

```
mongoose
.connect('mongodb://localhost:27017/Demo')
.then(() => console.log("Database Connected"))
.catch((e) => console.log(e))
```

## Create Schema
```
const loginSchema = new mongoose.Schema({
    userId : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})
```

## Creating model
> const User = mongoose.model('user',loginSchema)