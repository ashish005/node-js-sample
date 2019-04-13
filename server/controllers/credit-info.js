const CreditInfo = require('../models').CreditInfo;

module.exports = {
    list(req, res) {
        return CreditInfo
            .findAll({})
            .then((info) => res.status(200).send(info))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        return CreditInfo
            .findById(req.params.id, {})
            .then((creditInfo) => {
                if (!creditInfo) {
                    return res.status(404).send({
                        message: 'CreditInfo Not Found',
                    });
                }
                return res.status(200).send(creditInfo);
            })
            .catch((error) => res.status(400).send(error));
    },

    add(req, res) {
        return CreditInfo
            .create({
                firebase_credit: req.body.firebase_credit,
                database_credit: req.body.database_credit
            })
            .then((data) => res.status(201).send(data))
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return CreditInfo
            .findById(req.params.id)
            .then(creditInfo => {
                if (!creditInfo) {
                    return res.status(404).send({
                        message: 'Credit Info Not Found',
                    });
                }
                return creditInfo
                    .update({
                        firebase_credit: req.body.firebase_credit,
                        database_credit: req.body.database_credit
                    })
                    .then(() => res.status(200).send(course))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return CreditInfo
            .findById(req.params.id)
            .then(data => {
                if (!data) {
                    return res.status(400).send({
                        message: 'CreditInfo Not Found',
                    });
                }
                return data
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
};