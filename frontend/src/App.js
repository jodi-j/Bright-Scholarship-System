import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/navbars/Navbar';
import Login from './pages/login/login';
import StudentHome from './pages/student/student-home';
import Apply from './pages/apply/apply';
import CommitteeMemberHome from './pages/committee-member/cm-home';
import Winner from './pages/admin/winner';

function NavigationWrapper() {
  const location = useLocation();

  const showNavbar = location.pathname === '/home/student' || '/home/cm';

  return (
    <div className="App">
      {showNavbar && <Navbar />}
    </div>
  );
}

function App() {
  return (
    <Router>
        <NavigationWrapper />
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home/student' element={<StudentHome/>} />
          <Route path='/apply' element={<Apply/>} />
          <Route path='/home/cm' element={<CommitteeMemberHome/>} />
          <Route path='/admin/winner' element={<Winner />} />
        </Routes>
    </Router>
  );
}

export default App;
