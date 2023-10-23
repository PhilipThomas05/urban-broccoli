const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models');


// //Create New   localhost:3001/api/users            //
// router.post('/', async (req, res) => {
//     try {
//       const UserData = await User.create({
  //         username: req.body.username,
  //         email: req.body.email,
  //         password: req.body.password,
//       });
  
//       req.session.save(() => {
//         req.session.loggedIn = true;
  
//         res.status(200).json(UserData);
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });

  router.post('/new', async (req, res) => {
    try {
      const newUser = req.body;
      // hash the password from 'req.body' and save to newUser
      newUser.password = await bcrypt.hash(req.body.password, 10);
      // create the newUser with the hashed password and save to DB
      const userData = await User.create(newUser);
      res.status(200).json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  //Log In      localhost:3001/api/users/login       //
  router.post('/login', async (req, res) => {
    try {
      const UserData = await User.findOne({
        where: {
          email: req.body.email,
          password: req.body.password,
        },
      });
  
      if (!UserData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
       const validPassword = UserData.checkPassword(req.body.password);
      const validatePassword = await bcrypt.compare(req.body.password, UserData.password);
    
      // if they do not match, return error message
      if (!validatePassword) {
        res.status(400).json({ message: 'Login failed. Please try again!' });
        return;
      }
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res
          .status(200)
          .json({ user: UserData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

//Log Out        localhost:3001/api/users/logout        //
  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;
  