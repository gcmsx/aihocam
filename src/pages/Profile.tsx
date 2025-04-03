
import React from 'react';
import NavBar from '@/components/NavBar';
import UserProfile from '@/components/UserProfile';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

const Profile = () => {
  return (
    <div className="pb-16">
      <div className="p-4 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Profilim</h1>
          <ThemeToggle />
        </div>
        
        <UserProfile 
          name="Öğrenci Adı"
          email="ogrenci@example.com"
          avatarUrl="https://i.pravatar.cc/150?img=32"
        />
        
        <Button className="w-full" variant="outline">Profil Düzenle</Button>
        
        <div className="space-y-2">
          <h2 className="text-lg font-medium">Ayarlar</h2>
          <div className="rounded-lg border divide-y">
            <div className="flex justify-between items-center p-4">
              <span>Bildirimler</span>
              <Button variant="ghost" size="sm">Düzenle</Button>
            </div>
            <div className="flex justify-between items-center p-4">
              <span>Gizlilik</span>
              <Button variant="ghost" size="sm">Düzenle</Button>
            </div>
            <div className="flex justify-between items-center p-4">
              <span>Hesap</span>
              <Button variant="ghost" size="sm">Düzenle</Button>
            </div>
          </div>
        </div>
        
        <Button className="w-full" variant="outline">Çıkış Yap</Button>
      </div>
      <NavBar />
    </div>
  );
};

export default Profile;
