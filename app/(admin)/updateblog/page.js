'use client';
import { useState, useEffect } from 'react';

export default function UpdateBlog() {
  const [blogs, setBlogs] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    setBlogs(storedBlogs);
  }, []);

  useEffect(() => {
    const blog = blogs.find((b) => b.id === selectedId);
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
      setImage(blog.image);
      setPreview(blog.image);
    }
  }, [selectedId]);

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

  const handleUpdate = () => {
    const updatedBlogs = blogs.map((b) =>
      b.id === selectedId ? { ...b, title, content, image } : b
    );
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    alert('Blog updated successfully!');
  };

  const handleDelete = () => {
    const filteredBlogs = blogs.filter((b) => b.id !== selectedId);
    localStorage.setItem('blogs', JSON.stringify(filteredBlogs));
    setBlogs(filteredBlogs);
    setSelectedId('');
    setTitle('');
    setContent('');
    setImage('');
    setPreview('');
    alert('Blog deleted!');
  };

  return (
    <main className="update-blog-wrapper">
      <div className="container">
        <h2>Update Blog</h2>

        <select
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '16px' }}
        >
          <option value="">Select a blog to update</option>
          {blogs.map((blog) => (
            <option key={blog.id} value={blog.id}>
              {blog.title}
            </option>
          ))}
        </select>

        {selectedId && (
          <>
            <input
              type="text"
              value={title}
              placeholder="Blog Title"
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '12px' }}
            />

            <textarea
              rows="5"
              value={content}
              placeholder="Blog Content"
              onChange={(e) => setContent(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '12px' }}
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ marginBottom: '12px' }}
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                style={{ width: '100%', borderRadius: '10px', marginBottom: '16px' }}
              />
            )}

            <div className="button-row">
              <button onClick={handleUpdate}>Update</button>
              <button onClick={handleDelete} style={{ backgroundColor: '#e03131', color: 'white' }}>
                Delete
              </button>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        .update-blog-wrapper {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #cccbfa;
        }

        .container {
          background-color: #dcdffc;
          padding: 40px 30px;
          border: 1px solid black;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
          width: 90%;
          max-width: 500px;
          text-align: center;
          border-radius: 12px;
        }

        h2 {
          margin-bottom: 16px;
        }

        .button-row {
          display: flex;
          justify-content: space-between;
          gap: 10px;
        }

        button {
          flex: 1;
          padding: 12px;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          background-color: #b2b2e6;
        }

        button:hover {
          background-color: #8888c2;
        }
      `}</style>
    </main>
  );
}
