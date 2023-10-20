const router = require('express').Router();
const { Listing } = require('../../models');




//find all records by genre //
router.get('/:genre', (req, res) => {
    Listing.findAll({
      // Orders by title in ascending order
      order: ['title']
    }).then((listingData) => {
      res.json(listingData);
    });
});
  

  // Find a single listing by its primary key (user_id) //
  router.get('/:id', (req, res) => {
    Listing.findByPk(req.params.id).then((listingData) => {
      res.json(listingData);
    });
  });

   // Find a single listing by its title //
   router.get('/:title', (req, res) => {
    Listing.findOne(req.params.title).then((listingData) => {
      res.json(listingData);
    });
  });

     // Find a single listing by its artist //
     router.get('/:artist', (req, res) => {
        Listing.findOne(req.params.artist).then((listingData) => {
          res.json(listingData);
        });
      });

      // Find all listings by condition //
      router.get('/:condition', (req, res) => {
        Listing.findAll({
          order: ['title']
        }).then((listingData) => {
          res.json(listingData);
        });
    });
    router.get('/:', (req, res) => {
        Listing.findAll({
          // Order by title in ascending order
          order: ['title']
        }).then((listingData) => {
          res.json(listingData);
        });
    });