
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VideoCard from "@/components/VideoCard";
import { Video } from "@/types/video";

interface HomeTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  videos: { [key: string]: Video[] };
  handleVideoClick: (videoId: number) => void;
  handleSaveVideo: (videoId: number) => void;
}

const HomeTabs = ({
  activeTab,
  setActiveTab,
  videos,
  handleVideoClick,
  handleSaveVideo,
}: HomeTabsProps) => {
  const gradeNames = {
    '9': '9. Sınıf',
    '10': '10. Sınıf',
    '11': '11. Sınıf',
    '12': '12. Sınıf',
  };

  return (
    <div className="mt-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full grid grid-cols-4 mb-4">
          {Object.keys(gradeNames).map((grade) => (
            <TabsTrigger key={grade} value={grade} className="text-xs md:text-sm">
              {gradeNames[grade]}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(videos).map(([grade, gradeVideos]) => (
          <TabsContent key={grade} value={grade} className="space-y-4">
            <h2 className="text-lg font-semibold mb-4">{gradeNames[grade]} Videoları</h2>
            {gradeVideos.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {gradeVideos.map((video) => (
                  <VideoCard
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    thumbnailUrl={video.thumbnailUrl}
                    duration={video.duration}
                    subject={video.subject}
                    grade={video.grade}
                    onClick={() => handleVideoClick(video.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                Bu sınıfa ait video bulunamadı.
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default HomeTabs;
