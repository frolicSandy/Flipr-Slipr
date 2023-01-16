const uuid = require('uuid/v4');
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const getCoordsForAddress = require('../util/location');

const stock = require('../models/Stock');


// let DUMMY_PLACES = [
//   // {
//   //   id: 'p1',
//   //   title: 'Empire State Building',
//   //   description: 'One of the most famous sky scrapers in the world!',
//   //   location: {
//   //     lat: 40.7484474,
//   //     lng: -73.9871516
//   //   },
//   //   address: '20 W 34th St, New York, NY 10001',
//   //   creator: 'u1'
//   // },
//   {
//     // bseId:"1",
//     Date:"12",
//     Open:"320.2",
//     High:"360",
//     Low:"250",
//     Close:"296",
//     Adj_Close:"299",
//     Volume:"2452364"
//   }
// ];


const getIndexByDate = async (req, res, next) => {
  const indexDate = req.params.Date;
  console.log(indexDate);
  console.log(typeof((indexDate)));

  let index;
  try {
    index = await stock.findOne({Date: indexDate});
  } catch (err) { 
    const error = new HttpError(
      'Something went wrong, could not find record with this date.',
      500
    );
    return next(error);
  }finally{
    console.log(indexDate);
  }

  if (!index) {
    const error = new HttpError(
      'Could not find place for the provided id.',
      404
    );  
    return next(error);
  }
  res.json({ index });
  // res.json({ place: place.toObject({ getters: true }) });
};



// const getIndexByDate = async (req, res, next) => {
//   // const bseDate = req.params.Date; 
//   try{
//     const index = await stock.find();
//   //   if (!index) {
//   //     throw new HttpError('Could not find a place for the provided id.', 404);
//   // }
//   const idx = index.forEach(ob => {
//     if(ob._id === req.params._id) {
//       return ob;
//     }
//   });
//   // res.json({ index }); // => { place } => { place: place }
//   }catch(error){
//     return res.status(500).json({
//       success: false,
//       error: 'Server Error'
//     });    
//  }
  // try{
    
  //   const IndexBseDate = req.params.Date; // { pid: 'p1' }
  //   console.log(IndexBseDate);
  //   const index = await stock.find.map((p => {
  //     console.log(p);
  //     return (p.Date === IndexBseDate) ? res.status(200).json(p) : res.status(404).send('Not Found');
  //   }));

    // const index = await stock.findOne(IndexBseDate);
    // const index = await stock.findOne(IndexBseDate).then(result=>{
    //   console.log(result);
    //   // index = result;
    // })

    // if (!index) {
    //   throw new HttpError('Could not find a place for the provided id.', 404);
    // }

    // res.json({ index }); // => { place } => { place: place }
  // }catch(error){
  //   return res.status(500).json({
  //     success: false,
  //     error: 'Server Error'
  //   });
  // }
// };

const getIndex = async (req, res, next) => {
  // const temp = req.params;
  try{
    const index = await stock.find();
    if (!index) {
      throw new HttpError('Could not find a place for the provided id.', 404);
  }
  console.log('index: ',index);
  res.json({ index }); // => { place } => { place: place }
  }catch(error){
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });    
 }
}

// const getIndexById = (req, res, next) => {
//   const indexID = req.params.bseId; // { pid: 'p1' }

//   const index = DUMMY_PLACES.find(p => {
//     return p.bseId === indexID;
//   });

//   if (!index) {
//     throw new HttpError('Could not find a place for the provided id.', 404);
//   }

//   res.json({ index }); // => { place } => { place: place }
// };


// const getPlaceById = (req, res, next) => {
//   const placeId = req.params.pid; // { pid: 'p1' }

//   const place = DUMMY_PLACES.find(p => {
//     return p.id === placeId;
//   });

//   if (!place) {
//     throw new HttpError('Could not find a place for the provided id.', 404);
//   }

//   res.json({ place }); // => { place } => { place: place }
// };

// function getPlaceById() { ... }
// const getPlaceById = function() { ... }

// const getPlacesByUserId = (req, res, next) => {
//   const userId = req.params.uid;

//   const places = DUMMY_PLACES.filter(p => {
//     return p.creator === userId;
//   });

//   if (!places || places.length === 0) {
//     return next(
//       new HttpError('Could not find places for the provided user id.', 404)
//     );
//   }

//   res.json({ places });
// };

// const createPlace = async (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return next(
//       new HttpError('Invalid inputs passed, please check your data.', 422)
//     );
//   }

//   const { id,title, description,coordinates, address, creator} = req.body;

//   // let coordinates;
//   // try {
//   //   coordinates = await getCoordsForAddress(address);
//   // } catch (error) {
//   //   return next(error);
//   // }

//   const createdPlace = {
//     // id: uuid(),
//     id,
//     title,
//     description,
//     location: coordinates,
//     address,
//     creator
//   };

//   DUMMY_PLACES.push(createdPlace); //unshift(createdPlace)

//   res.status(201).json({ place: createdPlace });

// };

// const updatePlace = (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     throw new HttpError('Invalid inputs passed, please check your data.', 422);
//   }

//   const { title, description } = req.body;
//   const placeId = req.params.pid;

//   const updatedPlace = { ...DUMMY_PLACES.find(p => p.id === placeId) };
//   const placeIndex = DUMMY_PLACES.findIndex(p => p.id === placeId);
//   updatedPlace.title = title;
//   updatedPlace.description = description;

//   DUMMY_PLACES[placeIndex] = updatedPlace;

//   res.status(200).json({ place: updatedPlace });
// };

// const deletePlace = (req, res, next) => {
//   const placeId = req.params.pid;
//   if (!DUMMY_PLACES.find(p => p.id === placeId)) {
//     throw new HttpError('Could not find a place for that id.', 404);
//   }
//   DUMMY_PLACES = DUMMY_PLACES.filter(p => p.id !== placeId);
//   res.status(200).json({ message: 'Deleted place.' });
// };

// exports.getPlaceById = getPlaceById;
// exports.getPlacesByUserId = getPlacesByUserId;
// exports.createPlace = createPlace;
// exports.updatePlace = updatePlace;
// exports.deletePlace = deletePlace;

// exports.getIndexById = getIndexById;
// exports.getIndexByDate = getIndexByDate;
// exports.getIndex = getIndex;
exports.getIndexByDate = getIndexByDate;