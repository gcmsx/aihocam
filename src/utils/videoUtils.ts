
import { Video } from '@/types/video';

export const getSubjectVideos = (subject: string): Video[] => {
  return [
    {
      id: 100 + Math.floor(Math.random() * 900),
      title: `${subject}: Temel Kavramlar ve Giriş`,
      thumbnailUrl: 'https://images.unsplash.com/photo-1596005554384-d293674c91d7',
      duration: '18:30',
      saved: false,
      subject: subject
    },
    {
      id: 100 + Math.floor(Math.random() * 900),
      title: `${subject}: İleri Düzey Konular`,
      thumbnailUrl: 'https://images.unsplash.com/photo-1589519160732-57fc498494f8',
      duration: '24:15',
      saved: false,
      subject: subject
    },
    {
      id: 100 + Math.floor(Math.random() * 900),
      title: `${subject}: Soru Çözüm Teknikleri`,
      thumbnailUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
      duration: '15:45',
      saved: false,
      subject: subject
    },
    {
      id: 100 + Math.floor(Math.random() * 900),
      title: `${subject}: Konu Özeti`,
      thumbnailUrl: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6',
      duration: '12:20',
      saved: false,
      subject: subject
    },
  ];
};
