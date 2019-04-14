const Promise = require('promise');
const UserController = require('../models').User;
const config = require('./../../config/config');

module.exports = {
    createUser: function(req, res) {
        UserController.create(req.body)
            .then(function(result) {
                return res.status(200).json({
                    message: 'success! created account for new user',
                    id: result.id
                });
            })
            .catch(function(err) {
                return res.status(400).json({
                    message: err
                });
            });
    },

    changeName: function(req, res) {
        UserController.updateName({ id: req.params.id, name: req.body.name })
            .then(function(result) {
                return res.status(200).json(result);
            })
            .catch(function(err) {
                return res.status(400).json({
                    message: err
                });
            });
    },

    changeEmail: function(req, res) {
        UserController.updateEmail({ id: req.params.id, email: req.body.email })
            .then(function(result) {
                return res.status(200).json(result);
            })
            .catch(function(err) {
                return res.status(400).json({
                    message: err
                });
            });
    },

    changePassword: function(req, res) {
        UserController.updatePassword({ id: req.params.id, password: req.body.password })
            .then(function(result) {
                return res.status(200).json(result);
            })
            .catch(function(err) {
                return res.status(400).json({
                    message: err
                });
            });
    },

    deleteUser: function(req, res) {
        UserController.delete({ id: req.params.id })
            .then(function(result) {
                return res.status(200).json({
                    message: 'deleted user with id: ' + result.id
                });
            })
            .catch(function(err) {
                return res.status(400).json({
                    message: err
                });
            });
    },

    getOneUser: function(req, res) {
        UserController.findOne({ id: req.params.id })
            .then(function(result) {
                delete result.last_login_attempt;
                delete result.login_attempts;
                return res.status(200).json(result);
            })
            .catch(function(err) {
                return res.status(400).json({
                    message: err
                });
            });
    },

    getSelfUser: function(req, res) {
        UserController.findOne({ id: req.decoded.sub })
            .then(function(result) {
                delete result.last_login_attempt;
                delete result.login_attempts;
                return res.status(200).json(result);
            })
            .catch(function(err) {
                return res.status(400).json({
                    message: err
                });
            });
    },

    listUsers: function(req, res) {
        UserController.findAll()
            .then(function(result) {
                return res.status(200).json(result);
            })
            .catch(function(err) {
                return res.status(400).json({
                    message: err
                });
            });
    },
};