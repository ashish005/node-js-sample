'use strict';

module.exports = (sequelize, DataTypes) => {
    const CreditInfo = sequelize.define('CreditInfo', {
        id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        firebase_credit: DataTypes.INTEGER,
        database_credit: DataTypes.INTEGER
    }, {});

    return CreditInfo;
};