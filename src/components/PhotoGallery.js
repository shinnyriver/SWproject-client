import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import DirectMessageButton from './DirectMessageButton';

function PhotoGallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('/photos');
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div>
      <h2>Photo Gallery</h2>
      <div>
        {photos.map((photo) => (
          <div key={photo.id}>
            <img src={`http://localhost:5000/${photo.image_path}`} alt={photo.description} />
            <p>{photo.description}</p>
            <p>{photo.keywords}</p>
            <DirectMessageButton recipientId={photo.user_id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;
