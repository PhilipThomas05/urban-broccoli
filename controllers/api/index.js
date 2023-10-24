const router = require('express').Router();

const apiRoutes = require('./api');
const userRoutes = require('./user-logs-routes');
const findbyRoutes = require('./findby-routes');

router.use('/users', userRoutes);
router.use('/search', findbyRoutes);

router.use('/api', apiRoutes);


module.exports = router;
