
import React, { useState } from 'react';
import { Calendar, Award, Target, BarChart3, Share2, Edit } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ProfileEditor from './ProfileEditor';

interface ProgressItemProps {
  subject: string;
  progress: number;
  color: string;
}

const ProgressItem = ({ subject, progress, color }: ProgressItemProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{subject}</span>
        <span className="text-sm text-muted-foreground">{progress}%</span>
      </div>
      <Progress value={progress} className="h-2" style={{ backgroundColor: '#e2e8f0' }}>
        <div 
          className="h-full rounded-full" 
          style={{ width: `${progress}%`, backgroundColor: color }} 
        />
      </Progress>
    </div>
  );
};

const UserProfile = () => {
  const [username, setUsername] = useState('Kullanıcı Adı');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  
  const subjects = [
    { subject: 'Tarih', progress: 65, color: '#1A1B41' },
    { subject: 'Coğrafya', progress: 40, color: '#3E1F47' },
    { subject: 'Felsefe', progress: 25, color: '#6A3FB2' },
    { subject: 'Matematik', progress: 70, color: '#00B8D4' },
    { subject: 'Fizik', progress: 50, color: '#3E1F47' },
  ];

  const stats = [
    { title: 'Videolar', value: '32', icon: <BarChart3 size={20} className="text-primary" /> },
    { title: 'Başarılar', value: '7', icon: <Award size={20} className="text-primary" /> },
    { title: 'Günler', value: '14', icon: <Calendar size={20} className="text-primary" /> },
  ];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const handleSaveProfile = (newUsername: string, newImageUrl: string | null) => {
    setUsername(newUsername);
    setProfileImage(newImageUrl);
    setIsEditing(false);
  };

  const initials = getInitials(username);

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Avatar className="w-20 h-20">
            {profileImage ? (
              <AvatarImage src={profileImage} alt={username} className="object-cover" />
            ) : (
              <AvatarFallback className="bg-gradient-to-r from-primary to-accent text-white text-2xl font-bold">
                {initials}
              </AvatarFallback>
            )}
          </Avatar>
          <div className="ml-4">
            <h2 className="text-xl font-bold">{username}</h2>
            <p className="text-muted-foreground">14 gündür öğreniyor</p>
          </div>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-1"
          onClick={() => setIsEditing(true)}
        >
          <Edit size={16} />
          <span className="hidden sm:inline">Düzenle</span>
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="card p-4 flex flex-col items-center">
            {stat.icon}
            <span className="text-xl font-bold mt-1">{stat.value}</span>
            <span className="text-xs text-muted-foreground">{stat.title}</span>
          </div>
        ))}
      </div>

      <div className="card p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold flex items-center">
            <Target size={18} className="mr-2" />
            Günlük Hedef
          </h3>
          <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">5 video</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2.5">
          <div className="bg-primary h-2.5 rounded-full" style={{ width: '60%' }}></div>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">Bugün 3/5 video tamamlandı</p>
      </div>

      <h3 className="font-semibold mb-4">Konu İlerlemesi</h3>
      <div className="card p-4">
        {subjects.map((subject, index) => (
          <ProgressItem 
            key={index}
            subject={subject.subject}
            progress={subject.progress}
            color={subject.color}
          />
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-sm">
          <Share2 size={16} />
          İlerlemeni Paylaş
        </button>
      </div>

      <ProfileEditor 
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        currentUsername={username}
        currentInitials={initials}
        currentImageUrl={profileImage || undefined}
        onSave={handleSaveProfile}
      />
    </div>
  );
};

export default UserProfile;
