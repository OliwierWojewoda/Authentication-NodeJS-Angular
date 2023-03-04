const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');

const User = require('../models/user');

exports.signup = async(req,res,next) => {
    console.log(req.body)
    const errors = validationResult(req);   
    if(!errors.isEmpty()) return;

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    try{
        const hashedPassword = await bcrypt.hash(password, 8)

        const userDetails = {
            name: name,
            email: email,
            password: hashedPassword,
        }
        console.log(userDetails)
        const result = await User.save(userDetails);
        
        res.status(201).json({message:'User registered'})
    }
    catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
}