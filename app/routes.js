// app/routes.js
var path = require('path');
var Message = require('./models/message');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/messages', function(req, res) {
            Message.find(function(err, messages) {
                if (err)
                    res.send(err);

                res.json(messages);
            });
        });

        // route to handle creating goes here (app.post)
        app.post('/api/messages', function(req, res) {
            Message.find(function(err, messages) {
                if (err)
                    res.send(err);

                res.json(messages);
            });
        });

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendFile(path.resolve('./public/views/index.html')); // load our public/index.html file
        });

    };