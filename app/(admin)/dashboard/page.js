"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import travelBlogs from '../../lib/traveldata';

const Dashboard = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(travelBlogs);
  }, []);

  const handleEdit = (id) => {
    router.push(`/updateblog/${id}`);
  };

  const handleView = (id) => {
    router.push(`/blog1/${id}`);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome, Admin</h1>
        <p>Here is an overview of your travel blog platform.</p>
      </div>

      <div className="dashboard-table">
        <h2>Manage Travel Blogs</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Blog Name</th>
              <th>Price Range</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id}>
                <td>{blog.id}</td>
                <td>{blog.name}</td>
                <td>{blog.bookingInfo?.priceRange || "N/A"}</td>
                <td>Not specified</td>
                <td>
                  <button onClick={() => handleEdit(blog.id)}>Edit</button>
                  <button className="view" onClick={() => handleView(blog.id)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="dashboard-links">
        <Link href="/setting" className="dash-link">Settings</Link>
        <Link href="/about" className="dash-link">About</Link>
        <Link href="/loginn" className="dash-link logout">Logout</Link>
      </div>

      <style jsx>{`
        .dashboard {
          padding: 2rem;
          background: #f9fafb;
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
        }

        .dashboard-header h1 {
          font-size: 2.5rem;
          color: #1a202c;
        }

        .dashboard-header p {
          color: #4a5568;
          margin-bottom: 2rem;
        }

        .dashboard-table h2 {
          margin-top: 2rem;
          font-size: 1.8rem;
        }

        table {
          width: 100%;
          margin-top: 1rem;
          border-collapse: collapse;
        }

        th, td {
          padding: 0.75rem;
          text-align: left;
          border-bottom: 1px solid #e2e8f0;
        }

        th {
          background-color: #edf2f7;
          font-weight: 600;
        }

        td button {
          margin-right: 0.5rem;
          background-color: #3182ce;
          color: white;
          padding: 0.4rem 0.8rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        td button.view {
          background-color: #38a169;
        }

        td button:hover {
          opacity: 0.9;
        }

        .dashboard-links {
          margin-top: 2rem;
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
          table, thead, tbody, th, td, tr {
            display: block;
          }

          tr {
            margin-bottom: 1rem;
          }

          td {
            position: relative;
            padding-left: 50%;
          }

          td:before {
            position: absolute;
            left: 0;
            width: 45%;
            padding-left: 1rem;
            font-weight: bold;
            color: #4a5568;
          }

          td:nth-of-type(1):before { content: "ID"; }
          td:nth-of-type(2):before { content: "Blog Name"; }
          td:nth-of-type(3):before { content: "Price Range"; }
          td:nth-of-type(4):before { content: "Date"; }
          td:nth-of-type(5):before { content: "Actions"; }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
