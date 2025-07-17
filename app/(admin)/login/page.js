"use client";
import { useState } from 'react';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin123' && password === 'admin123') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', 'admin');
      setTimeout(() => {
        window.location.href = '/home';
      }, 100);
    } else {
      setError('Invalid admin credentials');
    }
  };

  return (
    <main className="admin-login-wrapper">
      <div className="container">
        <h2>ADMIN LOGIN</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Admin Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          /><br /><br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br /><br />
          <button type="submit">LOGIN</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>

      <style jsx>{`
        .admin-login-wrapper {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #e9ecef;
          padding: 0 20px;
        }

        .container {
          background-color: #ffffff;
          padding: 40px 30px;
          border: 1px solid #dee2e6;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
          text-align: center;
          border-radius: 12px;
        }

        .container h2 {
          margin-bottom: 20px;
          font-size: 1.8rem;
          color: #343a40;
        }

        input[type="text"],
        input[type="password"] {
          width: 100%;
          padding: 12px 14px;
          margin-bottom: 18px;
          border: 1px solid #ced4da;
          border-radius: 8px;
          font-size: 15px;
          transition: border-color 0.2s ease;
        }

        input:focus {
          outline: none;
          border-color: #80bdff;
          box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
        }

        button {
          padding: 12px 24px;
          font-size: 16px;
          font-weight: 500;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
          margin-top: 10px;
          width: 100%;
        }

        button:hover {
          background-color: #0056b3;
          transform: translateY(-1px);
        }

        .error {
          color: #d93025;
          font-weight: 500;
          margin-top: 10px;
        }
      `}</style>
    </main>
  );
}
