(function(){
    'use strict';
    const userController = require('../controllers').User;
    const creditInfoController = require('../controllers').CreditInfo;

    function routes(express, server){
        var router = express.Router();// get an instance of the express Router
        // a middleware function with no mount path. This code is executed for every request to the router
        router.use(function (req, res, next) {
            next();
        });

        /* User */
        router.get('/users', userController.list);
        router.get('/user/:id', userController.getById);
        router.post('/signup', userController.register);
        router.post('/login', userController.login);

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