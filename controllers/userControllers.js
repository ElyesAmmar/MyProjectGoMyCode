const User = require('../model/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const isAuth = require('../middleware/isAuth');
require('dotenv').config({path:'../.env'})

exports.register = async(req,res)=>{
    
  const result = req.body
  try {
    
      const check = await User.findOne({Email: result.Email})
      if(check){
        return res.status(400).send({msg: "user already exist"})
      }else{
        const user = new User(result)

        // create salt and hash
        const salt = 10;
        const hashedPassword = await bcrypt.hash(result.Password, salt)
        user.Password = hashedPassword;
        await user.save()

        // sign user 
        const   payload = {
          id: user._id,
         }
        const token = await jwt.sign(payload, process.env.secretKey)
        return res.status(200).send({msg: "User Register Success", user, token})
      }

  } catch (error) {
      console.log(error)
      res.status(500).send({msg:"User Register Failed"})
  }
}

exports.login = async(req,res)=>{
const result = req.body
console.log(result)
  try {
    console.log(process.env.secretKey)
      const user = await User.findOne({Email: result.Email})
      if(!user){
          return res.status(400).send({msg: "Please provide a valid email address and password. "})
        }else{
      const isMatch = await bcrypt.compare(result.Password, user.Password )
      
        if(!isMatch){
          return res.status(400).send({msg:'Please provide a valid email address and password. '})
        }else{
          // sign user 
         const payload = {
          id: user._id,
         }
         
        const token = await jwt.sign(payload, process.env.secretKey)
          return res.status(200).send({msg:'User Login success', user, token})
        }
      }
  } catch (error) {
      console.log(error)
      res.status(500).send({msg:"User Login Failed", error})
  }
}

// exports.getAuthUser = isAuth, (req, res)=>{
//   res.status(200).send({user: req.user})
// }


// manuel validation 

// exports.Register = async(req,res)=>{
    
//     const result = req.body
//     try {
//         if(!result.FirstName || !result.LastName || !result.Email || !result.Password){
//           return  res.status(400).send({msg:'please enter all fields'})
//         }

//         const user = await User.findOne({Email: result.Email})
//         if(user){
//           return res.status(400).send({msg: "user already exist"})
//         }else{
//           const newUser = new User(result)

//           // create salt and hash
//           const salt = 10;
//           const hashedPassword = await bcrypt.hash(result.Password, salt)
//           newUser.Password = hashedPassword;
//           await newUser.save()
//           return res.status(200).send({msg: "User Register Success", newUser})
//         }

//     } catch (error) {
//         console.log(error)
//         res.status(500).send({msg:"User Register Failed"})
//     }
// }

// exports.Login = async(req,res)=>{
//   const result = req.body
//     try {
//         if(!result.Email || !result.Password){
//           return  res.status(400).send({msg:'please enter all fields'})
//         }

//         const user = await User.findOne({Email: result.Email})
//         if(!user){
//           return res.status(400).send({msg: "user does not exist"})
//         }else{
//         const isMatch = await bcrypt.compare(result.Password, user.Password )
//           if(!isMatch){
//             return res.status(400).send({msg:'Bad Credentials password'})
//           }else{
//             return res.status(200).send({msg:'User Login success', user})
//           }
//         }
//     } catch (error) {
//         console.log(error)
//         res.status(500).send({msg:"User Login Failed"})
//     }
// }