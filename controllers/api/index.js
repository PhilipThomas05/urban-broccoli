const router = require('express').Router();

const userRoutes = require('./user-logs-routes');

router.use('/users', userRoutes);

module.exports = router;
