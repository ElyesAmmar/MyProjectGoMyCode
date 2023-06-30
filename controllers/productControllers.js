const Products = require("../model/product");



exports.getProducts = async(req, res)=>{
    try{
        const userId = req.params.userid
    const result= await Products.find({UserID:userId})
    return res.status(200).send({msg:"getting Products success", response: result})
    }catch(error){
        console.log(error)
        return res.status(500).send({msg:"getting Products failed"})
    }
}
exports.getProductsCategory = async (req, res)=>{
    const category = req.query.category
    const userId = req.params.userId
    try {
        const result = await Products.find({Category:category, UserID: userId})
        res.status(200).send({msg: "getting Products success", response: result})
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"getting Products failed"})
    }
}
exports.getOneProduct = async(req, res)=>{
    
    try {
        const id= req.params.id
        const result = await Products.findById(id)
        return res.status(200).send({msg:"getting product succes", response: result})
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg:"getting Product failed"})
    }
}



exports.postProduct = async(req,res)=>{
    try {
        const userId = req.params.userid
        let productid= 0
        let lastProduct = await Products.findOne({UserID:userId}).sort({_id: -1}); // Get the last ID in the database
    
        if(lastProduct){
            productid= lastProduct.ProductId + 1
          } else{                                                   // If there are no products in the database, start with ID 1
            productid= 1
        } 
        
        const query= req.body
        if(!query.Name || !query.Stock || !query.Category || !query.Price){
            return res.status(400).send({msg:"please enter the missing fields"})
        }
        const barcode= await Products.findOne({Barcode:query.Barcode})
        if(barcode){
            return res.status(400).send({msg:"Product exists"})
        }
        else{
            const newProduct= new Products({...query,ProductId:productid,UserID:userId});
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
        await Products.findOneAndDelete({_id:id})
        
        return res.status(200).send({msg:"deleting Product success"})

    } catch (error) {

        return res.status(500).send({msg:"deleting Product failed"})
        
    }
}

exports.getProductNameOrCode = async(req,res)=>{
    try {
        const name = req.query.Name
        const barcode = req.query.Barcode
        const userId = req.params.userid
        if(name){
            const result = await Products.find({ Name:{ $regex: new RegExp('^' + name + '$', 'i') }})
            if(result){
                return res.status(200).send({msg:'getting product success', response:result})
               }  else{
                return res.status(400).send({msg:'product not found'})
        }}
        else if(barcode){
            const result = await Products.find({Barcode: barcode, UserID:userId})
           if(!result){
            return res.status(400).send({msg:'product not found'})
           }  else{
            return res.status(200).send({msg:'getting product success', response:result})
        }
        }
        
    } catch (error) {
        return res.status(500).send({msg:"getting client failed"})
    }
}
