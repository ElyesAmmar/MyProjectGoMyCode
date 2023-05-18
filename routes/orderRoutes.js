const express= require("express");
const router = express.Router();
const controllers= require("../controllers/orderControllers");

router.get('/', controllers.getOrders)

module.exports = router