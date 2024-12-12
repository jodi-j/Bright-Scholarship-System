const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Application = sequelize.define('Applications', {
    application_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true, },
    submission_date: { 
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW },
    student_id: { 
        type: DataTypes.STRING, 
        allowNull: false,
        references: {
            model: 'Applicant',
            key: 'student_id',
        },
    },
}, {});

module.exports = Application;