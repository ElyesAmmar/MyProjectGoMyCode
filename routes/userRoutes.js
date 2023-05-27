const router = require('express').Router();
const controllers = require('../controllers/userControllers');
const isAuth = require('../middleware/isAuth');
const {validator, loginRules, registerRules} = require('../middleware/validator')

router.post('/register',registerRules(), validator, controllers.register)
router.post('/login',loginRules(), validator, controllers.login)
router.get('/', isAuth, (req, res)=>{
    console.log("router req", req)
    res.status(200).send({user: req.user})
})
module.exports = router;