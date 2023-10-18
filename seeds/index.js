const sequelize = require('../config/connection');
const seedListing = require('./listingData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedListing();

  process.exit(0);
};

seedAll();