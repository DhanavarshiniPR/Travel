'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import travelBlogs from './lib/traveldata';

export default function TravelBlogPage() {
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
            {isLoggedIn ? (
              <>
                <Link href="/dashboard" className="nav-link">Dashboard</Link>
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

        <section className="cta-section">
          <div className="cta-container">
            <div className="cta-content">
              <h2 className="cta-title">Ready for your next adventure?</h2>
              <p className="cta-text">
                Join our community of travel enthusiasts and get exclusive content
              </p>
              <div className="cta-actions">
                {!isLoggedIn ? (
                  <button 
                    onClick={handleLogin} 
                    className="btn btn-primary btn-large"
                  >
                    Login to Subscribe
                  </button>
                ) : (
                  <button className="btn btn-secondary btn-large">
                    Subscribe to Newsletter
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

     
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">🌍</span>
              <span className="logo-text">Travel Guides</span>
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
 
  :root {
    --primary-color: #3a86ff;
    --secondary-color: #8338ec;
    --accent-color: #ff006e;
    --dark-color: #1a1a2e;
    --light-color: #f8f9fa;
    --gray-color: #6c757d;
    --border-radius: 8px;
    --box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: #d89595ff;
    color: #333;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
  }

  .loading-spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top: 4px solid var(--primary-color);
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
    transition: background 0.3s ease-in-out;
    color:black;
  }

  .header-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .site-logo {
    font-size: 1.6rem;
    font-weight: 700;
    color: black;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    transition: color 0.3s ease;
  }

  .site-logo:hover {
    color: blue;
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 1.8rem;
  }

  .nav-link {
    position: relative;
    font-weight: 500;
    font-size: 0.95rem;
    color: var(--dark-color);
    transition: color 0.3s ease;
  }

  .nav-link:hover {
    color: var(--primary-color);
  }

  .nav-link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0%;
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease-in-out;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .btn {
    padding: 0.45rem 1.2rem;
    font-size: 0.88rem;
    font-weight: 600;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    transition: var(--transition);
  }

  .btn-primary {
    background-color: var(--primary-color);
    color: white;
    box-shadow: 0 4px 12px rgba(58, 134, 255, 0.3);
  }

  .btn-primary:hover {
    background-color: #2a75e6;
    transform: translateY(-1px);
  }

  .btn-outline {
    background-color: transparent;
    color: var(--primary-color);
    border: 1.5px solid var(--primary-color);
    box-shadow: 0 4px 8px rgba(58, 134, 255, 0.1);
  }

  .btn-outline:hover {
    background-color: rgba(58, 134, 255, 0.1);
  }

  .btn-large {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  /* =======================
     Hero Section
  ======================= */
  .hero-section {
    position: relative;
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    overflow: hidden;
  }

  .hero-image-container {
    position: absolute;
    inset: 0;
    z-index: -1;
  }

  .hero-image {
    object-fit: cover;
    filter: blur(2px);
    transform: scale(1.02);
    width: 100%;
    height: 100%;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
  }

  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    padding: 2rem;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  /* =======================
     Card Grid
  ======================= */
  .section {
    padding: 3rem 2rem;
    background-color: #fdfdfd;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }

  .card-wrapper {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card-wrapper:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }

  .card {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
    text-decoration: none;
    height: 100%;
  }

  .card-image-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 4/3;
    overflow: hidden;
  }

  .card-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: transform 0.4s ease;
  }

  .card:hover .card-image {
    transform: scale(1.05);
  }

  .card-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: var(--accent-color);
    color: #fff;
    padding: 0.3rem 0.8rem;
    font-size: 0.75rem;
    font-weight: bold;
    border-radius: 12px;
    z-index: 1;
  }

  .card-content {
    padding: 1rem 1rem 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
  }

  .card-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--dark-color);
  }

  .card-excerpt {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 1rem;
    line-height: 1.4;
  }

  .card-meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: var(--gray-color);
  }

  /* =======================
     CTA Section
  ======================= */
  .cta-section {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    padding: 4rem 2rem;
    color: white;
    text-align: center;
  }

  .cta-container {
    max-width: 800px;
    margin: 0 auto;
  }

  .cta-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .cta-actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .btn-primary {
    background-color: white;
    color: var(--primary-color);
    border: 2px solid white;
  }

  .btn-primary:hover {
    background-color: transparent;
    color: white;
  }

  .btn-secondary {
    background-color: transparent;
    color: white;
    border: 2px solid white;
  }

  .btn-secondary:hover {
    background-color: white;
    color: var(--primary-color);
  }

  /* =======================
     Footer
  ======================= */
  .footer {
    background-color: #2d3748;
    color: #ffffff;
    margin-top: 4rem;
    width: 100%;
  }

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 2rem 2rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
  }

  .footer-brand {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .footer-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
  }

  .footer-description {
    color: #a0aec0;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .footer-links-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .link-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .link-title {
    font-size: 1rem;
    font-weight: 600;
    color: white;
  }

  .link-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .footer-link {
    color: #a0aec0;
    font-size: 0.9rem;
    transition: color 0.2s ease;
  }

  .footer-link:hover {
    color: #ffffff;
    text-decoration: underline;
  }

  .footer-bottom {
    background-color: #1a202c;
    padding: 1.5rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .footer-bottom-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .copyright {
    color: #a0aec0;
    font-size: 0.85rem;
  }

  .footer-legal {
    display: flex;
    gap: 1.5rem;
  }

  .legal-link {
    color: #a0aec0;
    font-size: 0.85rem;
    transition: color 0.2s ease;
  }

  .legal-link:hover {
    color: #ffffff;
    text-decoration: underline;
  }

  /* =======================
     Responsive Design
  ======================= */
  @media (max-width: 768px) {
    .nav {
      gap: 1rem;
    }

    .btn {
      font-size: 0.8rem;
      padding: 0.4rem 1rem;
    }

    .nav-link {
      font-size: 0.85rem;
    }

    .hero-section {
      min-height: 400px;
    }

    .hero-content {
      padding: 1.5rem;
    }

    .cta-actions {
      flex-direction: column;
    }

    .footer-container {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .footer-links-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .footer-links-grid {
      grid-template-columns: 1fr;
    }

    .footer-bottom-container {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }

    .footer-legal {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`}</style>

    </div>
  );
}

