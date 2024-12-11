const express = require('express');
const sequelize = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // Import the auth routes

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',  // Allow requests only from this frontend
    methods: ['GET', 'POST'],         // Allow specific HTTP methods (optional)
    credentials: true                 // Allow cookies or other credentials to be included (optional)
}));
  

app.use(express.json()); // Middleware to parse JSON bodies
app.use('/api/auth', authRoutes); // Use auth routes

require('dotenv').config();

// Sync models with the database
sequelize.sync()
  .then(() => {
    console.log('Database connected and tables synced');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });

const port = 5001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
