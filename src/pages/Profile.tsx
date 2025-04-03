
import React from 'react';
import NavBar from '@/components/NavBar';
import UserProfile from '@/components/UserProfile';

const Profile = () => {
  // Update the beta version when making changes to this page
  React.useEffect(() => {
    const currentVersion = localStorage.getItem('appVersion') || '0.318';
    const newVersion = (parseFloat(currentVersion) + 0.001).toFixed(3);
    localStorage.setItem('appVersion', newVersion);
    
    // Dispatch an event to notify index page to update version
    window.dispatchEvent(new CustomEvent('versionUpdated', {
      detail: { version: newVersion }
    }));
  }, []);
  
  return (
    <div className="pb-16">
      <UserProfile />
      <NavBar />
    </div>
  );
};

export default Profile;
