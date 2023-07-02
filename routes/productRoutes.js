const express= require("express");
const router = express.Router();
const controllers= require("../controllers/productControllers");

router.get('/:userid', controllers.getProducts)
router.get('/category/:userid', controllers.getProductsCategory)
router.get('/product/:id', controllers.getOneProduct)
router.get('/products/:userid', controllers.getProductNameOrCode)
router.post('/addproduct/:userid', controllers.postProduct)
router.put('/edit/:id', controllers.updateProduct)
router.delete('/delete/:id',controllers.deleteProduct)




module.exports = router