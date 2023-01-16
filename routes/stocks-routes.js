const express = require('express');
const { check } = require('express-validator');

const stocksControllers = require('../controllers/stocks-controllers');

const router = express.Router();



// router.get('/:bseId', placesControllers.getIndexById);
// router.get('/', placesControllers.getIndex);
// router.get('/:Date', placesControllers.getIndexByDate);
router.get('/BSE/:Date', stocksControllers.getIndexByDate);
router.get('/NSE/:Date', stocksControllers.getIndexByDateNSE);
router.get('/Reliance', stocksControllers.getRelainceData);
router.get('/Ashokley', stocksControllers.getAshokleyData);
router.get('/Tatasteel', stocksControllers.getTatasteelData);
router.get('/Eichermot', stocksControllers.getEichermotData);
router.get('/Cipla', stocksControllers.getCiplaData);

// router.get('/:pid', placesControllers.getPlaceById);

// router.get('/user/:uid', placesControllers.getPlacesByUserId);

// router.post(
//   '/',
//   [
//     check('title')
//       .not()
//       .isEmpty(),
//     check('description').isLength({ min: 5 }),
//     check('address')
//       .not()
//       .isEmpty()
//   ],
//   placesControllers.createPlace
// );

// router.patch(
//   '/:pid',
//   [
//     check('title')
//       .not()
//       .isEmpty(),
//     check('description').isLength({ min: 5 })
//   ],
//   placesControllers.updatePlace
// );

// router.delete('/:pid', placesControllers.deletePlace);

module.exports = router;
