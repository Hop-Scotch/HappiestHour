let pmongo = require('promised-mongo');

let uri = 'mongodb://chrisitchy:Po0poopoo8@ds019956.mlab.com:19956/happiesthour';

let db = pmongo(uri, {
  authMechanism: 'ScramSHA1'
});

module.exports = db;