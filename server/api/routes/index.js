const {Router} = require('express');
const router = Router();
const controller = require('./controller');

router.get('/', controller.getBoards);
router.post('/', controller.postBoard);

module.exports = router;