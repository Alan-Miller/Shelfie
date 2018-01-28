require('dotenv').config();

const express = require('express')
    , app = express()
    , massive = require('./massive')
    , middleware = require('./middleware')
    , api = require('./api')
    , port = process.env.PORT
  

middleware(app);
massive(app);
api(app);

app.listen(port, () => { console.log(`Listening on ${port}.`) });