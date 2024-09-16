const express = require('express')
const UserRoute = require('./routes/users')

const app = express()
const port = 3001

app.use(UserRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
