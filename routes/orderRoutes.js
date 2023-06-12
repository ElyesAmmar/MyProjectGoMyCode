const express= require("express");
const router = express.Router();
const controllers= require("../controllers/orderControllers");

router.get('/', controllers.getOrders)
router.post('/addorder', controllers.postOrders)
router.get('/invoice/:id', controllers.getInvoiceOrder)
router.get('/findorders', controllers.getOrdersByMonth)
router.post('/mail', controllers.sendMail)

module.exports = router