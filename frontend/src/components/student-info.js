// StudentInfoCard.js
import React from 'react';
import Stack from '@mui/material/Stack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CakeIcon from '@mui/icons-material/Cake';
import Man4Icon from '@mui/icons-material/Man4';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import NumbersIcon from '@mui/icons-material/Numbers';
import SchoolIcon from '@mui/icons-material/School';
import BookIcon from '@mui/icons-material/Book';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { colors } from './colors';

const StudentInfoCard = ({ student }) => {
    return (
        <>
            <Stack alignItems="center" direction="row" gap={1} marginBottom={1}>
                <AccountCircleIcon sx={{ fontSize: 80, color: colors.logoYellow }} />
                <div className='name-card'>
                    <p style={{ color: colors.mainBrown, fontWeight: '800', fontSize: '24px' }}>{student.name}</p>
                    <p style={{ color: colors.lightBrown, fontWeight: '800', fontSize: '20px' }}>{student.gradeStatus}</p>
                </div>
            </Stack>

            {[
                { Icon: CakeIcon, title: 'Birthday', value: student.birthday },
                { Icon: Man4Icon, title: 'Gender', value: student.gender },
                { Icon: PhoneIcon, title: 'Phone Number', value: student.phone },
                { Icon: EmailIcon, title: 'Email', value: student.email },
                { Icon: NumbersIcon, title: 'Student ID', value: student.id },
                { Icon: SchoolIcon, title: 'Cumulative GPA', value: student.cumulativeGPA },
                { Icon: BookIcon, title: 'Current GPA', value: student.currentGPA },
                { Icon: WatchLaterIcon, title: 'Credit Hours', value: student.creditHours },
            ].map((item, index) => (
                <div className="item-line" key={index}>
                    <Stack alignItems="center" direction="row" gap={1}>
                        <item.Icon sx={{ fontSize: 45, color: colors.mainBrown }} />
                        <p className="data-title"
                            style={{
                                color: colors.mainBrown,
                                fontWeight: '500',
                                fontSize: '24px',
                                marginTop: '4px',
                                marginBottom: '4px',
                            }}
                        >{item.title}</p>
                        <p style={{
                            color: colors.lightBrown,
                            fontWeight: '500',
                            fontSize: '24px',
                            marginTop: '4px',
                            marginBottom: '4px',
                        }}
                        >{item.value}</p>
                    </Stack>
                </div>
            ))}
        </>
    );
};

export default StudentInfoCard;
