import React, { useState } from 'react';
import axios from '../axiosConfig';

function PhotoSearch() {
  const [keyword, setKeyword] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('/photos/search', {
        params: { keyword },
      });
      setPhotos(response.data);
    } catch (error) {
      console.error('Error searching photos:', error);
    }
  };

  return (
    <div>
      <h2>Search Photos</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {photos.map((photo) => (
          <div key={photo.id}>
            <img src={`http://localhost:5000/${photo.image_path}`} alt={photo.description} />
            <p>{photo.description}</p>
            <p>{photo.keywords}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoSearch;
