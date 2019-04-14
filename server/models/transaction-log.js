'use strict';

module.exports = (sequelize, DataTypes) => {
    const TransactionLog = sequelize.define('TransactionLog', {
        id: DataTypes.INTEGER,
        sender_id: DataTypes.INTEGER,
        receiver_id: DataTypes.INTEGER,
        credit_amount: DataTypes.INTEGER
    }, {});

    return TransactionLog;
};