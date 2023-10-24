const router = require('express').Router();
const userRoutes = require('./userRoutes');
const findByRoutes= require('./findby-routes')
router.use('/users', userRoutes);

module.exports = router;
