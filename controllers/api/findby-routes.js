const router = require('express').Router();
const { Listing, User } = require('../../models');




// //find all records by genre      localhost:3001/api/search/genre/:genre     
// router.get('/genre/:genre', (req, res) => {
//     Listing.findAll(req.params.genre).then((listingData) => {
//         res.json(listingData);
//     });
// });

// Find a single listing by its primary key (user_id)  localhost:3001/api/search/:id             
router.get('/:id', (req, res) => {
    Listing.findByPk(req.params.id).then((listingData) => {
        res.json(listingData);
    });
});
// localhost:3001/api/search/metal 

// router.get('/metal', (req, res) => {
//     Listing.findAll({
//       order: ['title'],
//       where: {
//         genre: 'metal'
//       },

//     }).then((listingData) => {
//       res.json(listingData);
//     });
//   });
  
//   router.get('/jazz', (req, res) => {
//     Listing.findAll({
//       order: ['title'],
//       where: {
//         genre: 'jazz'
//       },

//     }).then((listingData) => {
//       res.json(listingData);
//     });
//   });

//   router.get('/country', (req, res) => {
//     Listing.findAll({
//       order: ['title'],
//       where: {
//         genre: 'country'
//       },

//     }).then((listingData) => {
//       res.json(listingData);
//     });
//   });

// // Find a single listing by its title  localhost:3001/api/search/title/:title                
// router.get('/title/:title', (req, res) => {
//     Listing.findOne(req.params.title).then((listingData) => {
//         res.json(listingData);
//     });
// });

// // Find all listings by an artist    localhost:3001/api/search/artist/:artist                   
// router.get('/artist/:artist', (req, res) => {
//     Listing.findAll(req.params.artist).then((listingData) => {
//         res.json(listingData);
//     });
// });

// // Find all listings by condition     localhost:3001/api/search/condition/:condition                       
// router.get('condition/:condition', (req, res) => {
//     Listing.findAll(req.params.condition).then((listingData) => {
//         res.json(listingData);
//     });
// });

// // Find all records by seller     localhost:3001/api/search/seller/:seller     
// router.get('/seller/:seller', (req, res) => {
//     Listing.findAll(req.params.seller).then((listingData) => {
//         res.json(listingData);
//     });
// });

router.post('/newlisting', async (req, res) => {
    try {
      const newListingData = await Listing.create({
        title: req.body.title,
        artist: req.body.artist,
        genre: req.body.genre,
        condition: req.body.condition,
        price: req.body.price,
        seller: req.body.seller
      });
      res.status(200).json(newListingData);
    } catch (err) {
      res.status(400).json(err);
    }
  });





// // localhost:3001/api/search/metal 

//   router.get('/metal', (req, res) => {
//     Book.findAll({
//       order: ['title'],
//       where: {
//         genre: 'metal'
//       },

//     }).then((listingData) => {
//       res.json(listingData);
//     });
//   });
module.exports= router