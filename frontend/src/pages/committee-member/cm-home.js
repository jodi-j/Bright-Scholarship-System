import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../components/colors';
import StudentCard from '../../components/student-card';
import Button from '../../components/button';
import './cm-home.css'

const CommitteeMemberHome = () => {
    const navigate = useNavigate();

    const [students] = useState([
        { id: 1, name: "John Doe", age: 20, grade: "A" },
        { id: 2, name: "Jane Smith", age: 22, grade: "B" },
        { id: 3, name: "Alice Johnson", age: 19, grade: "A+" },
    ]);

    const student = students.find((s) => s.id === 1);
    
    const handleCardClick = (student) => {
        alert(`Clicked on ${student.name}`);
        // Navigate to another page or show more details here
    };    

    return (
        <div className="cm-home-container">
            <div className="content-container">
                <h1 style={{ color:colors.accentBlue, marginBottom: '0' }}>Potential Winners Dashboard</h1>
                <p style={{ color:colors.mainBrown, fontWeight: '600' }}>
                    Welcome to the Potential Winners Dashboard. 
                    All students who match the winning criteria are displayed on this page.
                    A winning student will be identified based on who matches the highest criteria or, in the case of multiple students meeting a criteria, tiebreakers.
                    Use the submit button at the bottom of the screen to confirm the winner after the 
                    consideration period is over.
                </p>

                <div className="criteria-container ">
                    <h2>Highest Cumulative GPA</h2>
                    <div className="cards-container">
                        {students.map((student) => (
                            <StudentCard 
                                key={student.id} 
                                student={student} 
                                onCardClick={handleCardClick} 
                            />
                        ))}
                    </div>
                </div>

                <div className="criteria-container ">
                    <h2>Highest Current GPA</h2>
                    <div className="cards-container">
                        {students.map((student) => (
                            <StudentCard 
                                key={student.id} 
                                student={student} 
                                onCardClick={handleCardClick} 
                            />
                        ))}
                    </div>
                </div>

                <div className="criteria-container ">
                    <h2>Sole Junior</h2>
                    <p>No students match the criteria at this time.</p>
                </div>

                <div className="criteria-container ">
                    <h2>Sole Female</h2>
                    <div className="cards-container">
                        {students.map((student) => (
                            <StudentCard 
                                key={student.id} 
                                student={student} 
                                onCardClick={handleCardClick} 
                            />
                        ))}
                    </div>
                </div>

                <div className="criteria-container ">
                    <h2>Two Youngest Students</h2>
                    <p>No interviews are required at this time. 
                       A student has matched a higher criteria. </p>
                    <div className="cards-container">
                        {students.map((student) => (
                            <StudentCard 
                                key={student.id} 
                                student={student} 
                                onCardClick={handleCardClick} 
                            />
                        ))}
                    </div>
                </div>

                <h1 style={{ color:colors.accentBlue, marginBottom: '0' }}>Current Winner</h1>
                <div className="confirm-winner-container">
                    {student &&
                    <StudentCard
                        student={student}
                        onCardClick={handleCardClick}
                    />}
                    <Button
                        type="submit"
                        label="Confirm Winner"
                        // onClick={() => navigate('/home/student')}
                        variant="primary"
                        style={{ fontWeight: 800, fontSize: "24px", width: '300px', height: '60px' }}
                    />
                </div>

            </div>
        </div>
    );
};

export default CommitteeMemberHome;