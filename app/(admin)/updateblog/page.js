"use client";
import { useState, useEffect } from 'react';
import travelBlogs from '../../lib/traveldata';

export default function UpdateBlog() {
  const [blogs, setBlogs] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('blogs')) {
      localStorage.setItem('blogs', JSON.stringify(travelBlogs));
    }
  }, []);
  useEffect(() => {
    const stored = localStorage.getItem('blogs');
    if (stored) {
      setBlogs(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    const blog = blogs.find((b) => b.id === selectedId);
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
      setImage(blog.image);
      setPreview(blog.image);
    }
  }, [selectedId, blogs]);
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
    setBlogs(updatedBlogs); 
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
  style={{
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    background: '#fff',
    padding: '12px',
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '14px',
    backgroundColor: '#ffffff',
    color: '#333',
    backgroundImage: 'url("data:image/svg+xml;utf8,<svg fill=\'#333\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/></svg>")',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: '100%',
    backgroundPositionY: '5px',
    zIndex: 1,
  }}
>
  <option value="">Select a blog to update</option>
  {blogs.map((blog) => (
    <option
      key={blog.id}
      value={blog.id}
      style={{ color: '#333', backgroundColor: '#ffffff', padding: '10px', zIndex: 1 }}
    >
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
              <button
                onClick={handleDelete}
                style={{ backgroundColor: '#e03131', color: 'white' }}
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>

     <style jsx>{`
  .update-blog-wrapper {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #e9ebf1ff, #d3caf8ff);
    padding: 2rem;
  }

  .container {
    background-color: #ffffff;
    padding: 40px 30px;
    border: 2px solid #0a0a0aff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
    text-align: center;
    border-radius: 16px;
    transition: transform 0.3s ease;
  }

  .container:hover {
    transform: scale(1.01);
  }
   
  h2 {
    margin-bottom: 24px;
    font-size: 24px;
    color: #333;
  }

  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url('data:image/svg+xml;utf8,<svg fill="%23333" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 5px;
    padding: 12px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 14px;
    background-color: #ffffff;
    color: #333;
    transition: border-color 0.2s ease;
    z-index: 1;
  }

  select:focus {
    outline: none;
    border-color: #101011ff;
    box-shadow: 0 0 0 2px rgba(94, 96, 206, 0.2);
  }

  option {
    color: #333;
    background-color: #ffffff;
    padding: 10px;
  }

  input[type="text"],
  textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 14px;
    transition: border-color 0.2s ease;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: #101011ff;
    box-shadow: 0 0 0 2px rgba(94, 96, 206, 0.2);
  }

  input[type="file"] {
    margin-bottom: 12px;
  }

  img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 16px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  }

  .button-row {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-top: 16px;
  }

  button {
    flex: 1;
    padding: 12px;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: #4c4c4eff;
    color: black;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }

  button:hover {
    background-color: #bebec0ff;
    transform: translateY(-1px);
  }

  button:last-child {
    background-color: #e03131;
  }

  button:last-child:hover {
    background-color: #c62828;
  }
`}</style>

    </main>
  );
}
