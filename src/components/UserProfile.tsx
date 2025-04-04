
import React, { useState, useEffect } from 'react';
import { Calendar, Award, Target, BarChart3, Share2, Edit } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ProfileEditor from './ProfileEditor';
import { toast } from '@/hooks/use-toast';

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
  const [isEditing, setIsEditing] = useState(false);
  const [stats, setStats] = useState([
    { title: 'Videolar', value: '0', icon: <BarChart3 size={20} className="text-primary" /> },
    { title: 'Puan', value: '0', icon: <Award size={20} className="text-primary" /> },
    { title: 'Günler', value: '0', icon: <Calendar size={20} className="text-primary" /> },
  ]);
  const [dailyVideosWatched, setDailyVideosWatched] = useState(0);
  const [dailyGoalReached, setDailyGoalReached] = useState(false);
  
  // Load profile data from localStorage or use defaults
  const [username, setUsername] = useState(() => {
    return localStorage.getItem('profile_username') || 'Kullanıcı Adı';
  });
  
  const [profileImage, setProfileImage] = useState<string | null>(() => {
    return localStorage.getItem('profile_image');
  });
  
  const subjects = [
    { subject: 'Tarih', progress: 65, color: '#1A1B41' },
    { subject: 'Coğrafya', progress: 40, color: '#3E1F47' },
    { subject: 'Felsefe', progress: 25, color: '#6A3FB2' },
    { subject: 'Matematik', progress: 70, color: '#00B8D4' },
    { subject: 'Fizik', progress: 50, color: '#3E1F47' },
  ];

  // Load daily goal progress from localStorage
  useEffect(() => {
    const today = new Date().toLocaleDateString();
    const dailyProgress = localStorage.getItem(`dailyProgress_${today}`);
    if (dailyProgress) {
      const { videosWatched, goalReached } = JSON.parse(dailyProgress);
      setDailyVideosWatched(videosWatched);
      setDailyGoalReached(goalReached);
    } else {
      // Reset daily progress for a new day
      setDailyVideosWatched(0);
      setDailyGoalReached(false);
      localStorage.setItem(`dailyProgress_${today}`, JSON.stringify({
        videosWatched: 0,
        goalReached: false
      }));
    }
  }, []);

  // Load user stats from localStorage
  useEffect(() => {
    // Get watched videos count
    const recentlyViewedFromStorage = localStorage.getItem('recentlyViewedVideos');
    const watchedVideos = recentlyViewedFromStorage ? JSON.parse(recentlyViewedFromStorage).length : 0;
    
    // Get achievements/points count
    const achievementsFromStorage = localStorage.getItem('achievements');
    const achievements = achievementsFromStorage ? JSON.parse(achievementsFromStorage).count : 0;
    
    // Get active days (for now, we'll just set it to a fixed value)
    const activeDays = 14;
    
    // Update stats
    setStats([
      { title: 'Videolar', value: watchedVideos.toString(), icon: <BarChart3 size={20} className="text-primary" /> },
      { title: 'Puan', value: achievements.toString(), icon: <Award size={20} className="text-primary" /> },
      { title: 'Günler', value: activeDays.toString(), icon: <Calendar size={20} className="text-primary" /> },
    ]);
  }, []);

  // Listen for updates to watched videos and achievements
  useEffect(() => {
    const handleQuestionsCompleted = () => {
      // Update achievements count
      const achievementsFromStorage = localStorage.getItem('achievements');
      const achievements = achievementsFromStorage ? JSON.parse(achievementsFromStorage).count : 0;
      
      setStats(prev => {
        const newStats = [...prev];
        const achievementStat = newStats.find(s => s.title === 'Puan');
        if (achievementStat) {
          achievementStat.value = achievements.toString();
        }
        return newStats;
      });
    };
    
    const handleVideoWatched = () => {
      // Update watched videos count
      const recentlyViewedFromStorage = localStorage.getItem('recentlyViewedVideos');
      const watchedVideos = recentlyViewedFromStorage ? JSON.parse(recentlyViewedFromStorage).length : 0;
      
      // Update videos stat
      setStats(prev => {
        const newStats = [...prev];
        const videoStat = newStats.find(s => s.title === 'Videolar');
        if (videoStat) {
          videoStat.value = watchedVideos.toString();
        }
        return newStats;
      });
      
      // Update daily progress
      const today = new Date().toLocaleDateString();
      const dailyProgressStr = localStorage.getItem(`dailyProgress_${today}`);
      const dailyProgress = dailyProgressStr ? JSON.parse(dailyProgressStr) : { videosWatched: 0, goalReached: false };
      
      if (!dailyProgress.goalReached) {
        const newVideosWatched = dailyProgress.videosWatched + 1;
        setDailyVideosWatched(newVideosWatched);
        
        // Check if goal is reached
        if (newVideosWatched >= 5 && !dailyProgress.goalReached) {
          // Add 3 points for completing daily goal
          const achievementsFromStorage = localStorage.getItem('achievements');
          const achievements = achievementsFromStorage ? JSON.parse(achievementsFromStorage) : { count: 0 };
          achievements.count += 3;
          localStorage.setItem('achievements', JSON.stringify(achievements));
          
          // Mark goal as reached
          setDailyGoalReached(true);
          
          // Update point stat
          setStats(prev => {
            const newStats = [...prev];
            const pointStat = newStats.find(s => s.title === 'Puan');
            if (pointStat) {
              pointStat.value = achievements.count.toString();
            }
            return newStats;
          });
          
          // Show a toast notification
          toast({
            title: "Günlük Hedef Tamamlandı!",
            description: "5 video izlediniz ve 3 puan kazandınız.",
            variant: "default",
          });
        }
        
        // Save updated progress
        localStorage.setItem(`dailyProgress_${today}`, JSON.stringify({
          videosWatched: newVideosWatched,
          goalReached: newVideosWatched >= 5
        }));
      }
    };
    
    const handleRecentlyViewedUpdate = (e: StorageEvent) => {
      if (e.key === 'recentlyViewedVideos') {
        // When recentlyViewedVideos changes, update daily video count
        handleVideoWatched();
      }
    };
    
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'achievements') {
        handleQuestionsCompleted();
      } else if (e.key === 'recentlyViewedVideos') {
        handleVideoWatched();
      }
    };
    
    window.addEventListener('questionsCompleted', handleQuestionsCompleted);
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('videoWatched', handleVideoWatched);
    window.addEventListener('recentlyViewedUpdated', handleVideoWatched);
    
    return () => {
      window.removeEventListener('questionsCompleted', handleQuestionsCompleted);
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('videoWatched', handleVideoWatched);
      window.removeEventListener('recentlyViewedUpdated', handleVideoWatched);
    };
  }, []);

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
    
    // Save to localStorage for persistence
    localStorage.setItem('profile_username', newUsername);
    if (newImageUrl) {
      localStorage.setItem('profile_image', newImageUrl);
    } else {
      localStorage.removeItem('profile_image');
    }
  };

  const initials = getInitials(username);

  const dailyGoalPercentage = (dailyVideosWatched / 5) * 100;

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
          <div 
            className={`h-2.5 rounded-full transition-all duration-500 ${dailyGoalReached ? 'bg-green-500' : 'bg-primary'}`} 
            style={{ width: `${Math.min(dailyGoalPercentage, 100)}%` }}
          ></div>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          Bugün {dailyVideosWatched}/5 video tamamlandı
          {dailyGoalReached && ' (Hedefe ulaşıldı!)'}
        </p>
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
