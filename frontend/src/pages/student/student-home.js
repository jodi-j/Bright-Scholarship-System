import React from 'react';
import StudentInfoCard from '../../components/student-info';
import { colors } from '../../components/colors';
import './student-home.css';

const StudentHome = () => {
    const studentData = {
        name: "Ima Student",
        gradeStatus: "Senior",
        birthday: "January 1, 2000",
        gender: "Female",
        phone: "(123) 456-7890",
        email: "imastudent@test.com",
        id: "123456789",
        cumulativeGPA: "4.0",
        currentGPA: "4.0",
        creditHours: "14",
    };

    return (
        <div className="student-home-container">
            <div className="content-container">
                {/* Application Status Section*/}
                <h1 style={{ color:colors.accentBlue, marginBottom: '0' }}>Your Application Status</h1>
                <p style={{ color:colors.mainBrown, fontWeight: '700' }}>This status will update based on the stage your application is in for the scholarship selection process. </p>
                {/* will be dynamically changed based on database */}
                <div className="status-card">
                    <h2>Application Received</h2>
                </div>
                {/* will be dynamically changed based on status*/}
                <p>Your application has been received! The information will be verified by the Registrar’s Office 
                    in order to ensure that your application is truthful and accurate. 
                    You will be notified if your application has been verified or not.
                </p>

                {/* Account Info Section */}
                <h1 style={{ color:colors.accentBlue, marginBottom: '0' }}>Your Account Information</h1>
                <StudentInfoCard student={studentData} />
            </div>
        </div>
    );
};

export default StudentHome;