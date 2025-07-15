'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import travelBlogs from '../../lib/traveldata';

export default function TravelBlogs() {
  const [adminBlogs, setAdminBlogs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem('blogs');
    if (stored) {
      setAdminBlogs(JSON.parse(stored));
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    router.push('/');
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="nav-title">Travel Tales</h1>
          <div className="nav-links">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </div>
        </div>
      </nav>

      <main className="home-container">
        <h2 className="home-heading">Explore Breathtaking Destinations</h2>

        <div className="blog-grid">
          {[...travelBlogs, ...adminBlogs].map((blog, index) => (
            <Link
              key={index}
              href={`/${blog.id ? 'blog1' : ''}/${blog.id || blog.title?.toLowerCase().replace(/\s+/g, '-')}`}
              className="blog-card"
            >
              <Image
                src={blog.image || '/default.jpg'}
                alt={blog.name || blog.title}
                width={300}
                height={200}
                className="blog-image"
              />
              <h3>{blog.name || blog.title}</h3>
            </Link>
          ))}
        </div>
      </main>

      <style jsx>{`
  .navbar {
    background: linear-gradient(to right, #a5b4fc, #c7d2fe);
    padding: 16px 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  }

  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .nav-title {
    font-size: 28px;
    font-weight: 800;
    color: #1f2937;
  }

  .nav-links {
    display: flex;
    gap: 24px;
  }

  .nav-link {
    font-weight: 600;
    color: #1f2937;
    text-decoration: none;
    padding: 8px 14px;
    border-radius: 6px;
    transition: background 0.2s, color 0.2s;
  }

  .nav-link:hover {
    background: #4f46e5;
    color: #fff;
  }

  .logout-button {
    background-color: #ef4444;
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

  .home-container {
    max-width: 1200px;
    margin: 50px auto;
    padding: 0 20px;
  }

  .home-heading {
    text-align: center;
    font-size: 34px;
    font-weight: 700;
    color: #1e40af;
    margin-bottom: 40px;
  }

  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 28px;
  }

  .blog-card {
    display: flex;
    flex-direction: column;
    background-color: #f9fafb;
    border-radius: 16px;
    overflow: hidden;
    text-decoration: none;
    color: #111827;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .blog-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }

  .blog-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .blog-card h3 {
    padding: 18px;
    font-size: 20px;
    font-weight: 600;
    color: #111827;
    text-align: center;
  }

  @media (max-width: 768px) {
    .navbar-container {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }

    .nav-links {
      flex-direction: column;
      width: 100%;
    }

    .nav-link, .logout-button {
      width: 100%;
      text-align: left;
    }

    .home-heading {
      font-size: 28px;
    }

    .blog-card h3 {
      font-size: 18px;
    }
      }
`}</style>
</>

  );
}
