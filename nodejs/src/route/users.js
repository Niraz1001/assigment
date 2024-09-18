const {Route} = require('express')
const mongoose = require('mongoose');
const UserRoute = Route();

mongoose.connect('mongodb://127.0.0.1:27017/aayojob');

const forstudent = mongoose.model('forstudent', { Name: String, Email: String, Password: String, ComfirmPassword: String});
forstudent.create({ name: 'Zildjian',Email: 'nirajcodingmaster232@gmail.com', Password: 'hello@1123', ComfirmPassword:'hello@1123'});

const forbussiness = mongoose.model('forbussiness', { Name: String, Email: String, Password: String, ComfirmPassword: String});
forbussiness.create({ name: 'Zildjian',Email: 'nirajcodingmaster232@gmail.com', Password: 'hello@1123', ComfirmPassword:'hello@1123'});

  
  module.exports = UserRoute;