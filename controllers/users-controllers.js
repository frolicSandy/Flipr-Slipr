const uuid = require('uuid/v4');
const { validationResult } = require('express-validator');
// const connectDB = require('../config/db.js');
// var db = connectDB();
const HttpError = require('../models/http-error');
const user = require('../models/user');
// const DUMMY_USERS = [
//   {
//     id: 'u1',
//     name: 'Max Schwarz',
//     email: 'test@test.com',
//     password: 'testers'
//   }
// ];

// const getUsers = (req, res, next) => {
//   // console.log(req.body);
//   res.json({ users: user.find() });
// };

const signup =async (req, res, next) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   throw new HttpError('Invalid inputs passed, please check your data.', 422);
  // }
  console.log(req.body);
  // console.log(req.params);
  const { name, email, password } = req.body;
  const hasUser = await user.find({email},email)
  // const hasUser = user.find(u => u.email === email);
  // console.log(hasUser.length);
  // hasUser.get
  if (hasUser.length > 0) {
    // throw new HttpError('Could not create user, email already exists.', 422);
    res.status(422).json({err: 'User already exists! Try logging in.'});
    // return;
  }

  /**const createdUser = {
    id: uuid(),
    name, // name: name
    email,
    password
  };*/
  const data = new user({
      // id:req.body.id,
      name:req.body.name,
      email:req.body.email,
      password:req.body.password

   })

   try {
    await data.save();
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again later.',
      500
    );
    return next(error);
  }

  res
  .setHeader('Content-Type', 'application/json')
  .status(201)
  .json({ userId: data.id, email: data.email});



  //  await data.save((err, user) => {
  //   if(err){
  //     res.statusCode = 500;
  //     res.setHeader('Content-Type', 'application/json');
  //     res.json({err: err});
  //   }
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'application/json');
  //   res.json({success: true, status: 'Registration Successful'});
  //  });
   
   

  // db.collection('SignUp').insertOne(createdUser).then(result=>{
  //   res.status(201).json(result)
  // }).catch(err =>{
  //   res.status(500).json({err:'dgubsdlskjb'})
  // })
};

const login = async (req, res, next) => {
  console.log('req.params: ', req.params);
  const { email, password } = req.body;

  const identifiedUser = await user.find({email},req.params.email);
  console.log(identifiedUser);
  if (identifiedUser.length == 0 || identifiedUser[0].password !== password) {
    throw new HttpError('Could not identify user, credentials seem to be wrong.', 401);
  }

  res.json({message: 'Logged in!'});
};

const logout = (req, res, next) => {
  res.status(200).end('Logged out');
};

// exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
exports.logout = logout;



