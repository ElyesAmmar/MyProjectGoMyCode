const express= require("express");
const router = express.Router();
const controllers= require("../controllers/clientControllers");

router.get('/', controllers.getClients)
router.get('/client/:id', controllers.getOneClient)
router.post('/addclient', controllers.postClient)
router.put('/edit/:id', controllers.updateClient)
router.delete('/delete/:id',controllers.deleteClient)


module.exports = router