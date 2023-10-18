const { Listing } = require('../models');

const listingData = [
  {
    title: 'A Night At The Opera',
    artist: 'Queen',
    genre: 'Rock',
    condition: 'Fair'
    price: 15.00,
    seller: 'TBD',
  },
  {
    title: 'Holy Mountain',
    artist: 'Sleep',
    genre: 'Metal',
    condition: 'Brand New'
    price: 45.00,
    seller: 'TBD',
  },
  {
    title: '2001',
    artist: 'Dr. Dre',
    genre: 'Hip Hop',
    condition: 'Like New'
    price: 25.00,
    seller: 'TBD',
  },
  {
    title: 'Welcome To Hard Times',
    artist: 'Charley Crockett',
    genre: 'Country',
    condition: 'Fair'
    price: 22.00,
    seller: 'TBD',
  },
  {
    title: 'Giant Steps',
    artist: 'John Coltrane',
    genre: 'Jazz',
    condition: 'Poor'
    price: 11.00,
    seller: 'TBD',
  },
  {
    title: 'Time Out',
    artist: 'Dave Brubeck Quartet',
    genre: 'Jazz',
    condition: 'Good'
    price: 20.00,
    seller: 'TBD',
  },
  {
    title: 'Tres Hombres',
    artist: 'ZZ Top',
    genre: 'Rock',
    condition: 'Good'
    price: 15.00,
    seller: 'TBD',
  },
  {
    title: 'The Sciences',
    artist: 'Sleep',
    genre: 'Metal',
    condition: 'Fair'
    price: 18.00,
    seller: 'TBD',
  },
  {
    title: '1989',
    artist: 'Taylor Swift',
    genre: 'Pop',
    condition: 'Poor'
    price: 1000.00,
    seller: 'TBD',
  },
]

const seedListing = () => Listing.bulkCreate(listingdata);

module.exports = seedListing;