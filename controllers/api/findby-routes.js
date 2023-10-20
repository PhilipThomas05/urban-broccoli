const router = require('express').Router();
const { Listing } = require('../../models');




//find all records by genre      localhost:3001/api/search/:genre     //
router.get('/:genre', (req, res) => {
    Listing.findAll(req.params.genre).then((listingData) => {
        res.json(listingData);
    });
});

// Find a single listing by its primary key (user_id)  localhost:3001/api/search/:id             //
router.get('/:id', (req, res) => {
    Listing.findByPk(req.params.id).then((listingData) => {
        res.json(listingData);
    });
});

// Find a single listing by its title  localhost:3001/api/search/:title                 //
router.get('/:title', (req, res) => {
    Listing.findOne(req.params.title).then((listingData) => {
        res.json(listingData);
    });
});

// Find a single listing by its artist    localhost:3001/api/search/:artist                     //
router.get('/:artist', (req, res) => {
    Listing.findOne(req.params.artist).then((listingData) => {
        res.json(listingData);
    });
});

// Find all listings by condition     localhost:3001/api/search/:condition                       //
router.get('/:condition', (req, res) => {
    Listing.findAll(req.params.condition).then((listingData) => {
        res.json(listingData);
    });
});

// Find all records by seller     localhost:3001/api/search/:seller      //
router.get('/:seller', (req, res) => {
    Listing.findAll(req.params.seller).then((listingData) => {
        res.json(listingData);
    });
});
