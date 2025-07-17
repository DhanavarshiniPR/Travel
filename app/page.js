"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import travelBlogs from './lib/traveldata';

const TravelBlogPage=()=> {
  const [adminBlogs, setAdminBlogs] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) setAdminBlogs(JSON.parse(storedBlogs));
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
    setIsLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    router.push('/');
  };

  const handleLogin = () => {
    router.push('/loginn');
  };

  const handleBlogClick = (e, blog) => {
    if (!isLoggedIn) {
      e.preventDefault();
      router.push('/loginn');
    }
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <header className="header">
        <div className="header-container">
          <Link href="/" className="site-logo">
            <span className="logo-icon">~</span>
            <span className="logo-text">Travel Guides</span>
          </Link>
          <nav className="nav">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
            <Link href="/terms" className="nav-link">Terms and Conditions</Link>
            {isLoggedIn ? (
              <>
                {localStorage.getItem('role') === 'admin' && (
                  <Link href="/dashboard" className="nav-link">Dashboard</Link>
                )}
                <button onClick={handleLogout} className="btn btn-outline">
                  Logout
                </button>
              </>
            ) : (
              <button onClick={handleLogin} className="btn btn-primary">
                Login
              </button>
            )}
          </nav>
        </div>
      </header>

      <main className="main">
     <div className="hero-section">
          <div className="hero-image-container">
            <Image
              src="/top-travel-destinations.jpg"
              alt="Travel destinations"
              fill
              className="hero-image"
              quality={80}
              priority
            />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">Discover the World Through Our Stories</h1>
            <p className="hero-subtitle">
              Expert travel guides, tips, and inspiration for your next adventure
            </p>
            {isLoggedIn && (
              <Link href="/loginn" className="btn btn-primary btn-large">
                Create New Post
              </Link>
            )}
          </div>
        </div>

        <section className="section">
          <div className="section-header">
            <h2 className="section-title">Popular Travel Guides</h2>
            <p className="section-description">
              Explore our collection of handpicked travel experiences
            </p>
          </div>
          <div className="card-grid">
            {[...travelBlogs, ...adminBlogs].map((blog, index) => (
              <div key={blog.id || index} className="card-wrapper">
                <Link
                  href={`/${blog.id ? 'blog1' : ''}/${blog.id || blog.title?.toLowerCase().replace(/\s+/g, '-')}`}
                  className="card"
                  onClick={(e) => handleBlogClick(e, blog)}
                >
                  <div className="card-image-wrapper">
                    <Image
                      src={blog.image || '/default.jpg'}
                      alt={blog.name || blog.title}
                      fill
                      className="card-image"
                      priority={index < 3}
                    />
                    <div className="card-badge">
                      {blog.category || 'Adventure'}
                    </div>
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{blog.name || blog.title}</h3>
                    <p className="card-excerpt">
                      {blog.excerpt || 'Discover this amazing destination...'}
                    </p>
                    <div className="card-meta">
                      <span className="meta-date">
                        {blog.date || 'Recently updated'}
                      </span>
                      <span className="meta-readtime">
                        {blog.readTime || '5 min read'}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

      
      </main>
     
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">~~</span>
              <span className="logo-text">Travel Guides</span>
              <span className="logo-icon">~~</span>
            </div>
            <p className="footer-description">
              Your trusted source for travel inspiration and expert guides
            </p>
          </div>
          
          <div className="footer-links-grid">
            <div className="link-group">
              <h4 className="link-title">Explore</h4>
              <ul className="link-list">
                <li><Link href="/destinations" className="footer-link">Destinations</Link></li>
                <li><Link href="/guides" className="footer-link">Travel Guides</Link></li>
                <li><Link href="/tips" className="footer-link">Travel Tips</Link></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h4 className="link-title">Company</h4>
              <ul className="link-list">
                <li><Link href="/about" className="footer-link">About Us</Link></li>
                <li><Link href="/contact" className="footer-link">Contact</Link></li>
                <li><Link href="/privacy" className="footer-link">Privacy Policy</Link></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h4 className="link-title">Connect</h4>
              <ul className="link-list">
                <li><Link href="#" className="footer-link">Instagram</Link></li>
                <li><Link href="#" className="footer-link">Twitter</Link></li>
                <li><Link href="#" className="footer-link">Facebook</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-container">
            <p className="copyright">
              &copy; {new Date().getFullYear()} Travel Guides. All rights reserved.
            </p>
            <div className="footer-legal">
              <Link href="/terms" className="legal-link">Terms of Service</Link>
              <Link href="/privacy" className="legal-link">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
      
   <style jsx>{`
  .header {
    background-color: #ffffff;
    padding: 1rem 0;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .site-logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #007bff;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .nav {
    display: flex;
    gap: 1.5rem;
  }

  .nav-link {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    position: relative;
    transition: color 0.3s ease;
  }

  .nav-link:hover {
    color: #007bff;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background-color: #007bff;
    transition: width 0.3s ease;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .btn-outline {
    background-color: transparent;
    color: #007bff;
    border: 1px solid #007bff;
  }

  .btn-outline:hover {
    background-color: #007bff;
    color: white;
  }

  .page-container {
    font-family: 'Arial', sans-serif;
    color: #333;
    line-height: 1.6;
  }

  .hero-section {
    position: relative;
    height: 500px;
    background-color: #e9ecef;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: brightness(0.7);
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  .hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: white;
  }

  .hero-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }

  .section {
    padding: 4rem 2rem;
    background-color: #f8f9fa;
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .section-description {
    font-size: 1rem;
    color: #666;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .card-wrapper {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
  }

  .card-wrapper:hover {
    transform: translateY(-5px);
  }

  .card {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  .card-image-wrapper {
    position: relative;
    height: 200px;
  }

  .card-title {
    font-size: 1.25rem;
    margin: 1rem;
  }

  .card-excerpt {
    font-size: 0.9rem;
    margin: 0 1rem 1rem;
    color: #555;
  }

  .footer {
    background-color: #343a40;
    color: #ffffff;
    padding: 2rem 0;
  }

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-links {
    display: flex;
    gap: 1.5rem;
  }

  .footer-link {
    color: #ffffff;
    text-decoration: none;
    font-size: 0.9rem;
  }

  .footer-link:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .header-container {
      flex-direction: column;
      gap: 1rem;
    }

    .hero-title {
      font-size: 2rem;
    }

    .hero-subtitle {
      font-size: 1rem;
    }

    .section-header {
      margin-bottom: 2rem;
    }
  }
`}</style>
    </div>
  
  );
  
}

export default TravelBlogPage;
