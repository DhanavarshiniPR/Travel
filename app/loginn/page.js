'use client';
import { useRouter } from 'next/navigation';
import '../globals.css';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (role) => {
    if (role === 'admin') router.push('/login');
    else router.push('/login1');
  };

  return (
    <div className="full-screen-center">
      <div className="container">
        <h1>Welcome to the Blog Portal</h1>
        <h5>-- Please select your role to continue --</h5>

        <div className="button-row">
          <button onClick={() => handleLogin('user')} className="login-btn user">
            Continue as User
          </button>
          <button onClick={() => handleLogin('admin')} className="login-btn admin">
            Continue as Admin
          </button>
        </div>
      </div>

      <style jsx>{`
        .full-screen-center {
          height: 100vh;
          background: linear-gradient(to right, #cccbfa, #e0eafc);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .container {
          background-color: #ffffff;
          padding: 40px 60px;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 500px;
          width: 100%;
        }

        h1 {
          font-size: 28px;
          color: #2c3e50;
          margin-bottom: 15px;
        }

        h5 {
          font-size: 16px;
          color: #666;
          margin-bottom: 30px;
        }

        .button-row {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .login-btn {
          padding: 12px 24px;
          font-size: 16px;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 160px;
        }

        .login-btn.user {
          background-color: #3498db;
          color: white;
        }

        .login-btn.user:hover {
          background-color: #2980b9;
        }

        .login-btn.admin {
          background-color: #e67e22;
          color: white;
        }

        .login-btn.admin:hover {
          background-color: #ca6b1b;
        }

        @media (max-width: 480px) {
          .container {
            padding: 30px 20px;
          }

          .login-btn {
            min-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
