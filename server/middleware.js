const bodyParser = require('body-parser');

module.exports = app => {
  app.use(bodyParser.json());
  app.use((req, res, next) => { console.log(req.method, req.url); next(); });
}