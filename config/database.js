var Promise = require('promise');
var config = require('./config');
const { Pool }  = require('pg');
const connectionString = config.DATABASE_URL;

const pool = new Pool(connectionString);


module.exports = {
    query: function(text, values) {
        return new Promise(function(resolve, reject) {
            // pool.connect(connectionString, function(err, client, done) {
            //     client.query(text, values, function(err, result) {
            //         done();
            //         if (err) {
            //             handleErrorMessages(err)
            //                 .then(function(message) {
            //                     reject(message);
            //                 })
            //                 .catch(function() {
            //                     reject();
            //                 });
            //         }
            //         else {
            //             resolve(result);
            //         }
            //     });
            // });
            pool.query(text, values, function(err, result) {
                done();
                if (err) {
                    handleErrorMessages(err)
                        .then(function(message) {
                            reject(message);
                        })
                        .catch(function() {
                            reject();
                        });
                }
                else {
                    resolve(result);
                }
            });
        });
    }
};

function handleErrorMessages(err) {
    return new Promise(function(resolve, reject) {
        if (err.code == '23505') {
            err = 'email already in use, please use a different one'
        }
        if (err.code == '22P02') {
            err = 'invalid user UUID'
        }
        else if (process.env.NODE_ENV !== 'development') {
            err = 'something went wrong, please check your input and try again'
        }
        resolve(err);
    });
}