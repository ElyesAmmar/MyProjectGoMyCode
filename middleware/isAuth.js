const jwt = require('jsonwebtoken');
require('dotenv').config({path:'../.env'});
const User = require('../model/user');


const isAuth = async(req, res, next) =>{
    try {

        // get token from req headers
        const token = req.headers['x-auth-token'];
        // check if token exist
        if(!token){
            return res.status(400).send({msg:'No token, authorization denied'});
        }
        const decode = await jwt.verify(token, process.env.secretKey)
       console.log(decode)
        // get user by id from payload
        const user = await User.findById(decode.id);
        if(!user){
            return res.status(400).send({msg:'User not found'});
        }
        req.user = user
        next();
        
   
    } catch (error) {
        return res.status(500).send({msg: 'Token not valid'})
        console.log(error)
    }
}

module.exports = isAuth;