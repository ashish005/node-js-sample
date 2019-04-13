(function(){
    'use strict';
    function routes(express){
        var router = express.Router();// get an instance of the express Router
        // a middleware function with no mount path. This code is executed for every request to the router
        router.use(function (req, res, next) {
            next();
        });

        const viewRouter = (customData, req, res, next)=> {
            res.render(customData.path, { title: customData.title });
        };

        const isAuthenticated = (req, res, next)=> {
            // do any checks you want to in here

            // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
            // you can do this however you want with whatever variables you set up
            if (req.user && req.user.authenticated)
                return next();

            // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
            res.redirect('/');
        };

        router.get('/', viewRouter.bind(null, { path:'index', title: 'Default' }));
        router.get('/login', viewRouter.bind(null, { path:'login', title: 'Login' }));
        router.get('/signup', viewRouter.bind(null, { path:'signup', title: 'signup' }));
        router.get('/users', isAuthenticated, viewRouter.bind(null, { path:'users', title: 'users' }));

        return router;
    }

    module.exports = routes;
})();