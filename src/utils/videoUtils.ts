
import { mockVideos } from '@/services/video/mockData';
import { Video } from '@/types/video';
import { GradeLevel } from '@/data/gradeData';

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

// Get subject-specific examples based on subject name
export const getSubjectExamples = (subject: string) => {
  const examplesBySubject = {
    'Fizik': [
      {
        question: "Bir cisim 10 m/s hızla hareket ederken, 5 saniye boyunca 2 m/s² sabit ivme ile hızlanıyor. Son hızı nedir?",
        options: ["20 m/s", "15 m/s", "18 m/s", "22 m/s"],
        answer: "20 m/s",
        explanation: "v = v₀ + at formülünü kullanarak: v = 10 m/s + (2 m/s² × 5 s) = 10 m/s + 10 m/s = 20 m/s"
      },
      {
        question: "Bir cismin kütlesi 5 kg ve üzerine 10 N kuvvet uygulanıyor. Cismin ivmesi nedir?",
        options: ["1 m/s²", "2 m/s²", "5 m/s²", "10 m/s²"],
        answer: "2 m/s²",
        explanation: "F = ma formülünü kullanarak: a = F/m = 10 N / 5 kg = 2 m/s²"
      },
      {
        question: "Yerden 20 metre yükseklikten serbest bırakılan bir cisim yere kaç saniyede ulaşır? (g = 10 m/s²)",
        options: ["1 s", "2 s", "3 s", "4 s"],
        answer: "2 s",
        explanation: "h = (1/2)gt² formülünü kullanarak: 20 m = (1/2) × 10 m/s² × t², t² = 4, t = 2 s"
      }
    ],
    'Matematik': [
      {
        question: "5x + 3 = 18 denklemindeki x değeri nedir?",
        options: ["2", "3", "4", "5"],
        answer: "3",
        explanation: "5x + 3 = 18, 5x = 15, x = 3"
      },
      {
        question: "Bir dairenin alanı 36π cm² ise, yarıçapı kaç cm'dir?",
        options: ["3", "6", "9", "12"],
        answer: "6",
        explanation: "A = πr², 36π = πr², r² = 36, r = 6 cm"
      },
      {
        question: "log₂(8) değeri nedir?",
        options: ["2", "3", "4", "8"],
        answer: "3",
        explanation: "log₂(8) = log₂(2³) = 3"
      }
    ],
    'Kimya': [
      {
        question: "Periyodik tabloda asal gazlar hangi gruptadır?",
        options: ["1A", "7A", "8A", "3B"],
        answer: "8A",
        explanation: "Asal gazlar periyodik tablonun en sağında 8A (veya 18. grup) olarak bulunur."
      },
      {
        question: "H₂O molekülünde bulunan toplam elektron sayısı kaçtır?",
        options: ["8", "10", "18", "20"],
        answer: "10",
        explanation: "H atomu 1, O atomu 8 elektron içerir. H₂O'da toplam: 2×1 + 8 = 10 elektron bulunur."
      },
      {
        question: "Aşağıdakilerden hangisi bir redoks tepkimesidir?",
        options: ["NaCl + AgNO₃ → AgCl + NaNO₃", "HCl + NaOH → NaCl + H₂O", "Zn + CuSO₄ → ZnSO₄ + Cu", "CaCO₃ → CaO + CO₂"],
        answer: "Zn + CuSO₄ → ZnSO₄ + Cu",
        explanation: "Bu tepkimede Zn elektronu Cu'ya vererek yükseltgeniyor (Zn⁰ → Zn²⁺ + 2e⁻), Cu ise elektron alarak indirgeniyor (Cu²⁺ + 2e⁻ → Cu⁰)."
      }
    ],
    'Biyoloji': [],
    'Tarih': [],
    'Coğrafya': [],
    'Felsefe': [],
    'İngilizce': [],
    'Edebiyat': []
  };
  
  return examplesBySubject[subject] || [];
};
