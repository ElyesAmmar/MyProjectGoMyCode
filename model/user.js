const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const userSchema = new Schema ({
    FirstName: {type:String, required:true},
    LastName: {type:String, required:true},
    Email: {type:String, required:true, unique:true},
    Password: {type:String, required:true}
   
})

const User = model("Users", userSchema);

module.exports = User;