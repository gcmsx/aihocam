
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import VideoCard from '@/components/VideoCard';
import NavBar from '@/components/NavBar';
import { mockVideos } from '@/services/video/mockData';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { subjectIcons } from '@/data/subjectIcons';
import { subjectTopics, subjectColors } from '@/data/subjectData';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { 
  ChartContainer, 
  ChartLegend, 
  ChartLegendContent, 
  ChartTooltip, 
  ChartTooltipContent 
} from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const SubjectsPage = () => {
  const { subject } = useParams<{ subject: string }>();
  const navigate = useNavigate();
  
  // Get videos for this subject
  const subjectVideos = mockVideos.filter(
    video => video.subject && video.subject === subject
  );
  
  // Handle back button
  const handleBack = () => {
    navigate('/');
  };
  
  // Handle video click
  const handleVideoClick = (videoId: number) => {
    navigate(`/video/${videoId}`);
  };
  
  if (!subject) {
    return <div className="p-4">Konu bulunamadı.</div>;
  }

  // Get topics for this subject
  const topics = subjectTopics[subject] || [];
  const color = subjectColors[subject] || '#1A1B41';

  // Generate random stats for chart
  const chartData = topics.map(topic => ({
    name: topic,
    value: Math.floor(Math.random() * 100),
    fill: color
  }));

  return (
    <div className="pb-16">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleBack}
            className="h-9 w-9"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="text-primary">
              {subjectIcons[subject] || subjectIcons["default"]}
            </div>
            <h1 className="text-2xl font-bold">{subject}</h1>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Videolar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {subjectVideos.map((video) => (
              <VideoCard
                key={video.id}
                id={video.id}
                title={video.title}
                thumbnailUrl={video.thumbnailUrl}
                duration={video.duration}
                saved={video.saved}
                onClick={() => handleVideoClick(video.id)}
              />
            ))}
          </div>
          
          {subjectVideos.length === 0 && (
            <div className="text-center p-8">
              <p className="text-muted-foreground">Bu konuda video bulunamadı.</p>
            </div>
          )}
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Konu Başlıkları</h2>
          <div className="card p-4 border rounded-lg bg-card">
            {topics.map((topic, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{topic}</span>
                  <span className="text-sm text-muted-foreground">{Math.floor(Math.random() * 100)}%</span>
                </div>
                <Progress value={Math.floor(Math.random() * 100)} className="h-2">
                  <div 
                    className="h-full rounded-full" 
                    style={{ backgroundColor: color, width: `${Math.floor(Math.random() * 100)}%` }} 
                  />
                </Progress>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">İstatistikler</h2>
          <Card className="p-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm">Tamamlanan Video</p>
                <p className="text-2xl font-bold">{Math.floor(Math.random() * 20 + 5)}</p>
              </div>
              <div>
                <p className="text-sm">Harcanan Zaman</p>
                <p className="text-2xl font-bold">{Math.floor(Math.random() * 10 + 2)} saat</p>
              </div>
              <div>
                <p className="text-sm">Başarı Oranı</p>
                <p className="text-2xl font-bold">%{Math.floor(Math.random() * 30 + 70)}</p>
              </div>
            </div>

            <div className="h-60 mt-4">
              <h3 className="text-md font-medium mb-2">Konu Bazlı Performans</h3>
              <ChartContainer config={{}} className="h-full">
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]} />
                  <ChartTooltip 
                    content={props => (
                      <ChartTooltipContent 
                        {...props} 
                        formatter={(value) => `${value}%`}
                      />
                    )}
                  />
                </BarChart>
              </ChartContainer>
            </div>
          </Card>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default SubjectsPage;
