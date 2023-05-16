const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const productSchema = new Schema ({
    ProductId: {type:Number},
    Name: {type:String, required:true},
    Image: {type:String},
    Barcode: {type:Number, unique:true},
    Stock: {type:Number, required:true},
    Price: {type:Number, required:true},
    Categorie: {type:String, required:true}
})

const Products = model("Products", productSchema);

module.exports = Products;