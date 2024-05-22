// src/components/PhotoUpload.js
import React, { useState } from 'react';
import axios from '../axiosConfig';

function PhotoUpload() {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('description', description);
    formData.append('keywords', keywords);

    try {
      const response = await axios.post('/photos/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('Upload successful');
    } catch (error) {
      setMessage('Upload failed: ' + error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Upload Photo</h2>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleFileChange} />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Keywords"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default PhotoUpload;
