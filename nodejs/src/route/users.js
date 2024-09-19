const {Router, request} = require('express')
const mongoose = require('mongoose');
const UserRoute = Router();

mongoose.connect('mongodb://127.0.0.1:27017/aayojob');

const forstudent = mongoose.model('forstudent', 
  { name: String, 
    Email: String, 
    Password: String,
  });


UserRoute.post('/register', (req, res)=>{
  forstudent.create(req.body)
  res.send("created")
})


const forbussiness = mongoose.model('forbussiness', 
  { Name: String, 
    Email: String, 
    Password: String, 
  }); 

UserRoute.post('/forbussiness', (req, res)=>{
  forbussiness.create(req.body)
  res.send("created")
})


  
  module.exports = UserRoute;