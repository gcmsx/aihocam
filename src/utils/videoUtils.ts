
import { mockVideos } from '@/services/video/mockData';
import { Video } from '@/types/video';
import { GradeLevel } from '@/data/gradeData';

// Initialize mock videos with course data
const initializeMockVideos = () => {
  // Clear any existing videos
  mockVideos.length = 0;
  
  // Define subjects
  const subjects = [
    'Tarih', 'Coğrafya', 'Felsefe', 'Matematik', 
    'Fizik', 'Kimya', 'Biyoloji', 'İngilizce', 'Edebiyat'
  ];
  
  // Create 6 videos for each subject
  let videoId = 1;
  subjects.forEach(subject => {
    for (let i = 1; i <= 6; i++) {
      const video: Video = {
        id: videoId++,
        title: `${subject} Dersi ${i}: ${getVideoTitle(subject, i)}`,
        thumbnailUrl: `/placeholder.svg`,
        duration: `${Math.floor(Math.random() * 10) + 10}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
        saved: false,
        subject: subject,
        grade: 9, // Default to 9th grade
        description: getSubjectDescription(subject),
      };
      
      mockVideos.push(video);
    }
  });
};

// Generate video titles based on subject
const getVideoTitle = (subject: string, index: number) => {
  const titlesBySubject = {
    'Tarih': [
      'Osmanlı İmparatorluğu\'nun Kuruluşu',
      'Kurtuluş Savaşı ve Cumhuriyet',
      'İlk Uygarlıklar',
      'Orta Çağ Tarihi',
      'Fransız Devrimi',
      'Sanayi Devrimi'
    ],
    'Coğrafya': [
      'Türkiye\'nin İklimi',
      'Dünya\'nın Yapısı',
      'Nüfus ve Yerleşme',
      'Ekonomik Coğrafya',
      'Doğal Afetler',
      'Enerji Kaynakları'
    ],
    'Felsefe': [
      'Felsefeye Giriş',
      'Bilgi Felsefesi',
      'Ahlak Felsefesi',
      'Varlık Felsefesi',
      'Siyaset Felsefesi',
      'Din Felsefesi'
    ],
    'Matematik': [
      'Sayılar ve Cebir',
      'Fonksiyonlar',
      'Türev Uygulamaları',
      'İntegral',
      'Olasılık',
      'Geometri'
    ],
    'Fizik': [
      'Mekanik',
      'Elektrik ve Manyetizma',
      'Termodinamik',
      'Optik',
      'Modern Fizik',
      'Dalgalar'
    ],
    'Kimya': [
      'Maddenin Yapısı',
      'Periyodik Tablo',
      'Kimyasal Tepkimeler',
      'Asitler ve Bazlar',
      'Organik Kimya',
      'Kimya ve Enerji'
    ],
    'Biyoloji': [
      'Hücre Yapısı',
      'Genetik',
      'Evrim',
      'Ekosistemler',
      'İnsan Anatomisi',
      'Bitki Biyolojisi'
    ],
    'İngilizce': [
      'Temel Gramer',
      'Zamanlar ve Kullanımları',
      'Speaking Practice',
      'Günlük Konuşmalar',
      'Akademik Yazma',
      'İş İngilizcesi'
    ],
    'Edebiyat': [
      'Divan Edebiyatı',
      'Tanzimat Edebiyatı',
      'Cumhuriyet Dönemi',
      'Şiir Analizi',
      'Roman İncelemesi',
      'Modern Türk Edebiyatı'
    ]
  };
  
  return titlesBySubject[subject][index - 1] || `${subject} Konusu ${index}`;
};

// Initialize mock videos on module load
initializeMockVideos();

// Get all videos for a specific subject
export const getSubjectVideos = (subject: string): Video[] => {
  return mockVideos.filter(video => video.subject === subject);
};

// Get subject videos for a specific grade
export const getSubjectGradeVideos = (subject: string, grade: GradeLevel): Video[] => {
  return mockVideos.filter(
    video => video.subject === subject && video.grade === grade
  );
};

// Get subject-specific video description
export const getSubjectDescription = (subject: string) => {
  const descriptions = {
    'Fizik': "Bu videoda, fiziğin temel prensiplerini ve günlük hayatta nasıl uygulandığını öğreneceksiniz. Newton'un hareket kanunları, enerji korunumu ve momentum gibi temel kavramlar ele alınacaktır.",
    'Matematik': "Bu matematik dersinde, türev kavramı, türev alma kuralları ve türevin günlük hayattaki uygulamalarını öğreneceksiniz.",
    'Kimya': "Bu kimya dersinde, periyodik tablo ve elementlerin özellikleri detaylı olarak incelenecektir.",
    'Biyoloji': "Bu biyoloji dersinde, hücre yapısı, organeller ve hücresel fonksiyonlar hakkında kapsamlı bilgi edineceksiniz.",
    'Tarih': "Bu tarih dersinde, modern Türkiye'nin kuruluş süreci ve Cumhuriyet'in ilanına giden olaylar zincirini öğreneceksiniz.",
    'Coğrafya': "Bu coğrafya dersinde, Türkiye'nin fiziki özellikleri, iklimi, bitki örtüsü ve su kaynakları hakkında detaylı bilgi edineceksiniz.",
    'Felsefe': "Bu felsefe dersinde, varoluşçuluk akımının tarihsel gelişimi, temel kavramları ve önemli temsilcileri incelenecektir.",
    'İngilizce': "Bu İngilizce dersinde, günlük konuşma kalıpları, sık kullanılan ifadeler ve pratik yapma teknikleri öğreneceksiniz.",
    'Edebiyat': "Bu edebiyat dersinde, şiir analizi teknikleri ve Türk edebiyatındaki önemli şiir akımları incelenecektir."
  };
  
  return descriptions[subject] || "Bu derste konu anlatımı ve örnekler bulacaksınız.";
};
