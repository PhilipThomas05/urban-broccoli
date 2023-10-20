const router = require('express').Router();

const apiRoutes = require('./api');
const homepageRoutes = require('./homepage-routes'); 
router.use('/', homepageRoutes);
router.use('/api', apiRoutes);

module.exports = router;
