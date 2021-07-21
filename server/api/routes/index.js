const {Router} = require('express');
const router = Router();

router.get('/', async(async,res,next) =>{
    res.send('hihi');
})

module.exports = router;