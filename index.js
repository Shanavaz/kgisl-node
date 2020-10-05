const app = require('./app/app.js');
require('dotenv').config()

const port = process.env.PORT
  
console.log ("\n Server Running at :", port);

app.listen(port);