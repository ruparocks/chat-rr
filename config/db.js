// config/db.js
var env = require('node-env-file');

env(__dirname + '/.env');

var dbURI = process.env.DATABASE_URL || "database_url";
    module.exports = {
        url : dbURI
    }