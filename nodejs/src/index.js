const express = require('express');
const UserRoute = require('./route/users');
var cors = require('cors')

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors())
app.use(UserRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
