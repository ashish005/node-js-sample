'use strict';

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: DataTypes.INTEGER,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {});

    return User;
};