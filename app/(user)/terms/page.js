"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TermsAndConditions() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      router.push('/login1');
    }
  }, [router]);

  return (
    <div className="terms-wrapper">
      <div className="terms-container">
        <h2>Terms and Conditions</h2>
        <p>Welcome to our blog platform. By accessing or using our services, you agree to be bound by these terms and conditions.</p>
        <ul>
          <li>You must be logged in to access certain features.</li>
          <li>All content is for informational purposes only.</li>
          <li>We reserve the right to modify these terms at any time.</li>
        </ul>
      </div>

      <style jsx>{`
        .terms-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: #f0f4f8;
          padding: 20px;
        }

        .terms-container {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          width: 100%;
          text-align: left;
        }

        h2 {
          margin-bottom: 20px;
          font-size: 24px;
          color: #2d3748;
        }

        p {
          font-size: 16px;
          color: #4a5568;
          margin-bottom: 20px;
        }

        ul {
          list-style-type: disc;
          padding-left: 20px;
        }

        li {
          margin-bottom: 10px;
          color: #4a5568;
        }
      `}</style>
    </div>
  );
}
