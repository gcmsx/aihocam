
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen,
  Globe,
  Calculator,
  Atom,
  BookText,
  Languages,
  Brain,
  Leaf
} from 'lucide-react';
import { mockVideos } from '@/services/video/mockData';
import { Video } from '@/types/video';

// Icon mapping for subjects
const subjectIcons = {
  "Tarih": <BookOpen className="h-6 w-6" />,
  "Coğrafya": <Globe className="h-6 w-6" />,
  "Matematik": <Calculator className="h-6 w-6" />,
  "Fizik": <Atom className="h-6 w-6" />,
  "Kimya": <BookText className="h-6 w-6" />,
  "Biyoloji": <Leaf className="h-6 w-6" />,
  "İngilizce": <Languages className="h-6 w-6" />,
  "Edebiyat": <BookOpen className="h-6 w-6" />,
  "Felsefe": <Brain className="h-6 w-6" />
};

// Get unique subjects from mock data
const getUniqueSubjects = (): string[] => {
  const subjects = mockVideos
    .map(video => video.subject)
    .filter((subject): subject is string => subject !== undefined);
  
  return [...new Set(subjects)];
};

// Group videos by subject
const getVideosBySubject = (): Record<string, Video[]> => {
  const result: Record<string, Video[]> = {};
  
  mockVideos.forEach(video => {
    if (video.subject) {
      if (!result[video.subject]) {
        result[video.subject] = [];
      }
      result[video.subject].push(video);
    }
  });
  
  return result;
};

const SubjectGrid = () => {
  const navigate = useNavigate();
  const subjects = getUniqueSubjects();
  const videosBySubject = getVideosBySubject();

  const handleVideoClick = (videoId: number) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Dersler</h2>
      <div className="space-y-6">
        {subjects.map((subject) => (
          <div key={subject} className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="text-primary">
                {subjectIcons[subject] || <BookOpen className="h-6 w-6" />}
              </div>
              <h3 className="text-lg font-semibold">{subject}</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {videosBySubject[subject]?.map((video) => (
                <div
                  key={video.id}
                  onClick={() => handleVideoClick(video.id)}
                  className="flex items-center p-3 bg-background border rounded-lg shadow-sm hover:border-primary transition-colors cursor-pointer"
                >
                  <img 
                    src={video.thumbnailUrl} 
                    alt={video.title}
                    className="w-16 h-12 object-cover rounded mr-3"
                  />
                  <div>
                    <p className="text-sm font-medium">{video.title}</p>
                    <p className="text-xs text-muted-foreground">{video.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectGrid;
