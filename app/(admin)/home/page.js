"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminHome() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const role = localStorage.getItem('role');

    if (isLoggedIn !== 'true' || role !== 'admin') {
      window.location.href = '/login';
    } else {
      setChecked(true);
    }
  }, []);

  if (!checked) return null;

  return (
    <main className="admin-home-wrapper">
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="nav-title">Admin Portal</h1>
          <div className="nav-links">
            <Link href="/dashboard" className="nav-link">Dashboard</Link>
            <Link href="/settings" className="nav-link">Settings</Link>
            <a href="#" onClick={() => { localStorage.clear(); window.location.href = '/loginn'; }} className="logout-button">Logout</a>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .navbar {
          background: linear-gradient(to right, #a5b4fc, #c7d2fe);
          padding: 16px 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
          width: 100%;
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          width: 100%;
          padding: 0 24px;
        }

        .nav-title {
          font-size: 28px;
          font-weight: 800;
          color: #ffffff;
        }

        .nav-links {
          display: flex;
          gap: 24px;
        }

        .nav-link {
          font-weight: 600;
          color: #ffffff;
          text-decoration: none;
          padding: 8px 14px;
          border-radius: 6px;
          transition: background 0.2s, color 0.2s;
        }

        .nav-link:hover {
          background: #b3bcf5;
          color: #fff;
        }

        .logout-button {
          background-color: #f87171;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .logout-button:hover {
          background-color: #dc2626;
        }
      `}</style>

      <div className="container">
        <div className="content">
          <h2>Admin Dashboard</h2>
          <p>Welcome, Admin! What would you like to do?</p>
          <div className="nav">
            <Link href="/createblog">Create Blog</Link>
            <Link href="/updateblog">Update Blog</Link>
            <Link href="/blog">View All Blogs</Link>
          </div>
          <br />
          <a
            href="#"
            onClick={() => {
              localStorage.clear();
              window.location.href = '/loginn';
            }}
          >
            Logout
          </a>
        </div>
      </div>

      <style jsx>{`
        .admin-home-wrapper {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          background-color: #f8f9fa;
          padding-top: 20px;
        }

        .container {
          background-color: #ffffff;
          padding: 40px 30px;
          border: 1px solid #dee2e6;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          width: 90%;
          max-width: 500px;
          text-align: center;
          border-radius: 12px;
          margin-top: 40px;
        }

        h2 {
          margin-bottom: 16px;
          font-size: 2rem;
          color: #343a40;
        }

        p {
          font-size: 1.1rem;
          color: #6c757d;
          margin-bottom: 24px;
        }

        .nav {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 24px;
        }

        .nav a {
          background-color: #007bff;
          color: white;
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .nav a:hover {
          background-color: #0056b3;
          transform: translateY(-2px);
        }

        a[href="#"] {
          display: inline-block;
          margin-top: 30px;
          padding: 10px 20px;
          background-color: #dc3545;
          color: white;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        a[href="#"]:hover {
          background-color: #c82333;
          transform: scale(1.05);
        }
      `}</style>
    </main>
  );
}
