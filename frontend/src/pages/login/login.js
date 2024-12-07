import React, {useState} from "react";
import "./login.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from "../../components/button";
import Stack from '@mui/material/Stack';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';

const Login = () => {
  const navigate = useNavigate();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/auth/login', {username, password});

      localStorage.setItem('session_id', response.data.session_id);
      alert(response.data.message);
    } catch(err){
      console.error('Login error:', err);
      alert("An error occurred"); 
    }
  }

  return (
    <div className="login-container">
      <Stack alignItems="center" direction="row">
        <EmojiObjectsOutlinedIcon sx={{ fontSize: 100, color: '#FDB61C'  }} />
        <h1 className="title">Bright Scholarship</h1>
      </Stack>
      <div className="login-box">
        <h2 className="welcome-text">Welcome back, Scholar!</h2>
        <p className="subtext">Please log in to enter your scholarship portal.</p>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label htmlFor="username">
              <i className="username-icon"></i>
            </label>
            <PersonIcon sx={{ fontSize: 40, color: '#9D6E49' }} />
            <input type="text" id="username" className="username-input" placeholder="Username" value={username} 
            onChange={(e) => setUsername(e.target.value)}/>
          </div>

          <div className="input-group">
            <label htmlFor="password">
              <i className="password-icon"></i>
            </label>
            <LockIcon sx={{ fontSize: 40, color: '#9D6E49' }}/>
            <input type="password" id="password" className="password-input" placeholder="Password" value={password} 
            onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <Button
            type="submit"
            label="Sign in"
            onClick={() => navigate('/home/student')}
            variant="primary"
            style={{ fontWeight: 800, fontSize: "24px" }}
          />

          <div className="divider">or</div>

            <Button
            label="Submit an application"
            onClick={() => navigate('/apply')}
            variant="accent"
            style={{ fontWeight: 800, fontSize: "24px" }}
            />
        </form>
      </div>
    </div>
  );
};

export default Login;
