const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.urlencoded({ extended: false }))

// connection
mongoose
    .connect('mongodb://localhost:27017/Demo')
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e))


// schema
const userSchema = new mongoose.Schema({
    f_name: {
        type: String,
        required: true
    },
    l_name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false,
        unique: true
    },
    gender: {
        type: String,
        required: true
    }
}, { timestamps: true })

// model
const User = mongoose.model('users', userSchema);


app.get('/', (req, res) => {
    res.send('<h1>Homepage</h1>')
})

app.get('/users', async (req, res) => {
    const users = await User.find({})
    const html = `
        <ul>
            ${users.map((user) => `<li>${user.f_name} ${user.l_name} ${user.email}</li>`).join('')}
        </ul>
        `
    return res.status(200).send(html);
})

app.route('/api/user')
    .get(async (req, res) => {
        const users = await User.find({})
        return res.status(200).send(users);
    })
    .post(async (req, res) => {
        const body = req.body;
        const result = await User.create({
            f_name: body.f_name,
            l_name: body.l_name,
            gender: body.gender,
            email: body.email
        })
        return res.status(201).json({ message: "Success" })
    })

app.route('/api/user/:id')
    .get(async (req, res) => {
        const id = req.params.id;
        const user = await User.findOne({ email: id })
        return res.status(200).json(user);
    })
    .patch(async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        const updatedUser = await User.findOneAndUpdate(
            { email: id },
            {
                $set: {
                    f_name: body.f_name,
                    l_name: body.l_name,
                    gender: body.gender,
                }
            }, { new: true })
        return res.status(200).json(updatedUser);
    })
    .delete(async (req,res)=>{
        const id = req.params.id;
        const deletedUser = await User.findOneAndDelete({email:id})
        return res.status(200).json(deletedUser);
    })

app.listen(3000, (e) => {
    console.log("Server running on http://localhost:3000");
})