const sequelize = require('../config/connection');
const seedListing = require('./listingData');
const seedUser = require('./userData')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedListing();

  await seedUser();

  process.exit(0);
};

seedAll();