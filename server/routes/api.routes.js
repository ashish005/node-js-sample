(function(){
    'use strict';
    const userController = require('../controllers').UserController;
    const creditInfoController = require('../controllers').CreditInfoController;

    function routes(express){
        var router = express.Router();// get an instance of the express Router
        // a middleware function with no mount path. This code is executed for every request to the router
        // router.use(function (req, res, next) {
        //     next();
        // });

        // a middleware function with no mount path. This code is executed for every request to the router
        // Any route past this point requires a valid auth token
        router.use(function(req, res, next) {
            var token = req.body.token || req.query.token || req.headers['authorization'];

            if (token) {
                jwt.verify(token, config.SECRET, function(err, decoded) {
                    if (err) {
                        return res.status(401).json({
                            message: 'failed authentication: invalid token'
                        });
                    }
                    User.findOne({ 'id': decoded.sub })
                        .then(function(user) {
                            req.decoded = decoded;
                            next();
                        })
                        .catch(function(err) {
                            return res.status(401).json({
                                message: 'failed authentication: ' + err
                            });
                        });
                });
            }
            else {
                return res.status(401).json({
                    message: 'failed authentication: no token provided.'
                });
            }
        });

        // Authentication routes
        //router.use(require('./auth.routes'));

        /* User */
        router.get('/users', userController.listUsers);
        router.get('/users/:id', userController.getOneUser);
        router.put('/users/:id/name', userController.changeName);
        router.put('/users/:id/password', userController.changePassword);
        router.put('/users/:id/email', userController.changeEmail);
        router.delete('/users/:id', userController.deleteUser);

        /* credit-info */
        router.get('/credit-info', creditInfoController.list);
        router.get('/credit-info/:id', creditInfoController.getById);
        router.post('/credit-info', creditInfoController.add);
        router.put('/credit-info/:id', creditInfoController.update);
        router.delete('/credit-info/:id', creditInfoController.delete);

        return router;
    }

    module.exports = routes;
})();