const mongoose= require('mongoose')
const {Schema, model} = mongoose

const orderSchema = new Schema ({
    OrderNum: {type:Number, required:true},
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
    TotalPrice: {type:Number, required:true },
    TotalQuantity: {type:Number, required:true },
})

const Order = model("Orders", orderSchema);

module.exports = Order;