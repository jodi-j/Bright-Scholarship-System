const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust path to your DB configuration

const Applicant = sequelize.define('Applicant', {
    student_id: { 
        type: DataTypes.STRING, 
        primaryKey: true,
        allowNull: false 
    },
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    birthdate: { type: DataTypes.DATE, allowNull: false },
    gender: { type: DataTypes.STRING, allowNull: false },
    phone_number: { type: DataTypes.STRING, allowNull: false },
    grade_status: { type: DataTypes.STRING, allowNull: false },
    email_address: { type: DataTypes.STRING, allowNull: false },
    cumulative_GPA: { type: DataTypes.FLOAT, allowNull: false },
    current_GPA: { type: DataTypes.FLOAT, allowNull: false },
    current_credit_hours: { type: DataTypes.INTEGER, allowNull: false },
}, {});

module.exports = Applicant;
