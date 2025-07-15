'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import '../../globals.css';

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
      <div className="container">
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

      <style jsx>{`
        .admin-home-wrapper {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #cccbfa;
        }

        .container {
          background-color: #dcdffc;
          padding: 40px 30px;
          border: 1px solid black;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
          width: 90%;
          max-width: 500px;
          text-align: center;
          border-radius: 12px;
        }

        h2 {
          margin-bottom: 16px;
        }

        .nav {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 24px;
        }

        .nav a {
          background-color: #c2ccf5;
          color: rgb(7, 7, 7);
          padding: 12px 24px;
          border: 1px solid black;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .nav a:hover {
          background-color: #acadad;
          transform: translateY(-2px);
        }

        a[href="#"] {
          display: inline-block;
          margin-top: 30px;
          padding: 10px 20px;
          background-color: #e03131;
          color: white;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        a[href="#"]:hover {
          background-color: #c92a2a;
          transform: scale(1.05);
        }
      `}</style>
    </main>
  );
}
