const express= require("express");
const router = express.Router();
const controllers= require("../controllers/clientControllers");

router.get('/:userid', controllers.getClients)
router.get('/client/:id', controllers.getOneClient)
router.get('/client/', controllers.getClientByName)
router.post('/addclient/:userid', controllers.postClient)
router.put('/edit/:id', controllers.updateClient)
router.delete('/delete/:id',controllers.deleteClient)


module.exports = router