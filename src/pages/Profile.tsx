
import React from 'react';
import NavBar from '@/components/NavBar';
import UserProfile from '@/components/UserProfile';

const Profile = () => {
  return (
    <div className="pb-16">
      <UserProfile />
      <NavBar />
    </div>
  );
};

export default Profile;
