import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './login.css';
import { app } from '../../../firebaseConfig'; 

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Get the authentication instance from the initialized app
      const auth = getAuth(app); // Pass the initialized app instance
      
      // Use Firebase signInWithEmailAndPassword method
      await signInWithEmailAndPassword(auth, email, password);
      
      // Navigate to the dashboard after successful login
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error here, e.g., show error message to the user
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <div className="input-container">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
