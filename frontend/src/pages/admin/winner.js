import React from 'react';
import Button from '../../components/button';
import StudentInfoCard from '../../components/student-info';
import './winner.css';

const Winner = () => {
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
        <div className="winner-container">
            <div className="left">
                <h1>Winner's Information</h1>
                <StudentInfoCard student={studentData} />
            </div>
            <div className="right action-container">
                <div className='half'>
                    <h1 style={{ marginBottom: '4px' }}>Billing Information</h1>
                    <Button
                        type="submit"
                        label="Request Bill"
                        // onClick={() => navigate('/home/student')}
                        variant="primary"
                        style={{ fontWeight: 800, fontSize: "20px", height: '50px', width: '100%', marginLeft: '0' }}
                    />
                    {/* will dynamically update based on database status */}
                    <div className="status-card">
                        <h2>Bill request not submitted</h2>
                    </div>
                    <div>
                        <h2 className="status-desc">Total Tuition: Unknown</h2>
                    </div>
                </div>
                <div className='half'>
                    <h1 style={{ marginBottom: '4px' }}>Reimbursement</h1>
                    <Button
                        type="submit"
                        label="Request Reimbursement"
                        // onClick={() => navigate('/home/student')}
                        variant="primary"
                        style={{ fontWeight: 800, fontSize: "20px", height: '50px', width: '100%', marginLeft: '0' }}
                    />
                    <div className="status-card">
                        <h2>Reimbursement request not submitted</h2>
                    </div>
                    <div>
                        <h2 className="status-desc">Prize money has not been sent to the winner</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Winner;