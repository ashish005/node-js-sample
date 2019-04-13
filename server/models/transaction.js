'use strict';

module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
        id: DataTypes.INTEGER,
        sender_id: DataTypes.INTEGER,
        receiver_id: DataTypes.INTEGER,
        credit_amount: DataTypes.INTEGER
    }, {});

    return Transaction;
};