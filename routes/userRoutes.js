const router = require('express').Router();
const controllers = require('../controllers/userControllers');
const {validator, loginRules, registerRules} = require('../middleware/validator')

router.post('/register',registerRules(), validator, controllers.Register)
router.post('/login',loginRules(), validator, controllers.Login)

module.exports = router;