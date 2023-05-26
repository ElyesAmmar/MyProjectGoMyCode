const {body, validationResult} = require("express-validator")

const registerRules= ()=> [
    body("FirstName" , "FirstName is required").notEmpty(),
    body("LastName" , "LastName is required").notEmpty(),
    body("Email" , "Email should be email").isEmail(),
    body("Password" , "Password most contain 5 car or more").isLength({
        min: 5,
        max: 15
    }),
]

const loginRules= ()=> [
    body("Email" , "Email should be email").isEmail(),
    body("Password" , "Password most contain 5 car or more").isLength({
        min: 5,
        max: 15
    }),
]

const validator = (req, res,next) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array()})
    }
    next()
}

module.exports = {validator, registerRules, loginRules}