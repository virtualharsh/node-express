const User = require('../models/user')

const getAllUsers =  async (req,res) =>{
    const users = await User.find({})
    return res.status(200).send(users);
}

const addUser = async(req,res)=>{
    const body = req.body;
    const result = await User.create({
        f_name: body.f_name,
        l_name: body.l_name,
        gender: body.gender,
        email: body.email
    })
    return res.status(201).json({ message: "Success" })
}

const getUserByMail = async (req, res) => {
    const id = req.params.id;
    const user = await User.findOne({ email: id })
    return res.status(200).json(user);
}

const updateUserByMail = async (req, res) => {
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
}

const deleteUserByMail = async (req, res) => {
    const id = req.params.id;
    const deletedUser = await User.findOneAndDelete({ email: id })
    return res.status(200).json(deletedUser);
}

module.exports = {getAllUsers,addUser, getUserByMail, updateUserByMail, deleteUserByMail}