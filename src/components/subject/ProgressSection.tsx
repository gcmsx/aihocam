
import React from 'react';
import SubjectStat from './SubjectStat';

interface ProgressSectionProps {
  topics: string[];
  color: string;
}

const ProgressSection = ({ topics, color }: ProgressSectionProps) => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">İlerleme Durumu</h2>
      <div className="card p-4 overflow-hidden">
        {topics.map((topic, index) => (
          <SubjectStat 
            key={index}
            topic={topic}
            progress={Math.floor(Math.random() * 100)}
            color={color}
          />
        ))}
      </div>
      
      <div className="mt-4 p-4 card">
        <h3 className="font-semibold mb-2">Genel Durum</h3>
        <div className="flex items-center justify-between">
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
      </div>
    </div>
  );
};

export default ProgressSection;
