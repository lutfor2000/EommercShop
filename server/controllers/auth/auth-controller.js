
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User')



//====================Register==================
const registerUser = async(req, res) => {

    const {userName,email,password} = req.body;

    try {

        const hashPassword = await bcrypt.hash(password,12);
        const newUser = new User({
            userName,
            email,
            password: hashPassword,
        })

        await newUser.save()
        res.status(200).json({
            success : true,
            message : 'Registration successful !'
        })
        
    } catch (e) {

        console.log(e);
        res.status(500).json({
            success : false,
            message : 'Some error required'
        })

    }

}


//====================Login====================
const login = async(req,res) => {
     
    try {
        
    } catch (e) {

        console.log(e);
        res.status(500).json({
            success : false,
            message : 'Some error required'
        })

    }

}

//====================Logout===================


//====================Auth-Middleware==========

module.exports = {registerUser};