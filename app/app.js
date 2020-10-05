const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const contactsRouter = require("./contacts/contacts.router");

//Handing CORS Errors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,POST');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
});


app.use(bodyParser.json());

contactsRouter.routes(app);


app.use((req,res,next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error,req,res,next) => {
  res.status(error.status || 500);
  console.log(error)
  console.log('500 statis')
  res.json({
    error: {
      message: error.message
    }
  });
});


module.exports = app;
