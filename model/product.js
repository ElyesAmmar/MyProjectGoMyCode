const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const productSchema = new Schema ({
    UserID: {type:Number},
    ProductId: {type:Number},
    Name: {type:String, required:true},
    Image: {type:String},
    Barcode: {type:Number, unique:true},
    Stock: {type:Number, required:true},
    Price: {type:Number, required:true},
    Category: {type:String, required:true},
    Cost: {type:Number}
})

const Products = model("Products", productSchema);

module.exports = Products;