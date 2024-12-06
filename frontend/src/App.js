import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/navbars/Navbar';
import Login from './pages/login/login';
import StudentHome from './pages/student/student-home';

function NavigationWrapper() {
  const location = useLocation();

  const showNavbar = location.pathname === '/home';

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
          <Route path='/home' element={<StudentHome/>} />
        </Routes>
    </Router>
  );
}

export default App;
