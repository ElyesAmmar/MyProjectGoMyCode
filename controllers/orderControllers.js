const Orders= require('../model/orders')

exports.getOrders = async (req,res)=>{
    try {
        let result = await Orders.find({})
        res.status(200).send({msg:"getting orders success", response: result})
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"getting orders feiled"})
    }
}

exports.postOrders = async(req,res)=>{
    try {
        let num= 0
        let lastOrder = await Orders.findOne().sort({_id: -1}); // Get the last ID in the database
        
        if(lastOrder){
            num= lastOrder.OrderNum + 1
          } else{                                     // If there are no products in the database, start with num 10000
            num= 10000
        } 
        // const datenow = new Date();
        // let date = `${datenow.getDate()}-${datenow.getMonth()}-${datenow.getFullYear()}`
        const order= req.body
        const newOrder = new Orders({...order,OrderNum:num})
        await newOrder.save()
        res.status(200).send({msg:"adding order success", response: newOrder})
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"adding order feiled"})
    }
}