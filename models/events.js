const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db');

class Event extends Model {};

Event.init({
    title: {
        type: DataTypes.STRING(20),
        defaultValue: "John Doe"
    },
    start: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    },
    color: {
        type: DataTypes.STRING(10),
        defaultValue: '#ad2121'
    },
    // meta: {
    // incrementsBadgeTotal: true,
    // },
    end: {
        type: DataTypes.DATE,
        defaultValue: new Date(new Date().setHours(48))
    }
}, {
    // Other model options go here
    freezeTableName: 'Eventos',
    timestamps: false,
    sequelize, // We need to pass the connection instance
    modelName: 'Eventos' // We need to choose the model name
});

console.log(Event === sequelize.models.Eventos);

module.exports = {Event};