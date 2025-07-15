'use client';
import { useState } from 'react';

export default function UserLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'user123' && password === 'user123') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', 'user');
      setTimeout(() => {
        window.location.href = '/home1';
      }, 100);
    } else {
      setError('Invalid user credentials');
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <h2>USER LOGIN</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br /><br />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br /><br />

          <button type="submit">LOGIN</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>

      <style jsx>{`
        .wrapper {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #d7dbecff;
        }

        .container {
          background: #ece8f5ff;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
          width: 300px;
        }

        input {
          width: 100%;
          padding: 10px;
          margin-top: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 14px;
        }

        button {
          background-color: #707174ff;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          font-size: 16px;
          cursor: pointer;
          width: 100%;
        }

        button:hover {
          background-color: #858688ff;
        }

        .error {
          margin-top: 10px;
          color: red;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}
