import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import Button from '../../components/button.js';
import { colors } from '../../components/colors.js';
import axios from 'axios';
import './apply.css';

const Apply = () => {
    const navigate = useNavigate();

    // State variables for form fields
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [birthdate, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [student_id, setStudentID] = useState('');
    const [grade_status, setGradeStatus] = useState('');
    const [current_credit_hours, setCreditHours] = useState('');
    const [cumulative_GPA, setCumulativeGPA] = useState('');
    const [current_GPA, setCurrentGPA] = useState('');
    const [username, setUsername] = useState('');
    const [email_address, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleApply = async (e) => {
        e.preventDefault();
    
        // Ensure passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
    
        try {
            // Create an object with all the application data
            const applicationData = {
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
                status: "submitted",
            };
    
            // Send POST request to backend to register and apply
            const response = await axios.post('http://localhost:5001/api/auth/apply', applicationData);
    
            console.log('Response from backend:', response.data);
            
            // Check for userId and applicationId instead of success property
            if (response.data.userId && response.data.applicationId) {
                alert('Application submitted successfully!');
                navigate('/home/student'); // Redirect to home/student page after successful application
            } else { //fix this bc i think the field it's checking isn't correct
                alert('There was an error submitting your application.');
            }
        } catch (err) {
            // More detailed error logging
            if (err.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Error response data:', err.response.data);
                console.error('Error response status:', err.response.status);
                
                // Show specific error message from backend
                alert(err.response.data.message || 'An error occurred while submitting your application.');
            } else if (err.request) {
                // The request was made but no response was received
                console.error('No response received:', err.request);
                alert('No response from server. Please check your network connection.');
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error setting up request:', err.message);
                alert('An unexpected error occurred. Please try again later.');
            }
        }
    };

    return (
        <div className="apply-container">
            <Stack alignItems="center" direction="row">
                <EmojiObjectsOutlinedIcon sx={{ fontSize: 100, color: colors.logoYellow  }} />
                <h1 className="title">Bright Scholarship</h1>
            </Stack>
            <p style={{ color:colors.mainBrown, marginLeft: '16px', fontWeight: '700' }}>Please fill out the following information to complete your scholarship application. 
               Your information will be verified with the Registrar’s Office and will be used to determine 
               if you are eligible for this scholarship. 
            </p>
        
            <form onSubmit={handleApply} className="form-container">
                <div className="application application-box left">
                    <h2 style={{ color:colors.mainBrown, marginTop: '0' }}>Enter Personal Information</h2>
                    
                    <div className="inputs-container">
                        <div className="inputs">
                            <label htmlFor="firstName" className="input-label">First Name</label>
                            <input 
                                type="text" 
                                id="firstName" 
                                name="firstname" 
                                className="half input-field" 
                                placeholder="First Name"
                                onChange={(e) => setFirstName(e.target.value)}
                                required 
                            />
                        </div>

                        <div className="inputs">
                            <label htmlFor="lastName" className="input-label">Last Name</label>
                            <input 
                                type="text" 
                                id="lastName" 
                                name="lastName" 
                                className="input-field half" 
                                placeholder="Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                                required 
                            />
                        </div>
                    </div>

                    <div className="inputs-container">
                        <div className="inputs">
                            <label htmlFor="birthday" className="input-label">Birthday</label>
                            <input 
                                type="date" 
                                id="birthday" 
                                name="birthday" 
                                className="half input-field" 
                                placeholder="Birthday"
                                onChange={(e) => setBirthday(e.target.value)}
                                required 
                            />
                        </div>

                        <div className="inputs">
                            <label htmlFor="gender" className="input-label">Gender</label>
                            <select 
                                type="text" 
                                id="gender" 
                                name="gender" 
                                className="half input-field" 
                                onChange={(e) => setGender(e.target.value)}
                                required 
                            >
                                <option value="" disabled selected>Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="nonbinary">Non-binary</option>
                            </select>
                        </div>
                    </div>

                    <div className="inputs-container">
                        <div className="inputs">
                            <label htmlFor="phoneNumer" className="input-label">Phone Number</label>
                            <input 
                                type="tel" 
                                id="phoneNumber" 
                                name="phoneNumber" 
                                className="half input-field" 
                                placeholder="1234567890"
                                pattern="[0-9]{10}"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required 
                            />
                        </div>

                        <div className="inputs">
                            <label htmlFor="studentID" className="input-label">Student ID</label>
                            <input 
                                type="number" 
                                id="studentID" 
                                name="studentID" 
                                className="half input-field" 
                                placeholder="12345678"
                                pattern="[0-9]{8}"
                                onChange={(e) => setStudentID(e.target.value)}
                                required 
                            />
                        </div>
                    </div>

                    <div className="inputs-container">
                        <div className="inputs">
                            <label htmlFor="gradeStatus" className="input-label">Grade Status</label>
                            <select
                                type="text" 
                                id="gradeStatus" 
                                name="gradeStatus" 
                                className="half input-field" 
                                placeholder="Select Grade"
                                onChange={(e) => setGradeStatus(e.target.value)}
                                required 
                            >
                                <option value="" disabled selected>Select Grade Status</option>
                                <option value="freshman">Freshman</option>
                                <option value="sophomore">Sophomore</option>
                                <option value="junior">Junior</option>
                                <option value="senior">Senior</option>
                                <option value="grad">Grad Student</option>
                            </select>
                        </div>
                        
                        <div className="inputs">
                            <label htmlFor="creditHours" className="input-label">Credit Hours</label>
                            <input 
                                type="number" 
                                id="creditHours" 
                                name="creditHours" 
                                className="half input-field" 
                                placeholder="0"
                                onChange={(e) => setCreditHours(e.target.value)}
                                required 
                            />
                        </div>
                    </div>

                    <div className="inputs-container">
                        <div className="inputs">
                            <label htmlFor="cumulativeGPA" className="input-label">Cumulative GPA</label>
                            <input 
                                type="number" 
                                id="cumulativeGPA" 
                                name="cumulativeGPA" 
                                className="half input-field" 
                                placeholder="4.0"
                                onChange={(e) => setCumulativeGPA(e.target.value)}
                                required 
                            />
                        </div>

                        <div className="inputs">
                            <label htmlFor="currentGPA" className="input-label">Current GPA</label>
                            <input 
                                type="number" 
                                id="currentGPA" 
                                name="currentGPA" 
                                className="half input-field" 
                                placeholder="4.0"
                                onChange={(e) => setCurrentGPA(e.target.value)}
                                required 
                            />
                        </div>
                    </div>
                    
                </div>

                <div className="credentials application-box right">
                    <h2 style={{ color:colors.mainBrown, marginTop: '0' }}>Create Login Credentials</h2>
                    
                    <div className="inputs">
                        <label htmlFor="username" className="input-label">Username:</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            className="input-field" 
                            placeholder="Enter your username"
                            onChange={(e) => setUsername(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="inputs">
                        <label htmlFor="email" className="input-label">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            className="input-field" 
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="inputs">
                        <label htmlFor="password" className="input-label">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            className="input-field" 
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="inputs">
                        <label htmlFor="confirm-password" className="input-label">Confirm Password:</label>
                        <input 
                            type="password" 
                            id="confirm-password" 
                            name="confirm-password" 
                            className="input-field" 
                            placeholder="Re-enter your password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required 
                        />
                    </div>
                </div>
                <Button
                    type="submit"
                    label="Submit Application"
                    variant="primary"
                    style={{ fontWeight: 800, fontSize: "24px" }}
                    class="button-container"
                />
            </form>
        </div>
    );
};

export default Apply;