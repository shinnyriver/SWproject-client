// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';

function Profile() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/profile');
        console.log('Profile response:', response);
        if (response && response.data) {
          setProfile(response.data);
        } else {
          setError('Failed to load profile data');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        const errorMessage = error.response ? error.response.data.msg : 'Failed to load profile data';
        setError(errorMessage);
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {profile.username}</p>
      <p>Email: {profile.email}</p>
      {/* 다른 프로필 정보 표시 */}
    </div>
  );
}

export default Profile;
