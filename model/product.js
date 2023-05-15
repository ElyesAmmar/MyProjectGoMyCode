const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const productSchema = new Schema ({
    // _id: {type:Number},
    Name: {type:String, required:true},
    Image: {type:String},
    Stock: {type:Number, required:true},
    Price: {type:Number, required:true},
    Categorie: {type:String, required:true}
})

const Products = model("Products", productSchema);

module.exports = Products;