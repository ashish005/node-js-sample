const User = require('../models').User;

module.exports = {
    list(req, res) {
        return User
            .findAll({ where : { id : !req.params.id }})
            .then((info) => res.status(200).send(info))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        return User
            .findById(req.params.id)
            .then((user) => {
                if (!user) {
                    return res.status(404).send({
                        message: 'User Not Found',
                    });
                }
                return res.status(200).send(user);
            })
            .catch((error) => res.status(400).send(error));
    },

    login(req, res) {
        return User
            .findOne({where : {email: req.body.email, password: req.body.password}})
            .then((user) => {
                if (!user) {
                    return res.status(404).send({
                        message: 'User Not Found',
                    });
                }
                return res.status(200).send(user);
            })
            .catch((error) => res.status(400).send(error));
    },

    //TODO: make password hash
    register(req, res) {
        return User
            .create({
                email: req.body.email,
                password: req.body.password,
            })
            .then((data) => res.status(201).send(data))
            .catch((error) => res.status(400).send(error));
    },
};