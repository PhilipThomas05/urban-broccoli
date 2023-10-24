const router = require('express').Router();
const { Listing, User } = require('../models');  
const withAuth = require('../utils/auth');

// app.get('/', async (req, res) => {
//   const listingData = await Listing.findAll();
//   return res.json(listingData);
// });
  


router.get('/', async (req, res) => {
    try {
      const dbListingData = await Listing.findAll();
      
    const listings = dbListingData.map((listing) =>
      listing.get({ plain: true })
    );

    res.render('homepage');

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



// {
//   listings,
//   loggedIn: req.session.loggedIn,
// }