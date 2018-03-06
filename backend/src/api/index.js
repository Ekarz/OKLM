const { Router } = require('express');

const router = new Router();

router.use('/documents', require('./documents'));
router.use('/categories', require('./categories'));
router.use('/users', require('./users'));

module.exports = router;