const User = require('../models/user')
const {v4: uuidv4} = require('uuid')

const handleCreateUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        await User.create({
            username: username,
            password: password
        })
    } catch (error) {
        console.log("error");
        return res.redirect('/signup')
    }

    return res.redirect('/login')
}

const handleUserLogin = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });

    if (!user) return res.render('login',{error: "invalid username or password"});

    const sessionId = uuidv4();
    res.cookie('uid',sessionId);
    return res.redirect('/');
}

module.exports = { handleCreateUser, handleUserLogin }