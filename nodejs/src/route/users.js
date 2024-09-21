const {Router, request} = require('express')
const mongoose = require('mongoose');
const UserRoute = Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');



mongoose.connect('mongodb://127.0.0.1:27017/aayojob');

const forstudent = mongoose.model('forstudent', 
  { Name: String, 
    Email: String, 
    Password: String,
  });


UserRoute.post('/forstudent', async (req, res)=>{
   // step 1 to chekck email is taken or not //
   const userexists = await forstudent.exists({Email: req.body.Email})
   if(userexists){
    return res.send({msg: "email is already taken"});
   }
   // step 2 generated hash password // 
   req.body.Password = await bcrypt.hash(req.body.Password, saltRounds)
   forstudent.create(req.body)
   res.send("new user created!") 
})

UserRoute.get('/forstudent', async(req,res)=>{
  const studetdata = await forstudent.find(req.params);
  res.send(studetdata);
})

UserRoute.delete('/forstudent/:id', async(req,res)=>{
  const data = await forstudent.findByIdAndDelete(req.params.id)
  if (data) {
    res.send(`${data.Name} user is deleted`)
  }
  else{
    res.send('msg: this user is not store in  database')
  }
})


const forbussiness = mongoose.model('forbussiness', 
  { Name: String, 
    Email: String, 
    Password: String, 
  }); 

UserRoute.post('/forbussiness', async (req, res)=>{
// step 1 to chekck email is taken or not //
const userexists = await forbussiness.exists({Email: req.body.Email})
if(userexists){
 return res.send({msg: "email is already taken"});
}

// step 2 to generated hash password
  req.body.Password = await bcrypt.hash(req.body.Password, saltRounds);
  forbussiness.create(req.body)
  res.send("new user created ! ")
})

UserRoute.get('/forbussiness', async (req, res)=>{
    const data = await forbussiness.find(req.params)
    res.send(data)
})

UserRoute.delete('/forbussiness/:id', async(req,res)=>{
  const data = await forbussiness.findByIdAndDelete(req.params.id)
  if (data) {
    res.send(`${data} user is deleted`)
  }
  else{
    res.send('msg: this user is not store in  database')
  }
})

UserRoute.put('/forbussiness/:id', async (req,res)=>{
  const  data = await forbussiness.findByIdAndUpdate(req.params.id, req.body);
  if(data){
    res.send(`update sucessfullly`);
  }
  else{
    res.send(`msg: this is not found in our database`);
  }
})


UserRoute.post('/login', async(req,res)=>{

    const emailexists = await forbussiness.findOne({Email: req.body.Email}) 
    if (!emailexists) {
      return res.send({msg: "invalid email"})
    }
      const ismatch = await bcrypt.compare(req.body.Password, emailexists.Password);
      if (ismatch) {
        const token = jwt.sign({ Email: req.body.Email }, 'shhhhh');
         res.send({token, IsloginIn: true})
      }
      else{
          res.send({msg: "password doesn't match"})
      }
})
 
  module.exports = UserRoute;