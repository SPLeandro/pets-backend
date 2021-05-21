const {DataType, DataTypes} = require('sequelize');

const sequelize = require('../database/database.js');


const Pet = sequelize.define('Pet', {

    IDPET: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,           
    },  

    NAME: {
        allowNull: false,
        type: DataTypes.STRING(255)
    },

    DATA_NASC: {
        allowNull: false,
        type: DataTypes.DATE()
    },

    TYPE: {
        allowNull: false,
        type: DataTypes.STRING(255)
    },

    RACA: {
        allowNull: false,
        type: DataTypes.STRING(255)
    },

    IMAGE: {
        allowNull: false,
        type: DataTypes.STRING(255)
    },

    OWNER: {
        allowNull: false,
        type: DataTypes.STRING(255)
    },

    TELEPHONE: {
        allowNull: false,
        type: DataTypes.STRING(13)
    },


}, {
    updateAt: false,
});


module.exports =  Pet;