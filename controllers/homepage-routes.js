const router = require('express').Router();
const { Listing, User } = require('../models');  //these are placeholder-named models.//
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
      const dbListingData = await Listing.findAll();
      include: [
        {
          model: Listing,
          attributes: ['filename', 'title', 'artist'],
        },
      ];

    const listings = dbListingData.map((listing) =>
      listing.get({ plain: true })
    );

    res.render('homepage', {
      listings,
      loggedIn: req.session.loggedIn,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});