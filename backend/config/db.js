const { Sequelize } = require('sequelize');

// Create a new Sequelize instance with your MySQL connection details
const sequelize = new Sequelize('bright_scholarship', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
});

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connection successful!');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
