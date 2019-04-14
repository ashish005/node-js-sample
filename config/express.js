// Dependencies
var config = require('./config');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');

var initApp = function(express) {
    // Init
    const app = express();

    // Config
    app.set('port', config.PORT);

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
    app.use(morgan('short'));

    // view engine setup
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'jade');


    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, '../public')));



    return app;
};

module.exports = initApp;