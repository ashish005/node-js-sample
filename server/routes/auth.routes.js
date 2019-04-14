(function(){
    'use strict';
    var jwt = require('jsonwebtoken');
    var User = require('./../models/users');
    var config = require('./../../config/config');
    var usersController = require('../controllers').UserController;

    function routes(express){
        var router = express.Router();// get an instance of the express Router

        // Registration of new users via API
         router.post('/register', usersController.createUser);

        // Authentication to obtain a token
        router.post('/login', function(req, res) {
            User.authenticate(req.body)
                .then(function(result) {
                    if (result.isAuthorized === true) {
                        jwt.sign({ sub: result.id }, config.SECRET, { expiresIn: config.JWT_EXPIRATION, issuer: 'masterLord' }, function(token) {
                            return res.status(200).json({
                                message: 'authenticated, token attached',
                                token: token
                            });
                        });
                    }
                    else {
                        return res.status(401).json({
                            message: 'bad credentials'
                        });
                    }
                })
                .catch(function(err) {
                    return res.status(400).json({
                        message: err
                    });
                });
        });

        return router;
    }

    module.exports = routes;
})();