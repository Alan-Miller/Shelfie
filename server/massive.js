const massive = require('massive');

module.exports = app => {
  massive(process.env.CONNECTION_STRING).then(db => app.set('db', db));
}