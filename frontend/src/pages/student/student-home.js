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
import { colors } from '../../components/colors';
import './student-home.css';

const StudentHome = () => {
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
                <Stack alignItems="center" direction="row" gap={1} marginBottom={1}>
                    <AccountCircleIcon sx={{ fontSize: 80, color: colors.logoYellow  }} />
                    <div className='name-card'>
                        <p style={{ color:colors.mainBrown, fontWeight: '800', fontSize: '24px' }}>Ima Student</p>
                        <p style={{ color:colors.lightBrown, fontWeight: '800', fontSize: '20px' }}>Grade Status</p>
                    </div>
                </Stack>

                <div className="item-line">
                    <Stack alignItems="center" direction="row" gap={1}>
                        <CakeIcon sx={{ fontSize: 45, color: colors.mainBrown  }} />
                            <p className="data-title" 
                                style={{ 
                                    color:colors.mainBrown, 
                                    fontWeight: '500', 
                                    fontSize: '24px', 
                                    marginTop: '4px',
                                    marginBottom: '4px', 
                                }}
                            >Birthday</p>
                            <p style={{ 
                                color:colors.lightBrown, 
                                fontWeight: '500', 
                                fontSize: '24px',
                                marginTop: '4px',
                                marginBottom: '4px', }}
                            >January 1, 2000</p>
                    </Stack>
                </div>

                <div className="item-line">
                    <Stack alignItems="center" direction="row" gap={1}>
                        <Man4Icon sx={{ fontSize: 45, color: colors.mainBrown  }} />
                        <p className="data-title"
                            style={{ 
                                color:colors.mainBrown, 
                                fontWeight: '500', 
                                fontSize: '24px', 
                                marginTop: '4px',
                                marginBottom: '4px', 
                            }}
                        >Gender</p>
                        <p style={{ 
                            color:colors.lightBrown, 
                            fontWeight: '500', 
                            fontSize: '24px',
                            marginTop: '4px',
                            marginBottom: '4px', }}
                        >Female</p>
                    </Stack>
                </div>

                <div className="item-line">
                    <Stack alignItems="center" direction="row" gap={1}>
                        <PhoneIcon sx={{ fontSize: 45, color: colors.mainBrown  }} />
                            <p className="data-title" 
                                style={{ 
                                    color:colors.mainBrown, 
                                    fontWeight: '500', 
                                    fontSize: '24px',
                                    marginTop: '4px',
                                    marginBottom: '4px', 
                                }}
                            >Phone Number</p>
                            <p style={{ 
                                color:colors.lightBrown, 
                                fontWeight: '500', 
                                fontSize: '24px',
                                marginTop: '4px',
                                marginBottom: '4px', }}
                            >(123) 456-7890</p>
                    </Stack>
                </div>

                <div className="item-line">
                    <Stack alignItems="center" direction="row" gap={1}>
                        <EmailIcon sx={{ fontSize: 45, color: colors.mainBrown  }} />
                            <p className="data-title" 
                                style={{ 
                                    color:colors.mainBrown, 
                                    fontWeight: '500', 
                                    fontSize: '24px',
                                    marginTop: '4px',
                                    marginBottom: '4px', 
                                }}
                            >Email</p>
                            <p style={{ 
                                color:colors.lightBrown, 
                                fontWeight: '500', 
                                fontSize: '24px',
                                marginTop: '4px',
                                marginBottom: '4px', }}
                            >imastudent@test.com</p>
                    </Stack>
                </div>

                <div className="item-line">
                    <Stack alignItems="center" direction="row" gap={1}>
                        <NumbersIcon sx={{ fontSize: 45, color: colors.mainBrown  }} />
                            <p className="data-title" 
                                style={{ 
                                    color:colors.mainBrown, 
                                    fontWeight: '500', 
                                    fontSize: '24px',
                                    marginTop: '4px',
                                    marginBottom: '4px', 
                                }}
                            >Student ID</p>
                            <p style={{ 
                                color:colors.lightBrown, 
                                fontWeight: '500', 
                                fontSize: '24px',
                                marginTop: '4px',
                                marginBottom: '4px', }}
                            >123456789</p>
                    </Stack>
                </div>

                <div className="item-line">
                    <Stack alignItems="center" direction="row" gap={1}>
                        <SchoolIcon sx={{ fontSize: 45, color: colors.mainBrown  }} />
                            <p className="data-title" 
                                style={{ 
                                    color:colors.mainBrown, 
                                    fontWeight: '500', 
                                    fontSize: '24px',
                                    marginTop: '4px',
                                    marginBottom: '4px', 
                                }}
                            >Cumulative GPA</p>
                            <p style={{ 
                                color:colors.lightBrown, 
                                fontWeight: '500', 
                                fontSize: '24px',
                                marginTop: '4px',
                                marginBottom: '4px', }}
                            >4.0</p>
                    </Stack>
                </div>

                <div className="item-line">
                    <Stack alignItems="center" direction="row" gap={1}>
                        <BookIcon sx={{ fontSize: 45, color: colors.mainBrown  }} />
                            <p className="data-title" 
                                style={{ 
                                    color:colors.mainBrown, 
                                    fontWeight: '500', 
                                    fontSize: '24px',
                                    marginTop: '4px',
                                    marginBottom: '4px', 
                                }}
                            >Current GPA</p>
                            <p style={{ 
                                color:colors.lightBrown, 
                                fontWeight: '500', 
                                fontSize: '24px',
                                marginTop: '4px',
                                marginBottom: '4px', }}
                            >4.0</p>
                    </Stack>
                </div>

                <div className="item-line">
                    <Stack alignItems="center" direction="row" gap={1}>
                        <WatchLaterIcon sx={{ fontSize: 45, color: colors.mainBrown  }} />
                            <p className="data-title" 
                                style={{ 
                                    color:colors.mainBrown, 
                                    fontWeight: '500', 
                                    fontSize: '24px',
                                    marginTop: '4px',
                                    marginBottom: '4px', 
                                }}
                            >Credit Hours</p>
                            <p style={{ 
                                color:colors.lightBrown, 
                                fontWeight: '500', 
                                fontSize: '24px',
                                marginTop: '4px',
                                marginBottom: '4px', }}
                            >14</p>
                    </Stack>
                </div>

            </div>
        </div>
    );
};

export default StudentHome;