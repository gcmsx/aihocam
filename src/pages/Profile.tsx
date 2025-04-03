
import React from 'react';
import NavBar from '@/components/NavBar';
import UserProfile from '@/components/UserProfile';

const Profile = () => {
  // Update the beta version when making changes to this page
  React.useEffect(() => {
    const currentVersion = localStorage.getItem('appVersion') || 'GEN-1 final v.0341';
    localStorage.setItem('appVersion', currentVersion);
    
    // Dispatch an event to notify index page to update version
    window.dispatchEvent(new CustomEvent('versionUpdated', {
      detail: { version: currentVersion }
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
