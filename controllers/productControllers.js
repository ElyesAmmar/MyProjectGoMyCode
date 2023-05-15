const Products = require("../model/product");


exports.getProducts = async(req, res)=>{
    try{
       const result= await Products.find({})
       return res.status(200).send({msg:"getting Products success", response: result})
    }catch(error){
        console.log(error)
        return res.status(500).send({msg:"getting Products failed"})
    }
}

exports.getOneProduct = async(req, res)=>{
    try {
        const id= req.params.id
        const result = await Products.findOne({_id:id})
        return res.status(200).send({msg:"getting product succes", response: result})
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg:"getting Product failed"})
    }
}


exports.postProduct = async(req,res)=>{
    try {
        // let id= 0
        //   let lastProduct = await Products.findOne().sort({_id: -1}); // Get the last ID in the database
        
        //   if(lastProduct){
        //     id=lastProduct._id+10
        //   } else{                                                   // If there are no products in the database, start with ID 1
        //     id= 1
        //   }                                             
        // console.log(id)
        const query= req.body
        if(!query.Name || !query.Stock || !query.Categorie || !query.Price){
            return res.status(400).send({msg:"please enter the missing fields"})
        }else{
            const newProduct= new Products(query);
            await newProduct.save()
        
           return res.status(200).send({msg:"adding product successfully", response:newProduct})
        }
        
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg:"addding Product failed"})
    }
    }
 


exports.updateProduct = async(req,res)=>{
    try {
        const id=req.params.id
        await Products.findOneAndUpdate({_id:id},{$set:{...req.body}})
      return res.status(200).send({msg:"updating product successfully"})
    } catch (error) {
        return res.status(500).send({msg:"updating Product failed"})
    }
}

exports.deleteProduct = async(req,res)=>{
    try {
        const id = req.params.id
        await Products.findOneAndDelete({_id:id},{$set:{...req.body}})
        
        return res.status(200).send({msg:"deleting Product success"})

    } catch (error) {

        return res.status(500).send({msg:"deleting Product failed"})
        
    }
}