// src/pages/Photos.js
import React from 'react';
import PhotoUpload from '../components/PhotoUpload';
import PhotoGallery from '../components/PhotoGallery';
import PhotoSearch from '../components/PhotoSearch';

function Photos() {
  return (
    <div>
      <PhotoUpload />
      <PhotoGallery />
      <PhotoSearch />
    </div>
  );
}

export default Photos;
