const User = require('../models/user.models');

const userRegister = async(req, res) => {
    // const userId = req.user.userId || 0;
    const user = new User({
        Number: req.body.number,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        Alias: req.body.alias,
    });
    user.save()
        .then(data => {
            console.log("registered user Successfull")
            res.status(201).json(data)
        })
        .catch(err => {
            console.log("Failed to register User", err)
        })
}

const getUser = async(req, res) => {
    // let current = req.userId
    res.status(201).json("Find a user");
}

module.exports = {
    userRegister,
    getUser
}