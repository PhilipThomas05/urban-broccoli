const router = require('express').Router();
const userRoutes = require('./user-logs-Routes');
const findByRoutes= require('./findby-routes')

router.use('/users', userRoutes);

module.exports = router;
