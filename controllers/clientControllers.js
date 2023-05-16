const Clients = require('../model/clients')

exports.getClients = async(req, res)=>{
    try{
       const result= await Clients.find({})
       return res.status(200).send({msg:"getting Clients success", response: result})
    }catch(error){
        console.log(error)
        return res.status(500).send({msg:"getting Clients failed"})
    }
}

exports.postClient = async(req, res)=>{
    try {
        let reference= 0
        let lastClient = await Clients.findOne().sort({_id: -1}); // Get the last ID in the database
        
        if(lastClient){
            reference= lastClient.Reference + 1
          } else{                                                   // If there are no products in the database, start with ID 1
            reference= 1
        }                                             
        

        const client = req.body
        if (!client.Name || !client.Phone || !client.Address){
            return res.status(400).send({msg:"please enter the missing fields"})
        }else{
            const newClient= new Clients({...client,Reference:reference})
            await newClient.save()
            return res.status(200).send({msg:"adding product successfully", response:newClient})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg:"addding Client failed"})
    }
}

exports.getOneClient = async(req, res)=>{
    try {
        const id= req.params.id
        const client = await Clients.findById(id)
        return res.status(200).send({msg:"getting client succes", response: client})
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg:"getting client failed"})
    }
}

exports.updateClient = async(req,res)=>{
    try {
        const id=req.params.id
        await Clients.findOneAndUpdate({_id:id},{$set:{...req.body}})
      return res.status(200).send({msg:"updating client successfully"})
    } catch (error) {
        return res.status(500).send({msg:"updating client failed"})
    }
}

exports.deleteClient = async(req,res)=>{
    try {
        const id = req.params.id
        await Clients.findOneAndDelete({_id:id})
        return res.status(200).send({msg:"deleting client success"})
    } catch (error) {
        return res.status(500).send({msg:"deleting client failed"})
        
    }
}