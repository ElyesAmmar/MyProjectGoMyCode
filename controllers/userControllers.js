const User = require('../model/user');
const bcrypt = require('bcrypt');
require('dotenv').config({path:'../.env'})

exports.Register = async(req,res)=>{
    
  const result = req.body
  try {
      

      const user = await User.findOne({Email: result.Email})
      if(user){
        return res.status(400).send({msg: "user already exist"})
      }else{
        const newUser = new User(result)

        // create salt and hash
        const salt = 10;
        const hashedPassword = await bcrypt.hash(result.Password, salt)
        newUser.Password = hashedPassword;
        await newUser.save()
        return res.status(200).send({msg: "User Register Success", newUser})
      }

  } catch (error) {
      console.log(error)
      res.status(500).send({msg:"User Register Failed"})
  }
}

exports.Login = async(req,res)=>{
const result = req.body
  try {
     
      const user = await User.findOne({Email: result.Email})
      if(!user){
          return res.status(400).send({msg: "user does not exist"})
        }else{
      const isMatch = await bcrypt.compare(result.Password, user.Password )
        if(!isMatch){
          return res.status(400).send({msg:'Bad Credentials password'})
        }else{
          return res.status(200).send({msg:'User Login success', user})
        }
      }
  } catch (error) {
      console.log(error)
      res.status(500).send({msg:"User Login Failed"})
  }
}


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