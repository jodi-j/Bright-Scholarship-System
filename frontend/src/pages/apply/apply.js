import React from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import Button from '../../components/button.js';
import { colors } from '../../components/colors.js';
import './apply.css';

const Apply = () => {
    const navigate = useNavigate();

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

            <div className="form-container">
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
                                placeholder="(123) 456-7890"
                                pattern="([0-9]{3}) [0-9]{3}-[0-9]{4}"
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
                                required 
                            >
                                <option value="" disabled selected>Select Grade Status</option>
                                <option value="freshman">Freshman</option>
                                <option value="sophomore">Sophomore</option>
                                <option value="junior">Junior</option>
                                <option value="freshman">Freshman</option>
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
                            required 
                        />
                    </div>
                </div>
            </div>

            <Button
                type="submit"
                label="Submit Application"
                onClick={() => navigate('/home/student')}
                variant="primary"
                style={{ fontWeight: 800, fontSize: "24px" }}
                class="button-container"
            />
        </div>
    );
};

export default Apply;