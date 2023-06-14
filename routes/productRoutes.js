const express= require("express");
const router = express.Router();
const controllers= require("../controllers/productControllers");

router.get('/', controllers.getProducts)
router.get('/category', controllers.getProductsCategory)
router.get('/product/:id', controllers.getOneProduct)
router.get('/product/', controllers.getProductNameOrCode)
router.post('/addproduct', controllers.postProduct)
router.put('/edit/:id', controllers.updateProduct)
router.delete('/delete/:id',controllers.deleteProduct)




module.exports = router