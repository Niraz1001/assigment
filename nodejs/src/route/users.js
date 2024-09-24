const {Router, request} = require('express')
const mongoose = require('mongoose');
const UserRoute = Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');



mongoose.connect('mongodb://127.0.0.1:27017/aayojob');

const user = mongoose.model('/users', 
  { name: String, 
    email: String, 
    password: String,
    role: {
    type: String,
    enum : ['Student', 'recruiter'],
    default: 'student'
   },
  });


UserRoute.post('/register', async (req, res)=>{
   // step 1 to chekck email is taken or not //
   const userexists = await user.exists({email: req.body.email})
   if(userexists){
    return res.status(403).send({msg: "email is already taken"});
   }
   // step 2 generated hash password // 
   req.body.password = await bcrypt.hash(req.body.password, saltRounds)
   user.create(req.body)
   res.send({msg: "new user created!"}) 
})

UserRoute.get('/register', async(req,res)=>{
  const studetdata = await user.find(req.params);
  res.send(studetdata);
})

UserRoute.delete('/register/:id', async(req,res)=>{
  const data = await user.findByIdAndDelete(req.params.id)
  if (data) {
    res.send({msg: `${data.name} user is deleted`})
  }
  else{
    res.send({msg: "msg: this user is not store in  database"})
  }
})


UserRoute.post('/login', async(req,res)=>{

    const emailexists = await user.findOne({email: req.body.email}) 
    if (!emailexists) {
      res.send({msg: "email doesn't match"})
    }
      const ismatch = await bcrypt.compare(req.body.password, emailexists.password);
      if (ismatch) {
        const token = jwt.sign({ email: req.body.emailexistsmail }, 'shhhhh');
         res.send({token, IsloginIn: true})
      }
      else{
          res.send({msg: "password doesn't match"})
      }
})
 
  module.exports = UserRoute;