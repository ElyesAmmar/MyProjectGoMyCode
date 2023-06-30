const express= require("express");
const router = express.Router();
const controllers= require("../controllers/orderControllers");

router.get('/:userid', controllers.getOrders)
router.post('/addorder/:userid', controllers.postOrders)
router.get('/invoice/:id', controllers.getInvoiceOrder)
router.get('/findorders/:userid', controllers.getOrdersByMonth)
router.post('/mail', controllers.sendMail)

module.exports = router