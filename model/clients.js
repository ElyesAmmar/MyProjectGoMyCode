const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const clientSchema = new Schema ({
    // _id: {type:Number},
    Name: {type:String, required:true},
    Email: {type:String},
    Company: {type:Number, required:true},
    Phone: {type:Number, required:true}
})

const Clients = model("Clients", clientSchema);

module.exports = Clients;