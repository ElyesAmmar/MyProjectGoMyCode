const mongoose= require('mongoose')
const {Schema, model} = mongoose

const orderSchema = new Schema ({
    OrderNum: {type:Number, required:true},
    OrderDate: { type: String},
    OrderClient: {
        Name: { type: String},
        Address: {type: String},
        Phone: {type: Number}
    },
    Products:[{
        Name: {type:String, required:true},
        Quantity: {type:Number,required:true },
        Price: {type:Number,required:true}
    }],
    TotalPrice: {type:Number},
    TotalQuantity: {type:Number },
})

const Orders = model("Orders", orderSchema);

module.exports = Orders;