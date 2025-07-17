"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function BlogUserPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('blogs') || '[]');
    setBlogs(stored);
  }, []);

  return (
    <main className="user-blog-wrapper">
      <div className="container">
        <h2>User Blogs</h2>
        {blogs.length === 0 ? (
          <p>No blogs available.</p>
        ) : (
          <div className="blog-list">
            {blogs.map((b) => (
              <div className="blog-card" key={b.id}>
                <Image
                  src={b.image || "/default.jpeg"}
                  alt={b.title}
                  width={300}
                  height={200}
                  className="blog-image"
                />
                <h3>{b.title}</h3>
              <p className="snippet">{b.content?.slice(0, 80) || 'No content available...'}</p>

                <Link href={`/blog1/${b.id}`} className="read-link">
                  CLICK FOR MORE
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .user-blog-wrapper {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #cccbfa;
          padding: 40px 20px;
        }

        .container {
          background-color: #dcdffc;
          padding: 40px 30px;
          border: 1px solid black;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          width: 100%;
          max-width: 1000px;
          text-align: center;
        }

        .blog-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
          margin-top: 20px;
        }

        .blog-card {
          background: #f0f0fa;
          border-radius: 12px;
          padding: 16px;
          width: 280px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: 0.3s ease;
        }

        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }

        .blog-image {
          border-radius: 10px;
          object-fit: cover;
        }

        h3 {
          margin: 10px 0;
          color: #333;
        }

        .snippet {
          color: #555;
          font-size: 14px;
          margin-bottom: 10px;
        }

        .read-link {
          display: inline-block;
          padding: 8px 16px;
          background-color: #af9eec;
          border-radius: 8px;
          color: #000;
          font-weight: bold;
          text-decoration: none;
          transition: 0.2s ease;
        }

        .read-link:hover {
          background-color: #efeff3;
          transform: scale(1.05);
        }
      `}</style>
    </main>
  );
}
