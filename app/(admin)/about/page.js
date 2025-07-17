"use client";
import Link from 'next/link';
import { useEffect } from 'react';

const About = () => {
 


  return (
    <div className="about-wrapper">
      <div className="about-container">
        <h1>Welcome to the Admin Panel</h1>
        <p>
          Our platform is designed to provide a seamless and secure admin experience. As an administrator,
          you have access to powerful tools and controls that help manage users, settings, content, and security.
        </p>

        <div className="admin-nav">
          <Link href="/setting" className="admin-link">Settings</Link>
          <Link href="/about" className="admin-link">About</Link>
          <Link href="/loginn" className="admin-link logout">Logout</Link>
        </div>
      </div>

      <style jsx>{`
        .about-wrapper {
          min-height: 100vh;
          background: linear-gradient(to right, #dde6f3ff, #e5e1ebff);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          color: #fff;
        }

        .about-container {
          max-width: 600px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          padding: 2rem 2.5rem;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          text-align: center;
          color:black;
        }

        h1 {
          margin-bottom: 1rem;
          font-size: 2rem;
          font-weight: bold;
        }

        p {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .admin-nav {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .admin-link {
          padding: 0.6rem 1.2rem;
          background: #ffffff;
          color: #3a86ff;
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.3s ease;
          text-decoration: none;
          border: 2px solid #ffffff;
        }

        .admin-link:hover {
          background: transparent;
          color: #ffffff;
        }

        .logout {
          background: #ff006e;
          border-color: #ff006e;
          color: #fff;
        }

        .logout:hover {
          background: transparent;
          color: #ff006e;
        }

        @media (max-width: 480px) {
          .admin-nav {
            flex-direction: column;
            gap: 1rem;
          }

          .about-container {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
