"use client";
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
        window.location.href = '/';
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
          background: #f0f2f5;
        }

        .container {
          background: #ffffff;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
          width: 300px;
        }

        h2 {
          margin-bottom: 20px;
          font-size: 1.5rem;
          color: #333;
        }

        input {
          width: 100%;
          padding: 12px 14px;
          margin-top: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 14px;
          transition: border-color 0.2s ease;
        }

        input:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
        }

        button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          width: 100%;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #0056b3;
        }

        .error {
          margin-top: 10px;
          color: #d93025;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}
