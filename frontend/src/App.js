import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbars/Navbar';
import Login from './pages/login/login';
import StudentHome from './pages/student/student-home';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/home' element={<StudentHome/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
