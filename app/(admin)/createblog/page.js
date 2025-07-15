'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [success, setSuccess] = useState('');
  const [role, setRole] = useState('');
  const router = useRouter();

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/loginn');
    }
    setRole(storedRole);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleCreate = (e) => {
    e.preventDefault();

    const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const newBlog = {
      id: Date.now().toString(),
      title,
      content,
      image,
      category: 'Adventure',
      excerpt: content.substring(0, 100) + '...',
      date: new Date().toLocaleDateString(),
      readTime: '5 min read',
    };
    blogs.push(newBlog);
    localStorage.setItem('blogs', JSON.stringify(blogs));

    setSuccess('✅ Blog created successfully!');
    setTitle('');
    setContent('');
    setImage(null);
    setPreview(null);

    setTimeout(() => {
      router.push(role === 'admin' ? '/blog' : '/blog1');
    }, 1500);
  };

  return (
    <main className="create-blog-wrapper">
      <div className="container">
        <h2>Create New Blog</h2>
        <form onSubmit={handleCreate}>
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            placeholder="Blog Content"
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          <input type="file" accept="image/*" onChange={handleImageChange} />
          {preview && (
            <img src={preview} alt="Preview" className="preview-image" />
          )}

          <button type="submit">Create</button>
        </form>
        {success && <p className="success-message">{success}</p>}
      </div>

      <style jsx>{`
        .create-blog-wrapper {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(to right, #cccbfa, #dcdffc);
        }

        .container {
          background-color: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
          width: 90%;
          max-width: 600px;
          text-align: center;
        }

        h2 {
          margin-bottom: 24px;
          font-size: 1.6rem;
          color: #2d2d70;
        }

        input[type='text'],
        input[type='file'],
        textarea {
          width: 100%;
          padding: 12px 14px;
          margin-bottom: 16px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 1rem;
        }

        textarea {
          resize: vertical;
        }

        .preview-image {
          margin-top: 12px;
          width: 100%;
          max-height: 250px;
          border-radius: 10px;
          object-fit: cover;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        button {
          padding: 12px 24px;
          font-size: 1rem;
          background-color: #4b56d2;
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.3s ease;
        }

        button:hover {
          background-color: #343cc8;
        }

        .success-message {
          margin-top: 16px;
          color: green;
          font-weight: 600;
        }
      `}</style>
    </main>
  );
}
