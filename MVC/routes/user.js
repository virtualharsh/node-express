const express = require('express')

const {getAllUsers,addUser,getUserByMail, updateUserByMail, deleteUserByMail} = require('../controllers/user')

const router = express.Router();

router.route('/')
    .get(getAllUsers)
    .post(addUser)

router.route('/:id')
    .get(getUserByMail)
    .patch(updateUserByMail)
    .delete(deleteUserByMail)

module.exports = router