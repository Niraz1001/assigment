const {Route} = require('express')
const UserRoute = Route();

UserRoute.get('/users', (req, res) => {
    res.send('ram, shyam, sani rani, mohan, sit gita')
  })
  
  module.exports = UserRoute;