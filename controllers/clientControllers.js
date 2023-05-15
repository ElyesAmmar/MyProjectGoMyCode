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