"use client";
import Link from 'next/link';
import { useEffect } from 'react';

const Setting = () => {
  return (
    <div className="settings-page">
      <div className="settings-container">
        <h2 className="settings-title">⚙️ Admin Settings</h2>
        <p className="settings-description">
          Configure platform-wide settings including access control, user management, and system logs.
        </p>

        <div className="settings-nav">
          <Link href="/setting" className="settings-link">Settings</Link>
          <Link href="/about" className="settings-link">About Us</Link>
          <Link href="/loginn" className="settings-link logout">Logout</Link>
        </div>
      </div>

      <style jsx>{`
        .settings-page {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: #f3f4f6;
          padding: 2rem;
        }

        .settings-container {
          background: #ffffff;
          padding: 2.5rem 2rem;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          max-width: 600px;
          width: 100%;
          text-align: center;
        }

        .settings-title {
          font-size: 2rem;
          color: #1a202c;
          margin-bottom: 1rem;
        }

        .settings-description {
          font-size: 1rem;
          color: #4a5568;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .settings-nav {
          display: flex;
          justify-content: center;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        .settings-link {
          background-color: #3a86ff;
          color: white;
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          font-weight: 500;
          transition: background-color 0.3s ease;
        }

        .settings-link:hover {
          background-color: #2f6fd6;
        }

        .logout {
          background-color: #e63946;
        }

        .logout:hover {
          background-color: #c92c3d;
        }

        @media (max-width: 480px) {
          .settings-title {
            font-size: 1.5rem;
          }

          .settings-description {
            font-size: 0.95rem;
          }

          .settings-link {
            font-size: 0.9rem;
            padding: 0.5rem 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Setting;
