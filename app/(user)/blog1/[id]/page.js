"use client";

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import travelBlogs from '../../../lib/traveldata';


export default function BlogDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    travelers: 1,
  });

  useEffect(() => {
    const localBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const foundLocal = localBlogs.find((b) => b.id === id);
    const foundTravel = travelBlogs.find((b) => b.id === id);
    setBlog(foundLocal || foundTravel);
  }, [id]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      router.push('/loginn');
    }
  }, [router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    alert(`Booking Confirmed!\n\nDestination: ${blog.name || blog.title}\nName: ${formData.name}\nDate: ${formData.date}\nTravelers: ${formData.travelers}`);
    setFormData({ name: '', email: '', date: '', travelers: 1 });
  };

  if (!blog) {
    return (
      <div className="blog-details-wrapper">
        <h2 className="not-found">Blog not found</h2>
      </div>
    );
  }

  return (
    <main className="blog-details-wrapper">
      <div className="detail-container">
      
        <div className="blog-header">
          {blog.image && (
            <Image
              src={blog.image}
              alt={blog.name || blog.title}
              width={300}
              height={200}
              className="detail-image"
              style={{ objectFit: 'cover', borderRadius: '10px' }}
            />
          )}
          <div className="text-content">
            <h1>{blog.name || blog.title}</h1>
            <p className="detail-description">{blog.description || blog.content}</p>
          </div>
        </div>

        {blog.facts && (
          <section className="section">
            <h2>🌟 Fascinating Facts</h2>
            <ul className="fact-list">
              {blog.facts.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
          </section>
        )}

        {blog.travelInfo && (
          <section className="section">
            <h2>🧳 Travel Information</h2>
            <p>{blog.travelInfo}</p>
          </section>
        )}
        <section className="section">
          <h2>📅 Book Your Tour</h2>
          <form className="booking-form" onSubmit={handleBooking}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              min="1"
              max="10"
              required
            />
            <button type="submit">Book Now</button>
          </form>
        </section>

        <a href="/" className="back-button">← Back to Blog Home</a>
      </div>

      <style jsx>{`
        .blog-details-wrapper {
          min-height: 100vh;
          background: #cccbfa;
          display: flex;
          justify-content: center;
          padding: 50px 20px;
        }

        .detail-container {
          background: #ffffff;
          padding: 40px;
          border-radius: 12px;
          max-width: 850px;
          width: 100%;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .blog-header {
          display: flex;
          align-items: flex-start;
          gap: 24px;
        }

        .detail-image {
          border-radius: 10px;
          object-fit: cover;
          flex-shrink: 0;
        }

        .text-content {
          flex: 1;
        }

        .text-content h1 {
          font-size: 28px;
          margin-bottom: 12px;
          color: #2c3e50;
        }

        .detail-description {
          font-size: 16px;
          color: #555;
          line-height: 1.6;
        }

        .section {
          margin-top: 30px;
        }

        .fact-list {
          margin-top: 10px;
          padding-left: 20px;
          color: #555;
        }

        .fact-list li {
          margin-bottom: 10px;
        }

        .booking-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 15px;
        }

        .booking-form input {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 16px;
        }

        .booking-form button {
          padding: 12px;
          background-color: #3498db;
          color: white;
          border: none;
          font-size: 16px;
          font-weight: bold;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .booking-form button:hover {
          background-color: #2980b9;
        }

        .back-button {
          margin-top: 30px;
          display: inline-block;
          text-decoration: none;
          color: #2c3e50;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .blog-header {
            flex-direction: column;
            align-items: center;
          }

          .text-content h1 {
            text-align: center;
          }

          .detail-image {
            width: 100%;
            height: auto;
          }
        }
      `}</style>
    </main>
  );
}
