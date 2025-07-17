"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function UserProfile() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      router.push('/login1');
    }
    const storedProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
    setProfile(storedProfile);
  }, [router]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem('userProfile', JSON.stringify(profile));
    setIsEditing(false);
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <h2>User Profile</h2>
        {isEditing ? (
          <div className="edit-form">
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Name"
              className="input-field"
            />
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              placeholder="Email"
              className="input-field"
            />
            <button onClick={handleSave} className="save-button">Save</button>
          </div>
        ) : (
          <div className="profile-info">
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <button onClick={() => setIsEditing(true)} className="edit-button">Edit Profile</button>
          </div>
        )}
      </div>

      <style jsx>{`
        .profile-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: #f0f4f8;
          padding: 20px;
        }

        .profile-container {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          width: 100%;
          text-align: center;
        }

        h2 {
          margin-bottom: 20px;
          font-size: 24px;
          color: #2d3748;
        }

        .input-field {
          width: 100%;
          padding: 10px;
          margin-top: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 14px;
        }

        .edit-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .profile-info p {
          font-size: 16px;
          color: #4a5568;
          margin: 10px 0;
        }

        .edit-button, .save-button {
          background-color: #3182ce;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .edit-button:hover, .save-button:hover {
          background-color: #2b6cb0;
        }
      `}</style>
    </div>
  );
}
