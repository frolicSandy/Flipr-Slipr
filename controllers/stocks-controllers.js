const uuid = require('uuid/v4');
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
// const getCoordsForAddress = require('../util/location');

const {bse,nse,Reliance,Cipla,Ashokley,Eichermot,Tatasteel} = require('../models/Stock');
// const nse = require('../models/Stock');


const getIndexByDate = async (req, res, next) => {
  const indexDate = req.params.Date;
  // console.log(indexDate);
  // console.log(typeof((indexDate)));

  let index;
  try {
    index = await bse.findOne({Date: indexDate});
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
      'Could not find stock for the provided date.',
      404
    );  
    return next(error);
  }
  res.json({ index });
  // res.json({ place: place.toObject({ getters: true }) });
};


const getIndexByDateNSE = async (req, res, next) => {
  const indexDate = req.params.Date;
  console.log(indexDate);
  console.log(typeof((indexDate)));

  let index;
  try {
    index = await nse.findOne({Date: indexDate});
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


const getCiplaData = async (req, res, next) => {
  try{
    const index = await Cipla.find();
    if (!index) {
      throw new HttpError('Could not find a DATE for the provided id.', 404);
  }
  // console.log('index: ',index);
  res.json({ index }); // => { place } => { place: place }
  }catch(error){
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });    
 }
};



const getTatasteelData = async (req, res, next) => {
  try{
    const index = await Tatasteel.find();
    if (!index) {
      throw new HttpError('Could not find a place for the provided id.', 404);
  }
  // console.log('index: ',index);
  res.json({ index }); // => { place } => { place: place }
  }catch(error){
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });    
 }
};



const getRelainceData = async (req, res, next) => {
  try{
    const index = await Reliance.find();

    if (!index) {
      throw new HttpError('Could not find a place for the provided id.', 404);
  }
  // console.log('index: ',index);
  res.json({ index }); // => { place } => { place: place }
  }catch(error){
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });    
 }
};
const getEichermotData = async (req, res, next) => {
  try{
    const index = await Eichermot.find();
    if (!index) {
      throw new HttpError('Could not find a place for the provided id.', 404);
  }
  // console.log('index: ',index);
  res.json({ index }); // => { place } => { place: place }
  }catch(error){
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });    
 }
};



const getAshokleyData = async (req, res, next) => {
  try{
    const index = await Ashokley.find();
    if (!index) {
      throw new HttpError('Could not find a place for the provided id.', 404);
  }
  // console.log('index: ',index);
  res.json({ index }); // => { place } => { place: place }
  }catch(error){
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });    
 }
};



exports.getIndexByDate = getIndexByDate;
exports.getIndexByDateNSE = getIndexByDateNSE;
exports.getRelainceData = getRelainceData;
exports.getCiplaData = getCiplaData;
exports.getTatasteelData = getTatasteelData;
exports.getAshokleyData = getAshokleyData;
exports.getEichermotData = getEichermotData;
