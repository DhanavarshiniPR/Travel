'use client';
import { useEffect } from 'react';
import Link from 'next/link';

const Dashboard = () => {
 

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome, Admin 👋</h1>
        <p>Here’s an overview of your platform and recent activities.</p>
      </div>

      <div className="dashboard-widgets">
        <div className="widget-box users">
          <h3>Total Users</h3>
          <p>1,245</p>
        </div>
        <div className="widget-box posts">
          <h3>Published Posts</h3>
          <p>87</p>
        </div>
        <div className="widget-box visits">
          <h3>Site Visits</h3>
          <p>42,378</p>
        </div>
        <div className="widget-box feedback">
          <h3>User Feedback</h3>
          <p>326</p>
        </div>
      </div>

      <div className="dashboard-links">
        <Link href="/setting" className="dash-link">⚙️ Settings</Link>
        <Link href="/about" className="dash-link">📖 About</Link>
        <Link href="/loginn" className="dash-link logout">🚪 Logout</Link>
      </div>

      <style jsx>{`
        .dashboard {
          padding: 2rem;
          background: #f9fafb;
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
        }

        .dashboard-header h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: #1a202c;
        }

        .dashboard-header p {
          color: #4a5568;
          margin-bottom: 2rem;
        }

        .dashboard-widgets {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .widget-box {
          background-color: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .widget-box:hover {
          transform: translateY(-5px);
        }

        .widget-box h3 {
          font-size: 1rem;
          color: #718096;
          margin-bottom: 0.5rem;
        }

        .widget-box p {
          font-size: 1.5rem;
          font-weight: bold;
          color: #2d3748;
        }

        .dashboard-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .dash-link {
          background-color: #3a86ff;
          color: white;
          padding: 0.6rem 1.2rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
          transition: background-color 0.3s ease;
        }

        .dash-link:hover {
          background-color: #2a6edc;
        }

        .logout {
          background-color: #e53e3e;
        }

        .logout:hover {
          background-color: #c53030;
        }

        @media (max-width: 600px) {
          .widget-box p {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
