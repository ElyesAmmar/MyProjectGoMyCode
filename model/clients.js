const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const clientSchema = new Schema ({
    Name: {type:String, required:true},
    Email: {type:String},
    Address: {type:String, required:true},
    Company: {type:String},
    Phone: {type:Number, required:true},
    Reference: {type:Number, required:true}
})

const Clients = model("Clients", clientSchema);

module.exports = Clients;