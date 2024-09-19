const express = require('express')
const UserRoute = require('./route/users');

const app = express()
const port = 3001

app.get('/users', (req, res) => {
  res.send('ram, shyam, sani rani, mohan, sit gita')
})


app.use(UserRoute)
app.use(express.json())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
