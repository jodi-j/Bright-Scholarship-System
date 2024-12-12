// routes/auth.js
const express = require('express');
const User = require('../models/user');
const Applicant = require('../models/applicant');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Sequelize } = require('sequelize');
const Application = require('../models/applications');
const ApplicationStatus = require('../models/application_status');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

// Register route
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check if the username already exists
    const existingUser = await User.findOne({
      where: {
        [Sequelize.Op.or]: [{ username }],
      },
    });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already in use' });
    }

    // Create a new user
    const user = await User.create({ username, password });

    // Send response
    res.status(201).json({ message: 'User created successfully', userId: user.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

// Apply route - Register and create scholarship application
router.post('/apply', async (req, res) => {
  const {
    student_id,
    first_name,
    last_name,
    birthdate,
    gender,
    phone_number,
    email_address,
    grade_status,
    cumulative_GPA,
    current_GPA,
    current_credit_hours,
    username,
    password,
    status,
  } = req.body;

  try {
      // Create the User
      // Check if the username already exists
      const existingUser = await User.findOne({
          where: { username },
      });
      if (existingUser) {
          return res.status(400).json({ message: 'Username already in use' });
      }
      const user = await User.create({username, password});

      // Create the Applicant
      const applicantData = {
        student_id,
        first_name,
        last_name,
        birthdate,
        gender,
        phone_number,
        email_address,
        grade_status,
        cumulative_GPA,
        current_GPA,
        current_credit_hours,
      };
      const applicant = await Applicant.create(applicantData);

      // Create the Application
      const applicationData = {
        student_id: applicant.student_id,
      };
      const application = await Application.create(applicationData);

      // Create the Application Status
      const applicationStatusData = {
        application_id: application.application_id,
        status,
      };
      const applicationStatus = await ApplicationStatus.create(applicationStatusData);

      // Send response with the success message and application ID
      res.status(201).json({
          message: 'Application and user registration successful',
          applicationId: application.id,
          userId: user.id,
          studentId: applicant.student_id,
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error during application submission' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Find the user by username
    const user = await User.findOne({ where: { username } });

    // If user doesn't exist, return error
    if (!user) {
      console.error('User not found with username:', username);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare the entered password with the stored password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      console.error('Password mismatch for username:', username);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create and send JWT (JSON Web Token)
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
  
module.exports = router;
