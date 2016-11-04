// app/routes.js

// grab the message model we just created
var Nerd = require('./models/message');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/messages', function(req, res) {
            // use mongoose to get all nerds in the database
            Message.find(function(err, messages) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(messages); // return all nerds in JSON format
            });
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendFile('./public/views/index.html'); // load our public/index.html file
        });

    };