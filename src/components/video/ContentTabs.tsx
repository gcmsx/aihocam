
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VideoExamples from './VideoExamples';

interface Example {
  question: string;
  options?: string[];
  answer?: string;
  explanation?: string;
}

interface ContentTabsProps {
  description?: string;
  examples?: Example[];
  videoId?: number;
}

const ContentTabs = ({ description, examples = [], videoId }: ContentTabsProps) => {
  return (
    <Tabs defaultValue="content" className="w-full">
      <TabsList className="w-full grid grid-cols-2">
        <TabsTrigger value="content">Konu Anlatımı</TabsTrigger>
        <TabsTrigger value="questions">Örnek Sorular</TabsTrigger>
      </TabsList>
      
      <TabsContent value="content" className="mt-4">
        <div className="prose">
          <p>{description}</p>
        </div>
      </TabsContent>
      
      <TabsContent value="questions" className="mt-4">
        {examples && examples.length > 0 ? (
          <VideoExamples examples={examples} videoId={videoId} />
        ) : (
          <div className="text-center py-6 text-muted-foreground">
            Bu video için örnek soru bulunmamaktadır.
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
};

export default ContentTabs;
