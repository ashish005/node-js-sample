(function(){
    'use strict';
    var dbeRepo = require('./enricher-db.repo');
    function routes(express, server, http){
        var router = express.Router();// get an instance of the express Router
        // a middleware function with no mount path. This code is executed for every request to the router
        router.use(function (req, res, next) {
            next();
        });
        router.get('/view', dbeRepo.dbView);
        router.post('/test-connection', dbeRepo.testDbConnection);
        router.post('/db', dbeRepo.saveDBConnection);
        router.get('/db/:id', dbeRepo.userConnectionServerSchemas);

        return router;
    }

    module.exports = routes;
})();