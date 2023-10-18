const router = require('express').Router();
const { Gallery, Painting } = require('../models');  //these are placeholder-named models.//

router.get('/', async (req, res) => {
    try {
      const dbGalleryData = await Gallery.findAll();
  
      const galleries = dbGalleryData.map((gallery) =>
        gallery.get({ plain: true })
      );
      res.render('homepage', {
        galleries,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

