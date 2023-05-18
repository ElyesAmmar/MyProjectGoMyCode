const Order= require('../model/orders')

exports.getOrders = async (req,res)=>{
    try {
        let result = await Order.find({})
        res.status(200).send({msg:"getting orders success", response: result})
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"getting orders feiled"})
    }
}

exports.postOrders = async(req,res)=>{
    try {
        let num= 0
        let lastOrder = await Clients.findOne().sort({_id: -1}); // Get the last ID in the database
        
        if(lastOrder){
            num= lastOrder.OrderNum + 1
          } else{                                                   // If there are no products in the database, start with ID 1
            num= 10000
        } 
        const order= req.body
        const newOrder = new Order({...order,OrderNum:num})
        await newOrder.save()
        res.status(200).send({msg:"adding order success", response: newOrder})
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"adding order feiled"})
    }
}