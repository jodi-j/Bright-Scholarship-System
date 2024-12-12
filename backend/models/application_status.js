const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ApplicationStatus = sequelize.define('Application_Status', {
    application_id: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'ApplicationsS',
            key: 'application_id',
        },
    },
    status: { type: DataTypes.STRING, allowNull: false },
}, {})

module.exports = ApplicationStatus;